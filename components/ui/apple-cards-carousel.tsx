"use client";

import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export const Carousel = ({ items }: { items: React.ReactNode[] }) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
      <div
        className="flex w-full overflow-x-scroll py-10 md:py-20 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        <div className="flex flex-row justify-start gap-4 pl-4 max-w-7xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeOut",
                },
              }}
              key={"card" + index}
              className="last:pr-[5%] md:last:pr-[33%] rounded-3xl"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-end gap-2 mr-10">
        <button
          className="relative z-40 h-10 w-10 rounded-full bg-white dark:bg-white flex items-center justify-center disabled:opacity-50 transition-opacity"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <IconArrowNarrowLeft className="h-6 w-6 text-black" />
        </button>
        <button
          className="relative z-40 h-10 w-10 rounded-full bg-white dark:bg-white flex items-center justify-center disabled:opacity-50 transition-opacity"
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <IconArrowNarrowRight className="h-6 w-6 text-black" />
        </button>
      </div>
    </div>
  );
};

export const Card = ({
  card,
  index,
}: {
  card: {
    category: string;
    title: string;
    src: string;
    content: React.ReactNode;
    link?: string;
  };
  index: number;
}) => {
  return (
    <a
      href={card.link}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-between relative group hover:scale-105 transition-transform duration-300"
    >
      <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 z-30 pointer-events-none" />
      <div className="relative z-40 p-8 flex flex-col h-full">
        <div className="w-full">
          <p className="text-white/70 text-sm md:text-base font-medium font-sans text-left">
            {card.category}
          </p>
          <p className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2">
            {card.title}
          </p>
          <p className="text-white/90 text-lg font-semibold mt-2 text-left w-full">
            {(card.content as any).props.experience.company}
          </p>
          <p className="text-white/80 text-sm mt-2 line-clamp-3 text-left w-full">
            {(card.content as any).props.experience.description}
          </p>
        </div>

        <div className="mt-auto w-full">
          <div className="text-sm text-white hover:text-blue-400 transition-colors text-left">
            Learn More →
          </div>
        </div>
      </div>
      {card.src && (
        <Image
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute z-10 inset-0 transition-transform duration-300 group-hover:scale-110 brightness-[0.6]"
        />
      )}
    </a>
  );
};
