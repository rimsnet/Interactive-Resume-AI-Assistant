"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, Recycle, Send, Trash, Trash2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Message = {
  content: string;
  role: "user" | "assistant";
};

interface MessageInterface {
  role: string;
  content: string;
}

export default function ResumeAIAssistant() {
  const chatboxRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [input, setInput] = useState("");

  const defaultMessage: MessageInterface = {
    role: "assistant",
    content: "How can I help you learn more about Rimsan and his career?",
  };

  // Temporary state for SSR, replace with localStorage content on the client
  const [messages, setMessages] = useState<Array<MessageInterface>>([
    defaultMessage,
  ]);

  // Hydrate messages with localStorage content on client mount
  useEffect(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      setMessages([defaultMessage]); // Set the default message only if no saved messages exist
    }
  }, []);

  // Update localStorage only when messages change
  useEffect(() => {
    if (messages.length > 1) {
      localStorage.setItem("chatMessages", JSON.stringify(messages));
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      content: input,
      role: "user",
    };

    // Add AI response (dummy response for now)
    /* const aiResponse: Message = {
      id: (Date.now() + 1).toString(),
      content: "I'm a demo AI assistant. This is a placeholder response. In a real implementation, this would be connected to an AI service.",
      type: 'ai',
      timestamp: new Date(),
    }; */

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    const newMessages = [...messages, userMessage];
    setInput("");
    setLoading(true);

    try {
      const apiMessage = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: newMessages }),
      }).then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      });

      const words = apiMessage.message.split(" ");
      let displayedMessage = "";

      words.forEach((word: string, index: number) => {
        setTimeout(() => {
          displayedMessage += `${word} `;
          setMessages([
            ...newMessages,
            { role: "assistant", content: displayedMessage.trim() },
          ]);

          if (words.length - 1 === index) {
            console.log("completed");
            setLoading(false);
          }
        }, index * 200);
      });
    } catch {
      setLoading(false);
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: "⚠️ Connection lost or timeout. Please try again.",
        },
      ]);
    }
  };

  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="h-full flex flex-col">
      {/* Chat Header */}
      <div className="p-4 border-b border-primary/10 bg-primary/5">
        <div className="flex items-center space-x-4">
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
          <h2 className="text-lg font-semibold">Resume AI Assistant</h2>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={chatboxRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start space-x-3 ${
              message.role === "user" ? "justify-end" : ""
            }`}
          >
            {message.role === "assistant" && (
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Bot className="h-5 w-5 text-primary" />
              </div>
            )}
            <div
              className={`flex-1 ${
                message.role === "user" ? "text-right" : ""
              }`}
            >
              <div
                className={`${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground rounded-2xl rounded-tr-none inline-block"
                    : "bg-primary/5 rounded-2xl rounded-tl-none"
                } p-4`}
              >
                <p
                  dangerouslySetInnerHTML={{
                    __html: message.content.replace(/\n/g, "<br>"),
                  }}
                ></p>
              </div>
            </div>
            {message.role === "user" && (
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <User className="h-5 w-5 text-primary-foreground" />
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div className="flex flex-row justify-start items-center">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Bot className="h-5 w-5 text-primary" />
            </div>
           
           <div className="ml-3 flex space-x-2">
              <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div className="h-2 w-2 bg-gray-400 rounded-full animate-spin delay-200"></div>
              <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-400"></div>
            </div>
           
          </div>
        )}
      </div>

      {/* Chat Input */}
      <div className="p-4 border-t border-primary/10">
        <form onSubmit={handleSubmit} className="flex space-x-2">
         <Button disabled={loading} onClick={() => {
                            setMessages([defaultMessage]);
                            localStorage.removeItem("chatMessages");
                        }} className={`${messages.length > 1 ? "bg-red-500" : "bg-gray-400"
                            }  text-white px-2 py-1  font-semibold cursor-pointer hidden md:block`}>
            {messages.length > 1 ? <Trash2 className="w-4 h-4" /> : <Trash  className="w-4 h-4" />}
          </Button>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything about my experience..."
            className="flex-1"
            disabled={loading}
          />
       
          <Button type="submit"  disabled={loading}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
