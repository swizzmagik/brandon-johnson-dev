"use client";
import { navItems } from "@/lib/navigation";
import { motion } from "framer-motion";
import { DesktopNavbar } from "./desktop-navbar";
import { MobileNavbar } from "./mobile-navbar";

export function NavBar() {
  return (
    <div className="relative w-full my-4">
      <motion.nav
        initial={{
          y: -80,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          ease: [0.6, 0.05, 0.1, 0.9],
          duration: 0.8,
        }}
        className="max-w-7xl px-4 m-auto"
      >
        <div className="hidden lg:block w-full">
          <DesktopNavbar navItems={navItems} />
        </div>
        <div className="flex h-full w-full items-center lg:hidden">
          <MobileNavbar navItems={navItems} />
        </div>
      </motion.nav>
    </div>
  );
}
