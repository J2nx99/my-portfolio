"use client";

import { FaLocationArrow } from "react-icons/fa6";
import dynamic from "next/dynamic";
import MagicButton from "./MagicButton";

// Fixed Spotlight import (named export)
const Spotlight = dynamic(
  () => import("./ui/Spotlight").then((mod) => mod.Spotlight),
  { ssr: false, loading: () => null }
);

// Fixed TextGenerateEffect import (named export)
const TextGenerateEffect = dynamic(
  () => import("./ui/TextGenerateEffect").then((mod) => mod.TextGenerateEffect),
  {
    ssr: false,
    loading: () => (
      <h1 className="text-center text-[40px] md:text-5xl lg:text-6xl">
        Transforming Concepts into Seamless User Experiences
      </h1>
    ),
  }
);

// Rest of your Hero component remains the same...

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
      {/* Spotlight effects - now safely imported */}
      <div className="fixed inset-0 overflow-hidden">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="#800080" // Changed from "purple" to hex code
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="#0000FF" // Changed from "blue" to hex code
        />
      </div>

      {/* Background grid */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] fixed top-0 left-0"
        aria-hidden="true"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>

          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Joshua, a Frontend Developer based in Nigeria.
          </p>

          <a href="#projects" aria-label="View projects">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
