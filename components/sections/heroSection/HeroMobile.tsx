"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Briefcase, Heart } from "lucide-react";

const cards = [
  {
    id: 1,
    title: "Protezione Totale",
    subtitle: "Polizza Master",
    icon: ShieldCheck,
    color: "bg-white text-slate-900 border",
  },
  {
    id: 2,
    title: "Enterprise Shield",
    subtitle: "Business",
    icon: Briefcase,
    color: "bg-slate-900 text-white",
  },
  {
    id: 3,
    title: "Vita Illimitata",
    subtitle: "Personale",
    icon: Heart,
    color: "bg-blue-600 text-white",
  },
];

export default function HeroMobile() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto loop
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % cards.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [paused]);

  // Pause when user interacts
  const handleManualSelect = (index: number) => {
    setActive(index);
    setPaused(true);

    setTimeout(() => setPaused(false), 6000);
  };

  return (
    <section className="h-[85vh] flex flex-col justify-between px-5 pt-6 pb-10 bg-white">
      
      {/* ─── TOP TEXT ───────────────── */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-4">
          Protezione di nuova generazione
        </div>

        <h1 className="text-[clamp(2.2rem,8vw,3.5rem)] font-black leading-[0.95] tracking-tight text-slate-900">
          Assicurazione
          <br />
          <span className="text-blue-600 italic">Ridefinita.</span>
        </h1>

        <p className="text-sm text-slate-500 mt-3 max-w-xs mx-auto leading-relaxed">
          Oltre 50 polizze, gestione digitale e zero burocrazia.
        </p>
      </div>

      {/* ─── STACKED CARDS ───────────────── */}
      <div className="relative h-[260px] flex items-center justify-center">
        {cards.map((card, i) => {
          const position = (i - active + cards.length) % cards.length;

          if (position > 2) return null;

          const Icon = card.icon;

          return (
            <motion.div
              key={card.id}
              onClick={() => handleManualSelect(i)}
              animate={{
                scale: position === 0 ? 1 : 0.92,
                y: position * 14,
                opacity: position === 0 ? 1 : 0.6,
                zIndex: 10 - position,
              }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`absolute w-64 h-52 rounded-3xl p-5 shadow-xl flex flex-col justify-between cursor-pointer ${card.color}`}
            >
              <div className="flex justify-between">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Icon size={18} />
                </div>
              </div>

              <div>
                <div className="text-[10px] uppercase tracking-widest opacity-60">
                  {card.subtitle}
                </div>
                <div className="text-lg font-bold leading-tight">
                  {card.title}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ─── INDICATOR ───────────────── */}
      <div className="flex justify-center gap-2">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => handleManualSelect(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? "w-5 bg-blue-600" : "w-2 bg-slate-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}