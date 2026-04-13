"use client";

import { AetherFlowHero } from "@/components/ui/aether-flow-hero";
import { LimelightNav } from "@/components/ui/limelight-nav";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import Switch from "@/components/ui/sky-toggle";
import { Home, User, Briefcase, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Portfolio() {
  const navItems = [
    { id: "home", icon: <Home />, label: "Home" },
    { id: "about", icon: <User />, label: "About" },
    { id: "experience", icon: <Briefcase />, label: "Experience" },
  ];

  return (
    <main className="min-h-screen bg-black overflow-x-hidden text-foreground">
      {/* Absolute top bar with the logo and the Sky Toggle */}
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-50">
        <div className="font-bold text-xl tracking-wider text-primary">JD.</div>
        <Switch />
      </div>

      {/* Main interactive Background enveloping the Hero content */}
      <AetherFlowHero>
        {/* 3-Column Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full h-full max-w-7xl mx-auto px-6 pt-20">
          
          {/* Column 1: Interactive Robot (Spline 3D) */}
          <div className="w-full md:w-1/3 h-[300px] md:h-full relative flex items-center justify-center pointer-events-auto">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>

          {/* Column 2: Text / Details */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left space-y-6 z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md"
            >
              <span className="text-sm font-medium text-primary">
                Available for work
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
            >
              Justin<br/>D'COSTA
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4 text-muted-foreground"
            >
              <h2 className="text-2xl font-semibold text-foreground">
                Web Developer & AI Integrator
              </h2>
              <p className="max-w-md">
                Expert in crafting responsive, interactive web applications and integrating advanced AI models. Currently pursuing a Computer Science degree at Epita, Paris.
              </p>
              
              <div className="flex gap-4 pt-4 justify-center md:justify-start">
                <a href="mailto:justindcosta1202@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-primary/20 hover:bg-primary/40 text-primary rounded-lg transition-colors">
                  <Mail className="w-4 h-4" />
                  Email Me
                </a>
                <a href="tel:+33764814045" className="flex items-center gap-2 px-4 py-2 bg-secondary/50 hover:bg-secondary text-secondary-foreground rounded-lg transition-colors">
                  <Phone className="w-4 h-4" />
                  Call Me
                </a>
              </div>
            </motion.div>
          </div>

          {/* Column 3: The Image Spotlight */}
          <div className="w-full md:w-1/3 h-full flex items-center justify-center p-6 relative">
             <div className="relative w-64 h-80 md:w-80 md:h-[400px] border border-white/10 rounded-2xl overflow-hidden shadow-2xl group transition-all duration-500 hover:border-primary/50">
               <Spotlight className="from-primary/50 via-primary/20 to-transparent" size={300} />
               <img 
                 src="/justin_dcosta.png" 
                 alt="Justin D'COSTA"
                 className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
               />
               {/* Vignette overlay */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
             </div>
          </div>
        </div>
      </AetherFlowHero>

      {/* Floating Limelight Navigation Base */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <LimelightNav items={navItems} />
      </div>

    </main>
  );
}
