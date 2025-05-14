"use client";
import { OrbitingCircles } from "@/ui/orbiting-circles";
import {
  SiExpress,
  SiGit,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export function TechStack() {
  return (
    <>
      <div className="text-center">
        <div className="space-y-1">
          <span className="font-base tracking-wide text-3xl font-[Audiowide]">
            Technologies Stack
          </span>
          <p className="text-xs text-white/50 max-w-lg mx-auto">
            Mastering modern frontend technologies like React, Next.js, and
            Tailwind CSS to create responsive, performant, and visually stunning
            web applications. Bringing designs to life with smooth animations
            and seamless user interactions.
          </p>
        </div>
      </div>

      {/* Orbiting Circles Section */}
      <div className="relative flex h-[420px] w-full flex-col items-center justify-center overflow-hidden">
        {/* Outer circle */}
        <OrbitingCircles
          iconSize={35}
          radius={150}
          duration={30}
          className="z-10"
        >
          <div className="text-white/80 cursor-pointer hover:scale-125 transition-transform duration-300">
            <SiTypescript size={35} />
          </div>
          <div className="text-white/80 cursor-pointer hover:scale-125 transition-transform duration-300">
            <SiJavascript size={35} />
          </div>
          <div className="text-white/80 cursor-pointer hover:scale-125 transition-transform duration-300">
            <SiReact size={35} />
          </div>
          <div className="text-white/80 cursor-pointer hover:scale-125 transition-transform duration-300">
            <SiNextdotjs size={35} />
          </div>
          <div className="text-white/80 cursor-pointer hover:scale-125 transition-transform duration-300">
            <SiTailwindcss size={35} />
          </div>
        </OrbitingCircles>

        {/* Middle circle */}
        <OrbitingCircles iconSize={25} radius={100} duration={25} reverse>
          <div className="text-white/60 cursor-pointer hover:scale-125 transition-transform duration-300">
            <SiNodedotjs size={27} />
          </div>
          <div className="text-white/60 cursor-pointer hover:scale-125 transition-transform duration-300">
            <SiMysql size={27} />
          </div>
          <div className="text-white/60 cursor-pointer hover:scale-125 transition-transform duration-300">
            <SiExpress size={27} />
          </div>
          <div className="text-white/60 cursor-pointer hover:scale-125 transition-transform duration-300">
            <SiPrisma size={27} />
          </div>
        </OrbitingCircles>

        {/* Inner circle */}
        <OrbitingCircles iconSize={20} radius={50} duration={20}>
          <div className="text-white/40 cursor-pointer hover:scale-125 transition-transform duration-300">
            <SiGit size={20} />
          </div>
          <div className="text-white/40 cursor-pointer hover:scale-125 transition-transform duration-300">
            <SiGit size={20} />
          </div>
          <div className="text-white/40 cursor-pointer hover:scale-125 transition-transform duration-300">
            <SiGit size={20} />
          </div>
        </OrbitingCircles>
        <div className="absolute -bottom-4 left-0 right-0 text-center text-xs text-white/40 pb-4">
          anjay mabar lek..
        </div>
      </div>

      {/* Curved Background Section - Now below the orbiting circles */}
      <div className="relative -mt-44 h-96 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]">
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#ffffff,transparent_70%)] before:opacity-20" />
        <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-zinc-900/20 dark:border-white/20 bg-white dark:bg-zinc-900" />
      </div>
    </>
  );
}
