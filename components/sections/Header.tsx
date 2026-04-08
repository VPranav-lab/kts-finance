"use client";

import { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { AnimatePresence, motion } from "framer-motion";
import { subMenus, TabsType } from "@/lib/headerUtils";
const getStoreLink = () => {
  if (typeof window === "undefined") return "/download";

  const userAgent = navigator.userAgent || navigator.vendor;

  if (/android/i.test(userAgent)) {
    return "https://play.google.com/store/apps/details?id=app.ktsfinance.com";
  }

  if (/iPad|iPhone|iPod/.test(userAgent)) {
    return "https://apps.apple.com/it/app/kts-finance/id6741469577";
  }

  return "https://play.google.com/store/apps/details?id=app.ktsfinance.com";
};
export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabsType>("Per Te");
  const [openCategory, setOpenCategory] = useState<string | null>(null);
    useEffect(() => {
  if (isMobileOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [isMobileOpen]);
  return (
    <div className="fixed top-4 inset-x-0 w-full max-w-4xl mx-auto px-4 z-50">

      {/* ================= NAVBAR WRAPPER ================= */}
      <div className="relative flex items-center justify-between">

        {/* LEFT: MENU (logo + nav items) */}
        <Menu
          setActive={setActive}
          isMobileOpen={isMobileOpen}
          setIsMobileOpen={setIsMobileOpen}
        >
          {Object.keys(subMenus).map((menu) => (
            <MenuItem
              key={menu}
              item={menu}
              active={active}
              setActive={setActive}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-10 w-[40rem]">
                {subMenus[menu as TabsType].categories.map((category) => (
                  <div key={category.title} className="flex flex-col gap-3">
                    <span className="font-semibold text-primary-black text-sm">
                      {category.title}
                    </span>

                    <div className="flex flex-col gap-2">
                      {category.links.map((link) => (
                        <HoveredLink key={link.title} href={link.href}>
                          <div className="flex items-center gap-3 group">
                            {link.icon && (
                              <link.icon className="w-4 h-4 text-black/50 group-hover:text-black transition" />
                            )}
                            <span className="text-sm text-black/80 group-hover:text-black transition">
                              {link.title}
                            </span>
                          </div>
                        </HoveredLink>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </MenuItem>
          ))}
        </Menu>

      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-[calc(100%+10px)] inset-x-4 bg-white rounded-3xl shadow-xl p-4 flex flex-col h-[calc(100vh-100px)]"
          >

            {/* TABS */}
            <div className="flex gap-2 mb-4 overflow-x-auto no-scrollbar">
              {Object.keys(subMenus).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab as TabsType);
                    setOpenCategory(null);
                  }}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition ${
                    activeTab === tab
                      ? "bg-black text-white"
                      : "bg-black/5 text-black"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* ACCORDION */}
            <div className="flex-1 overflow-y-auto space-y-2 pr-1">
              {subMenus[activeTab].categories.map((category) => (
                <div key={category.title} className="border-b border-black/10 pb-2">
                  <button
                    onClick={() =>
                      setOpenCategory(
                        openCategory === category.title
                          ? null
                          : category.title
                      )
                    }
                    className="w-full text-left py-3 font-medium text-black"
                  >
                    {category.title}
                  </button>

                  <AnimatePresence>
                    {openCategory === category.title && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-4 flex flex-col gap-2 pb-2"
                      >
                        {category.links.map((link) => (
                          <HoveredLink key={link.title} href={link.href}>
                            <div className="flex items-center gap-3">
                              {link.icon && (
                                <link.icon className="w-4 h-4 text-black/60" />
                              )}
                              <span className="text-sm text-black/80">
                                {link.title}
                              </span>
                            </div>
                          </HoveredLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* MOBILE CTA */}
            {/* AUTH CTA (TOP) */}
            <div className="flex gap-2 mb-25">
            <button className="w-full p-2 rounded-full border text-sm">
                Accedi
            </button> 
              <br/>
            <button className="w-full p-2 rounded-full bg-black text-white text-sm">
                Registrati
            </button>
            <button
                onClick={() => window.open(getStoreLink(), "_blank")}
                className="w-full p-3 rounded-full border text-sm font-semibold active:scale-95 transition"
            >
                Scarica l'app
            </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}