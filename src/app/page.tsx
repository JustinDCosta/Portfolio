"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ChevronRight,
  Code2,
  Cpu,
  Globe,
  Database,
  Search,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import Image from "next/image";
import { AetherFlowHero } from "@/components/ui/aether-flow-hero";
import { LightPullThemeSwitcher } from "@/components/ui/light-pull-theme-switcher";
import { SplineScene } from "@/components/ui/splite";
import { useTheme } from "next-themes";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
    
    // Global mouse tracking hack for Spline Canvas
    const handlePointerMove = (e: PointerEvent) => {
      // Find the Spline canvas
      const canvas = document.querySelector('.spline-scene-wrapper canvas') as HTMLCanvasElement;
      if (canvas) {
        // Dispatch the window PointerEvent to the canvas so it simulates looking at the mouse globally
        const clonedEvent = new PointerEvent('pointermove', {
          clientX: e.clientX,
          clientY: e.clientY,
          bubbles: true,
          cancelable: true,
          pointerId: e.pointerId,
          pointerType: e.pointerType,
          isPrimary: e.isPrimary
        });
        canvas.dispatchEvent(clonedEvent);
      }
    };
    
    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  const isDark = mounted ? (theme === "dark" || (theme === "system" && systemTheme === "dark")) : true;
  const [activeJourneyTab, setActiveJourneyTab] = useState<"work" | "education">("work");

  const skills = [
    { name: "React.js / Frontend", icon: Globe, color: "text-blue-500" },
    { name: "Node.js / PHP / Backend", icon: Database, color: "text-green-500" },
    { name: "Python", icon: Code2, color: "text-yellow-500" },
    { name: "AI Integration", icon: Cpu, color: "text-purple-500" },
    { name: "Prompt Engineering", icon: Search, color: "text-pink-500" },
    { name: "AWS / Server Config", icon: Globe, color: "text-orange-500" },
    { name: "Tailwind CSS", icon: Code2, color: "text-cyan-500" },
  ];

  const projects = [
    {
      title: "Frenmot",
      description: "Personalized French learning companion application.",
      tech: ["Web Application"],
      link: "#"
    },
    {
      title: "Kaj - Task Reminder",
      description: "Engineered a web and Android application using Flutter and Dart featuring custom reminders and cross-platform syncing capabilities.",
      tech: ["Flutter", "Dart", "Android", "Web"],
      link: "#"
    },
    {
      title: "Atmoxis",
      description: "Production-quality weather web app focused on premium UX, atmospheric visuals, and practical weather intelligence.",
      tech: ["Web App", "UX/UI"],
      link: "#"
    },
    {
      title: "ScreenDusk",
      description: "Created a lightweight Windows desktop app that applies a software dimming overlay across one or multiple monitors for privacy/low-light usage.",
      tech: ["Windows Desktop App", "C#"],
      link: "#"
    },
    {
      title: "Classic Snake",
      description: "Modern, highly-polished web implementation of the classic Snake arcade game using raw HTML5 Canvas, CSS3, and JS.",
      tech: ["HTML5 Canvas", "CSS3", "JavaScript"],
      link: "#"
    },
    {
      title: "3D Decision Maker",
      description: "Beautifully designed 3D interactive tool completely with HTML, CSS, and JS. Utilizes true cryptographically secure randomness.",
      tech: ["HTML", "CSS", "3D JavaScript"],
      link: "#"
    }
  ];

  const workExperience = [
    {
      role: "Freelance Video Editor",
      company: "Self-Employed",
      period: "2020 - 2025",
      description: "Managed video post-production pipelines for diverse local and international clients. Coordinated projects efficiently across various global time zones and applied specialized sales techniques.",
    },
    {
      role: "Private Tutor",
      company: "Mathematics, Physics, and English",
      period: "2023 - 2025",
      description: "Delivered formal and professional academic instruction across multiple core disciplines. Leveraged a deep, thorough grasp of complex concepts.",
    },
    {
      role: "Delivery Courier",
      company: "Stuart",
      period: "2025",
      description: "Managed on-demand delivery logistics across Paris, France, utilizing the Stuart application ecosystem.",
    },
  ];

  const education = [
    {
      degree: "Bachelors of Computer Science",
      institution: "Epita - School of Engineering and Computer Science, Paris",
      period: "Sept 2025 - 2028",
      description: "Relevant Coursework: Prompt Engineering.",
    },
    {
      degree: "Diplôme Universitaire d’Études Françaises (DUEF)",
      institution: "Université Savoie Mont Blanc, Chambéry",
      period: "Sept 2024 - April 2025",
      description: "Levels A1-30ECTS and A2-30ECTS completed.",
    },
    {
      degree: "Cambridge A'Level",
      institution: "Academia, Dhaka, Bangladesh",
      period: "2023 - 2024",
      description: "Higher Secondary Education.",
    },
    {
      degree: "Cambridge O'Level",
      institution: "BACHA English Medium School, Dhaka",
      period: "2021",
      description: "Secondary Education.",
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? "bg-slate-950 text-slate-50" : "bg-slate-50 text-slate-900"}`}>
      {/* Global Background */}
      <div className="fixed inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
        <AetherFlowHero />
      </div>

      {/* Top Navbar */}
      <nav className={`fixed top-0 w-full z-50 border-b backdrop-blur-sm transition-colors ${isDark ? "bg-slate-950/40 border-slate-800/50" : "bg-white/40 border-slate-200/50"}`}>
        <div className="relative max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight z-10 w-1/4">JD<span className="text-blue-500">.</span></div>
          <div className="hidden md:flex items-center justify-center space-x-8 text-sm font-medium z-10 w-2/4">
            <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
            <a href="#journey" className="hover:text-blue-500 transition-colors">Journey</a>
          </div>
          <div className="flex items-center justify-end space-x-6 z-10 w-1/4 h-full relative">
            <a href="#contact" className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors relative z-20">
              Get in touch
            </a>
            {/* Hanging theme switcher */}
            <div className="absolute top-6 -right-6 md:-right-16 lg:-right-24 xl:-right-32 h-32 pointer-events-auto -z-10">
              <LightPullThemeSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-24 pb-20 px-6 sm:px-12 max-w-7xl mx-auto space-y-32">
        
        {/* Hero Section */}
        <section id="about" className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-between gap-8 pt-12 pb-0 relative scroll-mt-24">
          {/* Left: 3D Robot */}
          <div className="w-full lg:w-1/3 h-[450px] lg:h-[550px] overflow-visible relative flex-shrink-0 flex flex-col items-center justify-center spline-scene-wrapper self-end -mb-8 lg:-ml-12">
            <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full absolute inset-0 scale-110 origin-bottom" />
          </div>

          {/* Middle: Content */}
          <div className="w-full lg:w-1/3 text-center lg:text-left space-y-6 flex-grow px-2 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6">
                Justin <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">D'COSTA</span>
              </h1>
              <p className={`text-lg leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                I am a Full Stack Developer specializing in highly interactive web applications and robust cloud architectures. By combining modern front-end ecosystems with reliable backend infrastructure, I transform complex problems into seamless digital experiences.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center md:justify-start gap-4 pt-4"
            >
              <a href="https://github.com/JustinDCosta" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-slate-800/50 hover:bg-blue-500/20 hover:text-blue-400 transition-all border border-slate-700/50">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/justindcosta" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-slate-800/50 hover:bg-blue-500/20 hover:text-blue-400 transition-all border border-slate-700/50">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@justindcosta.dev" className="p-3 rounded-full bg-slate-800/50 hover:bg-blue-500/20 hover:text-blue-400 transition-all border border-slate-700/50">
                <Mail size={20} />
              </a>
            </motion.div>
          </div>

          {/* Right: Profile Photo */}
          <div className="w-full lg:w-1/4 flex justify-center lg:justify-end flex-shrink-0 z-10">
             <div className="relative w-64 h-80 lg:w-72 lg:h-[350px] xl:w-80 xl:h-[400px] rounded-2xl overflow-hidden border-4 border-slate-800 shadow-2xl">
               <Image
                 src="/justin_dcosta.png"
                 alt="Justin D'Costa"
                 fill
                 className="object-cover"
                 priority
                 sizes="(max-width: 1024px) 20rem, 20rem"
               />
             </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-12 scroll-mt-24">
          <div className="text-center space-y-4">
             <h2 className="text-3xl font-bold">Technical Arsenal</h2>
             <p className={`max-w-2xl mx-auto ${isDark ? "text-slate-400" : "text-slate-600"}`}>Core technologies I work with on a daily basis.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border shadow-sm backdrop-blur-sm transition-all hover:scale-105 ${isDark ? "bg-slate-900/50 border-slate-800 hover:border-slate-700" : "bg-white/50 border-slate-200 hover:border-slate-300"}`}
              >
                <skill.icon size={18} className={skill.color} />
                <span className="font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-12 scroll-mt-24">
          <div className="text-center space-y-4">
             <h2 className="text-3xl font-bold">Featured Projects</h2>
             <p className={`max-w-2xl mx-auto ${isDark ? "text-slate-400" : "text-slate-600"}`}>Some of my recent work that showcases my technical capabilities.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className={`group relative flex flex-col justify-between p-8 rounded-2xl border backdrop-blur-sm transition-all hover:-translate-y-2 ${isDark ? "bg-slate-900/50 border-slate-800 hover:border-slate-700" : "bg-white/50 border-slate-200 hover:border-slate-300"}`}
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className={`text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-8">
                  {project.tech.map(tech => (
                    <span key={tech} className={`text-xs px-2.5 py-1.5 rounded-md font-medium ${isDark ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-700"}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Separated Journey Section */}
        <section id="journey" className="space-y-12 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-4">
             <h2 className="text-3xl font-bold">My Journey</h2>
             <p className={`max-w-2xl mx-auto ${isDark ? "text-slate-400" : "text-slate-600"}`}>Professional experience and educational background.</p>
          </div>
          
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveJourneyTab("work")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${activeJourneyTab === "work" ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25" : isDark ? "bg-slate-900 text-slate-400 hover:bg-slate-800" : "bg-white text-slate-600 hover:bg-slate-100"}`}
            >
              <Briefcase size={18} /> Experience
            </button>
            <button
              onClick={() => setActiveJourneyTab("education")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${activeJourneyTab === "education" ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25" : isDark ? "bg-slate-900 text-slate-400 hover:bg-slate-800" : "bg-white text-slate-600 hover:bg-slate-100"}`}
            >
              <GraduationCap size={18} /> Education
            </button>
          </div>

          <div className="relative pl-8 md:pl-0">
             {/* Timeline Line */}
             <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-500/50 to-transparent -translate-x-1/2" />
             
             <AnimatePresence mode="wait">
               {activeJourneyTab === "work" && (
                 <motion.div
                   key="work"
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: 20 }}
                   className="space-y-12"
                 >
                   {workExperience.map((item, idx) => (
                      <div key={idx} className={`relative flex flex-col md:flex-row items-center md:justify-between ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                        <div className="hidden md:block w-5/12" />
                        
                        <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-950 -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                        
                        <div className={`w-full md:w-5/12 p-6 rounded-2xl border backdrop-blur-sm transition-all hover:-translate-y-1 ${isDark ? "bg-slate-900/50 border-slate-800 hover:border-slate-700" : "bg-white/50 border-slate-200 hover:border-slate-300"} ml-4 md:ml-0`}>
                          <span className="text-sm font-semibold text-blue-500 mb-2 block">{item.period}</span>
                          <h3 className="text-xl font-bold mb-1">{item.role}</h3>
                          <h4 className={`text-sm mb-4 ${isDark ? "text-slate-400" : "text-slate-500"}`}>{item.company}</h4>
                          <p className={`text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>{item.description}</p>
                        </div>
                      </div>
                   ))}
                 </motion.div>
               )}

               {activeJourneyTab === "education" && (
                 <motion.div
                   key="education"
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: 20 }}
                   className="space-y-12"
                 >
                   {education.map((item, idx) => (
                      <div key={idx} className={`relative flex flex-col md:flex-row items-center md:justify-between ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                        <div className="hidden md:block w-5/12" />
                        
                        <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-slate-950 -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
                        
                        <div className={`w-full md:w-5/12 p-6 rounded-2xl border backdrop-blur-sm transition-all hover:-translate-y-1 ${isDark ? "bg-slate-900/50 border-slate-800 hover:border-slate-700" : "bg-white/50 border-slate-200 hover:border-slate-300"} ml-4 md:ml-0`}>
                          <span className="text-sm font-semibold text-purple-500 mb-2 block">{item.period}</span>
                          <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                          <h4 className={`text-sm mb-4 ${isDark ? "text-slate-400" : "text-slate-500"}`}>{item.institution}</h4>
                          <p className={`text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>{item.description}</p>
                        </div>
                      </div>
                   ))}
                 </motion.div>
               )}
             </AnimatePresence>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-8 max-w-2xl mx-auto scroll-mt-24 pt-8">
          <div className="text-center space-y-3">
             <h2 className="text-3xl font-bold">Get In Touch</h2>
             <p className={`max-w-xl mx-auto text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>Have a project in mind or just want to say hi? Send me a message and I'll get back to you as soon as possible.</p>
          </div>
          <form 
            action="mailto:contact@justindcosta.dev" 
            method="post" 
            encType="text/plain" 
            className={`p-6 md:p-8 rounded-2xl border backdrop-blur-sm shadow-sm ${isDark ? "bg-slate-900/50 border-slate-800/80" : "bg-white/60 border-slate-200"} flex flex-col gap-5`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className={`text-sm font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}>Name</label>
                <input type="text" name="Name" required className={`px-4 py-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${isDark ? "bg-slate-800/50 border-slate-700 text-white placeholder-slate-500" : "bg-white border-slate-300 text-slate-900 placeholder-slate-400"}`} placeholder="Name" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={`text-sm font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}>Email</label>
                <input type="email" name="Email" required className={`px-4 py-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${isDark ? "bg-slate-800/50 border-slate-700 text-white placeholder-slate-500" : "bg-white border-slate-300 text-slate-900 placeholder-slate-400"}`} placeholder="Email" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className={`text-sm font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}>Message</label>
              <textarea name="Message" rows={4} required className={`px-4 py-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none ${isDark ? "bg-slate-800/50 border-slate-700 text-white placeholder-slate-500" : "bg-white border-slate-300 text-slate-900 placeholder-slate-400"}`} placeholder="How can I help you?"></textarea>
            </div>
            <button type="submit" className={`w-full py-3 mt-2 rounded-lg font-medium transition-colors border ${isDark ? "bg-slate-100 text-slate-900 hover:bg-slate-200 border-transparent" : "bg-slate-900 text-white hover:bg-slate-800 border-transparent"}`}>
              Send Message
            </button>
          </form>
        </section>

      </main>

      {/* Footer */}
      <footer className={`relative z-10 border-t ${isDark ? "border-slate-800 bg-slate-950/80" : "border-slate-200 bg-white/80"} backdrop-blur-xl py-8 mt-16`}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="font-bold text-2xl tracking-tight">JD<span className="text-blue-500">.</span></div>
            <p className={`text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>
              Building the future of the web.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="mailto:contact@justindcosta.dev" className={`p-2 rounded-full transition-colors border ${isDark ? "hover:bg-blue-500/20 text-slate-400 hover:text-blue-400 border-slate-700/50" : "hover:bg-blue-50 text-slate-500 hover:text-blue-600 border-slate-200"}`}>
              <Mail size={16} />
            </a>
            <a href="https://github.com/JustinDCosta" target="_blank" rel="noreferrer" className={`p-2 rounded-full transition-colors border ${isDark ? "hover:bg-blue-500/20 text-slate-400 hover:text-blue-400 border-slate-700/50" : "hover:bg-blue-50 text-slate-500 hover:text-blue-600 border-slate-200"}`}>
              <Github size={16} />
            </a>
            <a href="https://www.linkedin.com/in/justindcosta" target="_blank" rel="noreferrer" className={`p-2 rounded-full transition-colors border ${isDark ? "hover:bg-blue-500/20 text-slate-400 hover:text-blue-400 border-slate-700/50" : "hover:bg-blue-50 text-slate-500 hover:text-blue-600 border-slate-200"}`}>
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        <div className={`max-w-6xl mx-auto px-6 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm ${isDark ? "text-slate-500" : "text-slate-400"}`}>
          <p>&copy; {new Date().getFullYear()} Justin D'Costa. All rights reserved.</p>
          <p className="text-xs">Built with Next.js, Tailwind & Framer Motion</p>
        </div>
      </footer>
    </div>
  );
}