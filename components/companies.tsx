"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";

type Logo = {
  title: string;
  src: string;
};

export const Companies = () => {
  let [logos, setLogos] = useState<Logo[][]>([
    [
      {
        title: "eliza",
        src: "/logos/eliza.png",
      },
      {
        title: "nextjs",
        src: "/logos/nextjs.png",
      },
      {
        title: "aws",
        src: "/logos/aws.png",
      },
      {
        title: "openai",
        src: "/logos/openai.png",
      },
      {
        title: "solana",
        src: "/logos/solana.png",
      },
    ],
    [
      {
        title: "eliza second",
        src: "/logos/eliza.png",
      },
      {
        title: "nextjs second",
        src: "/logos/nextjs.png",
      },
      {
        title: "aws second",
        src: "/logos/aws.png",
      },
      {
        title: "openai second",
        src: "/logos/openai.png",
      },
      {
        title: "solana second",
        src: "/logos/solana.png",
      },
    ],
  ]);
  const [activeLogoSet, setActiveLogoSet] = useState(logos[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const flipLogos = () => {
    setLogos((currentLogos) => {
      const newLogos = [...currentLogos.slice(1), currentLogos[0]];
      setActiveLogoSet(newLogos[0]);
      setIsAnimating(true);
      return newLogos;
    });
  };

  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(() => {
        flipLogos();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div className="relative z-20 py-10 md:py-40">
      <Heading as="h2">Accelerating results with the latest tech</Heading>
      <Subheading className="text-center">
        My software has been having an impact on clients for over twenty years
        and it just keeps getting better.
      </Subheading>

      <div className="flex gap-8 flex-wrap justify-center md:gap-20 relative h-full w-full mt-20">
        <AnimatePresence
          mode="popLayout"
          onExitComplete={() => {
            setIsAnimating(false);
          }}
        >
          {activeLogoSet.map((logo, idx) => (
            <motion.div
              initial={{
                y: 40,
                opacity: 0,
                filter: "blur(10px)",
              }}
              animate={{
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              }}
              exit={{
                y: -40,
                opacity: 0,
                filter: "blur(10px)",
              }}
              transition={{
                duration: 0.8,
                delay: 0.1 * idx,
                ease: [0.4, 0, 0.2, 1],
              }}
              key={logo.title}
              className="relative"
            >
              <Image
                src={logo.src}
                alt={logo.title}
                width="100"
                height="100"
                className="md:h-16 md:w-32 h-10 w-20 object-contain filter"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
