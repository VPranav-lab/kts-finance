"use client";

import { motion } from "framer-motion";

export default function MobileDownloadCTA() {
    const getStoreLink = () => {
  if (typeof window === "undefined") return "/download";

  const userAgent = navigator.userAgent || navigator.vendor;

  if (/android/i.test(userAgent)) {
    return "https://play.google.com/store/apps/details?id=app.ktsfinance.com";
  }

  if (/iPad|iPhone|iPod/.test(userAgent)) {
    return "https://apps.apple.com/it/app/kts-finance/id6741469577";
  }

  // fallback
  return "https://play.google.com/store/apps/details?id=app.ktsfinance.com";
};
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-49"
    >
      <button onClick={() => window.open(getStoreLink(), "_blank")} className="bg-black text-white px-6 py-3 rounded-full shadow-xl font-semibold text-sm flex items-center gap-2 active:scale-95 transition">
        
        scarica l'app
        
      </button>
    </motion.div>
  );
}