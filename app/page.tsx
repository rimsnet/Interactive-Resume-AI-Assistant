import {  Sparkles } from "lucide-react";
import Link from "next/link";
import ResumeAIAssistant from "@/components/ResumeAIAssistant";
import { Footer } from "@/components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Animated Background */}
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 animate-gradient" />
        <div className=" absolute inset-0 bg-grid-white/[0.01] bg-grid-pattern" />

        <div className="relative pt-20 px-4 sm:px-6 lg:px-8 ">
          <div className="max-w-7xl mx-auto">
            {/* Main Content */}
            <div className="flex flex-col lg:flex-row gap-12 items-center justify-between py-12">
              {/* Left Side - Welcome Text */}
              <div className="flex-1 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/10 bg-primary text-sm text-primary-foreground">
                  <Sparkles className="h-4 w-4 mr-2" />
                  <span>AI-Powered Portfolio Experience</span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                  Interactive Resume
                  <br />
                  AI Assistant
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                  Experience a new way of exploring professional portfolios.
                  Chat with an AI that knows every detail about my experience
                  and skills.
                </p>
              </div>

              {/* Right Side - AI Chat Interface */}
              <div className="w-full lg:w-[800px] h-[600px] bg-card rounded-2xl shadow-2xl border border-primary/10 overflow-hidden">
                <ResumeAIAssistant />
              </div>
            </div>

            {/* Quick Links with Advanced Hover Effects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
              {[
                {
                  href: "/about",
                  title: "About Me",
                  description: "Discover my journey and expertise",
                  icon: "👨‍💻",
                },
                {
                  href: "/projects",
                  title: "Projects",
                  description: "Explore my creative work",
                  icon: "🚀",
                },
                {
                  href: "/contact",
                  title: "Contact",
                  description: "Let's create something together",
                  icon: "✉️",
                },
              ].map((link) => (
                <Link key={link.href} href={link.href}>
                  <div className="group relative bg-card hover:bg-accent rounded-xl p-6 transition-all duration-300 hover:shadow-xl overflow-hidden text-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative space-y-2">
                      <span className="text-4xl">{link.icon}</span>
                      <h3 className="text-xl font-semibold">{link.title}</h3>
                      <p className="text-muted-foreground">
                        {link.description}
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-300" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
              <Footer />
        </div>
      </div>

      
    </div>
  );
}
