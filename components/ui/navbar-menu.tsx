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
      className="relative rounded-4xl bg-white/60 backdrop-blur-lg shadow-lg flex items-center justify-between px-4 py-2.5 w-full max-w-5xl mx-auto"
    >

      {/* LEFT: Logo + Menu */}
      <div className="flex items-center gap-15">
        <Link href="/">
          <Image
            src="https://www.ktsfinance.com/wp-content/uploads/2023/09/favicon.png"
            alt="Logo"
            width={45}
            height={45}
          />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {children}
        </div>
      </div>

      {/* RIGHT: CTA */}
      <div className="hidden md:flex items-center gap-3">
        <button className="text-sm text-black/70 hover:text-black transition">
          Accedi
        </button>

        <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
          Registrati
        </button>
      </div>

      {/* MOBILE */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="text-primary-black p-2"
        >
          {isMobileOpen ? <IconX size={26} /> : <IconMenu2 size={26} />}
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


