import { Github } from "lucide-react";

export function Footer() {
    return          <div className="text-center pb-14 pt-8">
    <p className="text-muted-foreground mt-10 mb-5 text-sm">
    Design & Develop By: <a href="https://www.rimsan.me">Rimsan</a>{" "}  
    </p>
    <p>
      <a href="https://github.com/rimsnet/Interactive-Resume-AI-Assistant" target="_blank" className="bg-foreground cursor-pointer py-2 px-3 text-primary-foreground rounded-full">
        Download <Github className="w-5 h-5 inline-block" />{" "}
      </a>
    </p>
    
  </div>
}