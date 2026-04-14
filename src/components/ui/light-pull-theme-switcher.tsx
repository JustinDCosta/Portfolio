"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export function LightPullThemeSwitcher() {
    const { theme, setTheme, systemTheme } = useTheme();

    const toggleDarkMode = () => {
        const currentTheme = theme === "system" ? systemTheme : theme;
        if (currentTheme === "dark") {
          setTheme("light");
        } else {
          setTheme("dark");
        }
    };

    return (
      <div className="relative py-0 px-6 h-32 overflow-visible w-16 flex items-start justify-center">
        <motion.div
          drag="y"
          dragDirectionLock
          onDragEnd={(event, info) => {
            if (info.offset.y > 0) {
              toggleDarkMode();
            }
          }}
          dragConstraints={{ top: 0, right: 0, bottom: 30, left: 0 }}
          dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
          dragElastic={0.5}
          whileDrag={{ cursor: "grabbing" }}
          className="relative mt-8 w-6 h-6 rounded-full z-10 cursor-grab
               bg-[radial-gradient(circle_at_center,_#facc15,_#fcd34d,_#fef9c3)] 
               dark:bg-[radial-gradient(circle_at_center,_#4b5563,_#1f2937,_#000)] 
               shadow-[0_0_15px_6px_rgba(250,204,21,0.5)] 
               dark:shadow-[0_0_15px_4px_rgba(31,41,55,0.7)]"
        >
          {/* Thread holding it up - moves WITH the bulb because it's inside the motion div */}
          <div className="absolute bottom-[100%] left-1/2 -translate-x-1/2 w-[2px] h-[9999px] bg-neutral-300 dark:bg-neutral-600 pointer-events-none"></div>
        </motion.div>
      </div>
    );
}