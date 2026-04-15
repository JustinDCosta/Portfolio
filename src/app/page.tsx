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
  FileText,
  Download,
} from "lucide-react";
import Image from "next/image";
import { AetherFlowHero } from "@/components/ui/aether-flow-hero";
import { LightPullThemeSwitcher } from "@/components/ui/light-pull-theme-switcher";
import { SplineScene } from "@/components/ui/splite";
import { useTheme } from "next-themes";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const [language, setLanguage] = useState<"en" | "fr">("en");
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
    { name: language === 'en' ? "AI Integration" : "Intégration IA", icon: Cpu, color: "text-purple-500" },
    { name: language === 'en' ? "Prompt Engineering" : "Ingénierie des Prompts", icon: Search, color: "text-pink-500" },
    { name: language === 'en' ? "AWS / Server Config" : "AWS / Configuration de Serveurs", icon: Globe, color: "text-orange-500" },
    { name: "Tailwind CSS", icon: Code2, color: "text-cyan-500" },
  ];

  const projects = [
    {
      title: "Frenmot",
      description: language === 'en' ? "Personalized French learning companion application." : "Application accompagnatrice personnalisée pour l'apprentissage du français.",
      tech: language === 'en' ? ["Web Application"] : ["Application Web"],
      link: "https://frenmot.web.app/"
    },
    {
      title: "Kaj - Task Reminder",
      description: language === 'en' ? "Engineered a web and Android application using Flutter and Dart featuring custom reminders and cross-platform syncing capabilities." : "Développement d'une application web et Android avec Flutter et Dart, incluant des rappels personnalisés et une synchronisation multiplateforme.",
      tech: ["Flutter", "Dart", "Android", "Web"],
      link: "https://task-reminder-app-2d1fa.web.app/"
    },
    {
      title: "Atmoxis",
      description: language === 'en' ? "Production-quality weather web app focused on premium UX, atmospheric visuals, and practical weather intelligence." : "Application web météo de qualité production, axée sur une interface utilisateur premium, des visuels atmosphériques et des informations météorologiques pratiques.",
      tech: language === 'en' ? ["Web App", "UX/UI"] : ["Application Web", "UX/UI"],
      link: "https://atmoxis.vercel.app/"
    },
    {
      title: "ScreenDusk",
      description: language === 'en' ? "Created a lightweight Windows desktop app that applies a software dimming overlay across one or multiple monitors for privacy/low-light usage." : "Création d'une application de bureau Windows légère appliquant un filtre d'assombrissement logiciel sur un ou plusieurs écrans pour la confidentialité ou une utilisation en faible luminosité.",
      tech: language === 'en' ? ["Windows Desktop App", "C#"] : ["Application de bureau Windows", "C#"],
      link: "https://github.com/JustinDCosta/ScreenDusk"
    },
    {
      title: "Classic Snake",
      description: language === 'en' ? "Modern, highly-polished web implementation of the classic Snake arcade game using raw HTML5 Canvas, CSS3, and JS." : "Implémentation web moderne et très soignée du jeu d'arcade classique Snake en utilisant HTML5 Canvas, CSS3 et JS pur.",
      tech: ["HTML5 Canvas", "CSS3", "JavaScript"],
      link: "https://classic-game-of-snake.web.app/"
    },
    {
      title: "3D Decision Maker",
      description: language === 'en' ? "Beautifully designed 3D interactive tool completely with HTML, CSS, and JS. Utilizes true cryptographically secure randomness." : "Outil interactif 3D magnifiquement conçu, entièrement avec HTML, CSS et JS. Utilise une véritable composante aléatoire cryptographiquement sécurisée.",
      tech: ["HTML", "CSS", "3D JavaScript"],
      link: "https://minimalist-decision-maker.web.app/"
    }
  ];

  const workExperience = [
    {
      role: language === 'en' ? "Freelance Video Editor" : "Monteur Vidéo Freelance",
      company: language === 'en' ? "Self-Employed" : "Indépendant",
      period: "2020 - 2025",
      description: language === 'en' ? "Managed video post-production pipelines for diverse local and international clients. Coordinated projects efficiently across various global time zones and applied specialized sales techniques." : "Gestion des chaînes de post-production vidéo pour divers clients locaux et internationaux. Coordination efficace des projets à travers différents fuseaux horaires mondiaux et application de techniques de vente spécialisées.",
    },
    {
      role: language === 'en' ? "Private Tutor" : "Professeur Particulier",
      company: language === 'en' ? "Mathematics, Physics, and English" : "Mathématiques, Physique et Anglais",
      period: "2023 - 2025",
      description: language === 'en' ? "Delivered formal and professional academic instruction across multiple core disciplines. Leveraged a deep, thorough grasp of complex concepts." : "Prestation d'enseignement académique formel et professionnel dans plusieurs disciplines fondamentales. Mise à profit d'une compréhension approfondie de concepts complexes.",
    },
    {
      role: language === 'en' ? "Delivery Courier" : "Livreur",
      company: "Stuart",
      period: "2025",
      description: language === 'en' ? "Managed on-demand delivery logistics across Paris, France, utilizing the Stuart application ecosystem." : "Gestion de la logistique des livraisons à la demande à Paris, France, en utilisant l'écosystème de l'application Stuart.",
    },
  ];

  const education = [
    {
      degree: language === 'en' ? "Bachelors of Computer Science" : "Licence en Informatique",
      institution: "Epita - School of Engineering and Computer Science, Paris",
      period: language === 'en' ? "Sept 2025 - 2028" : "Sept 2025 - 2028",
      description: language === 'en' ? "Relevant Coursework: Prompt Engineering." : "Cours pertinents : Ingénierie des Prompts.",
    },
    {
      degree: "Diplôme Universitaire d’Études Françaises (DUEF)",
      institution: "Université Savoie Mont Blanc, Chambéry",
      period: language === 'en' ? "Sept 2024 - April 2025" : "Sept 2024 - Avril 2025",
      description: language === 'en' ? "Levels A1-30ECTS and A2-30ECTS completed." : "Niveaux A1-30ECTS et A2-30ECTS validés.",
    },
    {
      degree: "Cambridge A'Level",
      institution: "Academia, Dhaka, Bangladesh",
      period: "2023 - 2024",
      description: language === 'en' ? "Higher Secondary Education." : "Enseignement secondaire supérieur.",
    },
    {
      degree: "Cambridge O'Level",
      institution: "BACHA English Medium School, Dhaka",
      period: "2021",
      description: language === 'en' ? "Secondary Education." : "Enseignement secondaire.",
    }
  ];

  return (
    <div className="min-h-screen transition-colors duration-500 bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      {/* Global Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-80 mix-blend-multiply dark:opacity-60 dark:mix-blend-screen">
        <AetherFlowHero />
      </div>

      {/* Top Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b backdrop-blur-sm transition-colors bg-white/40 border-slate-200/50 dark:bg-slate-950/40 dark:border-slate-800/50">
        <div className="relative max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="z-10 w-1/4 flex items-center gap-4">
            <div className="font-bold text-xl tracking-tight">JD<span className="text-blue-500">.</span></div>
          </div>
          <div className="hidden md:flex items-center justify-center space-x-8 text-sm font-medium z-10 w-2/4">
            <a href="#about" className="hover:text-blue-500 transition-colors">{language === 'en' ? 'About' : 'À propos'}</a>
            <a href="#skills" className="hover:text-blue-500 transition-colors">{language === 'en' ? 'Skills' : 'Compétences'}</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors">{language === 'en' ? 'Projects' : 'Projets'}</a>
            <a href="#journey" className="hover:text-blue-500 transition-colors">{language === 'en' ? 'Journey' : 'Parcours'}</a>
          </div>
            <div className="flex items-center justify-end space-x-4 z-10 w-1/4 h-full relative">
              <button 
                onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
                className={`relative flex items-center w-[4.5rem] h-8 rounded-full p-1 transition-colors duration-300 ${isDark ? "bg-slate-900 border border-slate-700 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]" : "bg-slate-200 border border-slate-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"}`}
                aria-label="Toggle language"
              >
                <div className={`absolute left-1 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center text-[10px] font-bold ${isDark ? "bg-blue-600 text-white" : "bg-white text-slate-800"} ${language === 'fr' ? "translate-x-8" : "translate-x-0"}`}>
                  {language === 'en' ? 'EN' : 'FR'}
                </div>
                <div className={`absolute inset-0 w-full flex items-center justify-between px-3 text-[10px] font-bold uppercase tracking-wider pointer-events-none ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                  <span className={`transition-opacity duration-300 ${language === 'en' ? "opacity-0" : "opacity-100"}`}>EN</span>
                  <span className={`transition-opacity duration-300 ${language === 'fr' ? "opacity-0" : "opacity-100"}`}>FR</span>
                </div>
              </button>
              <a href="#contact" className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors relative z-20 whitespace-nowrap">
              {language === 'en' ? 'Get in touch' : 'Contactez-moi'}
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
                {language === 'en' 
                  ? 'I am a Full Stack Developer specializing in highly interactive web applications and robust cloud architectures. By combining modern front-end ecosystems with reliable backend infrastructure, I transform complex problems into seamless digital experiences.'
                  : 'Je suis un développeur Full Stack spécialisé dans les applications web hautement interactives et les architectures cloud robustes. En combinant des environnements front-end modernes avec une infrastructure back-end fiable, je transforme des problèmes complexes en expériences numériques fluides.'
                }
              </p>
              <p className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold mt-4 ${isDark ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30" : "bg-emerald-100 text-emerald-800 border border-emerald-200"}`}>
                {language === 'en' ? 'Available from June 2026' : 'Disponible à partir de juin 2026'}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4"
            >
              <div className="flex gap-4">
                <a href="https://github.com/JustinDCosta" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-slate-800/50 hover:bg-blue-500/20 hover:text-blue-400 transition-all border border-slate-700/50">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/justindcosta" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-slate-800/50 hover:bg-blue-500/20 hover:text-blue-400 transition-all border border-slate-700/50">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:contact@justindcosta.dev" className="p-3 rounded-full bg-slate-800/50 hover:bg-blue-500/20 hover:text-blue-400 transition-all border border-slate-700/50">
                  <Mail size={20} />
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-4 sm:ml-2">
                <motion.a 
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  href="/cv/Justin D'COSTA CV.pdf" 
                  target="_blank" 
                  rel="noreferrer" 
                  className={`group relative flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-bold transition-all text-sm overflow-hidden shadow-lg ${isDark ? "bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 text-blue-100 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]" : "bg-gradient-to-r from-white to-slate-50 border border-slate-200 text-blue-900 hover:border-blue-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"}`}
                >
                  <span className={`absolute inset-0 w-full h-full bg-gradient-to-r ${isDark ? "from-blue-600/20 to-purple-600/20" : "from-blue-100 to-purple-100"} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl pointer-events-none`}></span>
                  <span className="relative z-10">{language === 'en' ? 'English CV' : 'CV Anglais'}</span>
                  <Download size={16} className={`relative z-10 transition-all duration-300 ${isDark ? "text-blue-400 group-hover:text-blue-300" : "text-blue-600 group-hover:text-blue-500"} group-hover:translate-y-0.5 group-hover:scale-110`} />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  href="/cv/Justin D'COSTA FR CV.pdf" 
                  target="_blank" 
                  rel="noreferrer" 
                  className={`group relative flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-bold transition-all text-sm overflow-hidden shadow-lg ${isDark ? "bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 text-purple-100 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]" : "bg-gradient-to-r from-white to-slate-50 border border-slate-200 text-purple-900 hover:border-purple-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]"}`}
                >
                  <span className={`absolute inset-0 w-full h-full bg-gradient-to-r ${isDark ? "from-purple-600/20 to-pink-600/20" : "from-purple-100 to-pink-100"} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl pointer-events-none`}></span>
                  <span className="relative z-10">{language === 'en' ? 'French CV' : 'CV Français'}</span>
                  <Download size={16} className={`relative z-10 transition-all duration-300 ${isDark ? "text-purple-400 group-hover:text-purple-300" : "text-purple-600 group-hover:text-purple-500"} group-hover:translate-y-0.5 group-hover:scale-110`} />
                </motion.a>
              </div>
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
             <h2 className="text-3xl font-bold">{language === 'en' ? 'Technical Arsenal' : 'Arsenal Technique'}</h2>
             <p className={`max-w-2xl mx-auto ${isDark ? "text-slate-400" : "text-slate-600"}`}>
               {language === 'en' ? 'Core technologies I work with on a daily basis.' : 'Les technologies principales avec lesquelles je travaille au quotidien.'}
             </p>
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
             <h2 className="text-3xl font-bold">{language === 'en' ? 'Featured Projects' : 'Projets Phares'}</h2>
             <p className={`max-w-2xl mx-auto ${isDark ? "text-slate-400" : "text-slate-600"}`}>
               {language === 'en' ? 'Some of my recent work that showcases my technical capabilities.' : 'Quelques-uns de mes travaux récents qui mettent en valeur mes capacités techniques.'}
             </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className={`group relative flex flex-col justify-between p-8 rounded-2xl border backdrop-blur-sm transition-all hover:-translate-y-2 ${isDark ? "bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:shadow-lg hover:shadow-blue-900/20" : "bg-white/50 border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-blue-100"}`}
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center justify-between">
                    {project.title}
                    <span className={`transition-opacity opacity-0 group-hover:opacity-100 ${isDark ? "text-slate-400" : "text-slate-500"} transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300`}>↗</span>
                  </h3>
                  <p className={`text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-8">
                  {project.tech.map(tech => (
                    <span key={tech} className={`text-xs px-2.5 py-1.5 rounded-md font-medium transition-colors ${isDark ? "bg-slate-800 text-slate-300 group-hover:bg-slate-700" : "bg-slate-100 text-slate-700 group-hover:bg-slate-200"}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Separated Journey Section */}
        <section id="journey" className="space-y-12 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-4">
             <h2 className="text-3xl font-bold">{language === 'en' ? 'My Journey' : 'Mon Parcours'}</h2>
             <p className={`max-w-2xl mx-auto ${isDark ? "text-slate-400" : "text-slate-600"}`}>
               {language === 'en' ? 'Professional experience and educational background.' : 'Expérience professionnelle et parcours éducatif.'}
             </p>
          </div>
          
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveJourneyTab("work")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${activeJourneyTab === "work" ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25" : isDark ? "bg-slate-900 text-slate-400 hover:bg-slate-800" : "bg-white text-slate-600 hover:bg-slate-100"}`}
            >
              <Briefcase size={18} /> {language === 'en' ? 'Experience' : 'Expérience'}
            </button>
            <button
              onClick={() => setActiveJourneyTab("education")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${activeJourneyTab === "education" ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25" : isDark ? "bg-slate-900 text-slate-400 hover:bg-slate-800" : "bg-white text-slate-600 hover:bg-slate-100"}`}
            >
              <GraduationCap size={18} /> {language === 'en' ? 'Education' : 'Formation'}
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
             <h2 className="text-3xl font-bold">{language === 'en' ? 'Get In Touch' : 'Contactez-moi'}</h2>
             <p className={`max-w-xl mx-auto text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>
               {language === 'en' ? "Have a project in mind or just want to say hi? Send me a message and I'll get back to you as soon as possible." : "Vous avez un projet en tête ou vous voulez juste dire bonjour ? Envoyez-moi un message et je vous répondrai dès que possible."}
             </p>
          </div>
          <form 
            action="mailto:contact@justindcosta.dev" 
            method="post" 
            encType="text/plain" 
            className={`p-6 md:p-8 rounded-2xl border backdrop-blur-sm shadow-sm ${isDark ? "bg-slate-900/50 border-slate-800/80" : "bg-white/60 border-slate-200"} flex flex-col gap-5`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className={`text-sm font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  {language === 'en' ? 'Name' : 'Nom'}
                </label>
                <input type="text" name="Name" required className={`px-4 py-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${isDark ? "bg-slate-800/50 border-slate-700 text-white placeholder-slate-500" : "bg-white border-slate-300 text-slate-900 placeholder-slate-400"}`} placeholder={language === 'en' ? 'Name' : 'Nom'} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={`text-sm font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  {language === 'en' ? 'Email' : 'E-mail'}
                </label>
                <input type="email" name="Email" required className={`px-4 py-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${isDark ? "bg-slate-800/50 border-slate-700 text-white placeholder-slate-500" : "bg-white border-slate-300 text-slate-900 placeholder-slate-400"}`} placeholder={language === 'en' ? 'Email' : 'E-mail'} />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className={`text-sm font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                {language === 'en' ? 'Message' : 'Message'}
              </label>
              <textarea name="Message" rows={4} required className={`px-4 py-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none ${isDark ? "bg-slate-800/50 border-slate-700 text-white placeholder-slate-500" : "bg-white border-slate-300 text-slate-900 placeholder-slate-400"}`} placeholder={language === 'en' ? 'How can I help you?' : 'Comment puis-je vous aider ?'}></textarea>
            </div>
            <button type="submit" className={`w-full py-3 mt-2 rounded-lg font-medium transition-colors border ${isDark ? "bg-slate-100 text-slate-900 hover:bg-slate-200 border-transparent" : "bg-slate-900 text-white hover:bg-slate-800 border-transparent"}`}>
              {language === 'en' ? 'Send Message' : 'Envoyer le message'}
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
              {language === 'en' ? 'Crafting the web one pixel at a time. Fueled by espresso and an irrational love for problem-solving.' : 'Construire le web, un pixel à la fois. Propulsé par un expresso et un amour irrationnel pour les défis.'}
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