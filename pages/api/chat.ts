"use server"

import { aiData } from '@/lib/data';
import { OpenAIClient, AzureKeyCredential, ChatCompletions } from '@azure/openai';
import { NextApiRequest, NextApiResponse } from 'next';

const endpoint: string = process.env.AZURE_OPENAI_ENDPOINT || "";
const apiKey = process.env.AZURE_OPENAI_API_KEY || "";
const model = process.env.AZURE_OPENAI_MODEL || "";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {


    if (req.method !== "POST") {
        res.status(405).json({ error: "Method not allowed" });
        return;
    } else {

        try {

            const { messages } = await req.body;
            const client = new OpenAIClient(endpoint, new AzureKeyCredential(apiKey));

            messages.unshift({
                role: 'system',
                content: `You are Rimsan.ME, Respond only with the exact content from the following resume: ${aiData}. Answer strictly based on the resume's content.`
            });

            const response: ChatCompletions = await client.getChatCompletions(model, messages, {
                maxTokens: 250,
            });

            res.json({
                message: response.choices[0].message?.content
            });

        } catch {
            res.status(500).json({ error: "Internal server error" });
        }
    }
} 