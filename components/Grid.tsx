"use client"; // Essential for client-side components

import { gridItems } from "@/data";
import dynamic from "next/dynamic";
import { BentoGridItem } from "./ui/BentoGrid";

// Dynamically import BentoGrid to avoid SSR issues
const BentoGrid = dynamic(
  () =>
    import("./ui/BentoGrid").then((mod) => ({
      default: mod.BentoGrid,
      BentoGridItem: mod.BentoGridItem,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full py-20 grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-64 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse"
          />
        ))}
      </div>
    ),
  }
);

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
