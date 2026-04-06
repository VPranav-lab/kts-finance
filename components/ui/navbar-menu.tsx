"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { IconDeviceMobile, IconMenu2, IconX } from "@tabler/icons-react";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
} as any;

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-primary-black font-medium hover:text-secondary"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && children && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white/90 backdrop-blur-xl border border-white/30 rounded-3xl overflow-hidden shadow-2xl"
              >
                <motion.div
                  layout
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
  isMobileOpen,
  setIsMobileOpen
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
}) => {

  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-4xl border bg-primary-white border-white/20 bg-white/60 backdrop-blur-lg shadow-lg flex items-center justify-between border-none px-6 py-3 w-full max-w-5xl mx-auto"
    >
      <Link href="/">
        <Image src="https://www.ktsfinance.com/wp-content/uploads/2023/09/favicon.png" alt="Logo" width={50} height={50} loading="eager" />
      </Link>

      {isMobileOpen && <h3 className="text-primary-black font-semibold hover:text-secondary md:hidden">Assicurazioni</h3>}

      {/* Desktop Menu Items */}
      <div className="hidden md:flex items-center gap-8">
        {children}
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <button className="px-4 py-3 rounded-full text-primary-black font-semibold transition-colors flex items-center gap-2 cursor-pointer">
          LOGIN
        </button>
        <button className="px-4 py-3 rounded-full border border-primary-black/20 font-semibold bg-secondary text-primary-white backdrop-blur-md transition-colors flex items-center gap-2 cursor-pointer">
          <IconDeviceMobile size={18} /> SCARICA L'APP
        </button>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="text-primary-black p-2">
          {isMobileOpen ? <IconX size={28} /> : <IconMenu2 size={28} />}
        </button>
      </div>
    </nav>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-primary-black/80 hover:text-secondary "
    >
      {children}
    </Link>
  );
};


