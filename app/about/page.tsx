import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Rocket, Award, BookOpen } from "lucide-react";
import { skillsData, experienceData, researchData, achievementData } from "@/lib/data";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

type SkillsByCategory = {
  [key: string]: typeof skillsData;
};

import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'About',
  description: 'Modern portfolio website with AI Resume Chat',
};

export default function About() {
  // Group skills by category
  const skillsByCategory = skillsData.reduce<SkillsByCategory>((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-accent/5 to-background ">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Introduction with Animated Background */}
        <section className="relative space-y-6 p-8 rounded-2xl bg-card border border-primary/10 ">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern rounded-2xl animate-pulse" />
          <div className="relative">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              About Me
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto hidden">
              A passionate software engineer pushing the boundaries of
              technology through innovation and research.
            </p>

            <p className="mt-6  text-muted-foreground mx-auto">
              I am someone who believes that “LESS is MORE” and hence the
              practice of Agile is my kind of style.
            </p>
            <p className="mt-6  text-muted-foreground mx-auto">
              Basically, I love sharing the knowledge I have gained through my
              experience whether it is from the day to day work or simply extra
              knowledge from the Internet. One of the things I enjoy is that I
              occasionally produce screencasts on topics of web design and
              development. Furthermore, I am always looking forward to speak in
              user group discussions and meetings, as well as public events
              related to the web.
            </p>
            <p className="mt-6 text-muted-foreground mx-auto">
              Many developers and designers usually have other interests and
              hobbies that help them enjoy themselves. But as far as I am
              concerned, Web is my everything. Nevertheless, I do enjoy reading
              as well, especially on technical subjects, as well as self-help
              stuffs.
            </p>
            <p className="mt-6 mb-6 text-muted-foreground mx-auto">
              I&apos;m alway believe in 👇.
            </p>
            <div className=" border-l-4 border-green-500  p-4 w-fit">
              <p className="font-bold text-lg">
              &quot;Great teams aren&apos;t built on perfect LeetCode scores; they&apos;re
                built on collaboration and creativity.&quot;
              </p>
              <p className="text-sm  mt-2">
                — A reminder that teamwork and innovation matter more than acing
                contrived puzzles.
              </p>
            </div>
          </div>
        </section>

        {/* Experience with Timeline */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Experience</h2>
          <div className="space-y-8">
            {experienceData.map((exp, index) => (
              <Card key={index} className="relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-primary/50 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="md:flex w-64 h-full rounded-xl bg-primary/10 hidden items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Image
                        src={"/img/" + exp.workplaceImg}
                        width={200}
                        height={200}
                        alt={exp.title}
                        className="w-full rounded-xl max-h-40 object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-muted-foreground">{exp.company}</p>
                        </div>
                        <Badge className="hidden" variant="outline">
                          {exp.period}
                        </Badge>
                        <Image src={"/img/" + exp.logo} className="h-9 w-32" height={36} width={800} alt={exp.company} />
                      </div>
                      <p>{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Research with Modern Cards */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Research</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {researchData.map((item) => (
              <Card
                key={item.title}
                className="group hover:shadow-xl transition-all"
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <BookOpen className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.publication}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline">{item.year}</Badge>
                      <span className="text-sm text-muted-foreground">
                        {item.impact}
                      </span>
                    </div>
                    <p>{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills with Interactive Visualization */}
        <section className="space-y-6 ">
          <h2 className="text-3xl font-bold">Tech Skills</h2>
          <div className="flex  flex-col md:flex-row gap-8 justify-between">
            {Object.entries(skillsByCategory).map(([category, skills]) => (
              <Card
                key={category}
                className="overflow-hidden group hover:shadow-lg transition-all w-full"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Brain className="h-5 w-5 text-primary" />
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-6 justify-start">
                    {skills.map((skill) => (
                      <div key={skill.name} className="space-y-2 group/skill">
                        <div className="flex justify-between items-center gap-2 text-primary-foreground bg-primary px-3 rounded-full py-2">
                          <span className="font-medium group-hover/skill:text-secondary transition-colors">
                            {skill.name}
                          </span>
                          <Badge
                            variant="secondary"
                            className="group-hover/skill:bg-primary group-hover/skill:text-primary-foreground transition-colors"
                          >
                            {skill.level}%
                          </Badge>
                        </div>
                        <div className="relative h-2 hidden">
                          <div className="absolute inset-0 bg-primary/10 rounded-full" />
                          <div
                            className="absolute inset-0 bg-primary rounded-full transition-all duration-500 group-hover/skill:opacity-100 opacity-80"
                            style={{
                              width: `${skill.level}%`,
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full animate-pulse" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>


           {/* Key Achievements */}
           <section className="space-y-6 ">
          <h2 className="text-3xl font-bold">Key Achievements</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-between">
            {achievementData.map((achievement, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-lg transition-all w-full h-fit"
              >
                <CardContent className="p-0">
                  <Image className="h-full w-full" src={"/img/" + achievement.image} width={400} height={200} alt={achievement.description}/>
                  <p className="p-6">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
