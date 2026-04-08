"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function DownloadWidget() {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll) {
        setShowText(false); // scrolling down
      } else {
        setShowText(true); // scrolling up
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const getStoreLink = () => {
  if (typeof window === "undefined") return "/download";

  const userAgent = navigator.userAgent || navigator.vendor;

  if (/android/i.test(userAgent)) {
    return "https://play.google.com/store/apps/details?id=app.ktsfinance.com";
  }

  if (/iPad|iPhone|iPod/.test(userAgent)) {
    return "https://apps.apple.com/it/app/kts-finance/id6741469577";
  }

  // Desktop fallback
  return "https://play.google.com/store/apps/details?id=app.ktsfinance.com";
};
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      className="hidden md:flex fixed bottom-19 right-6 z-50"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-black rounded-2xl p-4 shadow-[0_20px_60px_rgba(37,99,235,0.35)] flex flex-col items-center w-[150px]"
      >
        {/* QR container (white for contrast) */}
        <div onClick={() => window.open(getStoreLink(), "_blank")}
            className="bg-white p-2 rounded-xl cursor-pointer hover:scale-105 transition">
          <img
            src="/qr.png"
            alt="QR"
            className="w-24 h-24 rounded-md"
          />
        </div>

        {/* TEXT */}
        <motion.div
          animate={{
            opacity: showText ? 1 : 0,
            height: showText ? "auto" : 0,
          }}
          className="overflow-hidden"
        >
          <h3 className="text-white font-bold text-sm mt-3 text-center leading-tight">
            scarica l'app
          </h3>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
