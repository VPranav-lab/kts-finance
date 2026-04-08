"use client";

import React, { useRef, useState, useEffect, memo } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue, animate, useMotionValue } from 'framer-motion';
import { Shield, Heart, Briefcase, ShieldCheck, ArrowRight, Search, Expand } from 'lucide-react';
import { SERVICES } from '@/lib/heroUtils';

const HeroMobile = () => {
  const [active, setActive] = useState(0);

  const cards = [
    {
      title: "Protezione Totale",
      subtitle: "Polizza Master",
      value: 120,
      trend: 12,
      status: "Attiva",
      icon: ShieldCheck,
      color: "bg-white text-slate-900 border",
    },
    {
      title: "Enterprise Shield",
      subtitle: "Business",
      value: 2400,
      trend: 4,
      status: "Attiva",
      icon: Briefcase,
      color: "bg-slate-900 text-white",
    },
    {
      title: "Vita Illimitata",
      subtitle: "Personale",
      value: 850,
      trend: 8,
      status: "Attiva",
      icon: Heart,
      color: "bg-blue-600 text-white",
    },
  ];

  // 🔥 Motion values
  const valueMotion = useMotionValue(0);
  const trendMotion = useMotionValue(0);

  const roundedValue = useTransform(valueMotion, (v) => Math.floor(v));
  const roundedTrend = useTransform(trendMotion, (v) => Math.floor(v));

  // 🔥 Premium animation cycle
  useEffect(() => {
    const current = cards[active];

    // reset before animation
    valueMotion.set(0);
    trendMotion.set(0);

    // VALUE animation
    const valueControls = animate(valueMotion, current.value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
    });

    // TREND animation (slightly slower)
    const trendControls = animate(trendMotion, current.trend, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
    });

    // switch card after hold
    const switchTimeout = setTimeout(() => {
      setActive((prev) => (prev + 1) % cards.length);
    }, 3400);

    return () => {
      valueControls.stop();
      trendControls.stop();
      clearTimeout(switchTimeout);
    };
  }, [active]);

  return (
    <div className="relative z-0 h-[88vh] flex flex-col justify-between px-5 pt-20 pb-12 bg-white ">

      {/* TEXT */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-4">
          Protezione di nuova generazione
        </div>

        <h1 className="text-[clamp(2.4rem,8vw,3.6rem)] font-black leading-[0.95] text-slate-900">
          Assicurazione
          <br />
          <span className="text-blue-600 italic">Ridefinita.</span>
        </h1>

        <p className="text-sm text-slate-500 mt-3 max-w-xs mx-auto">
          Oltre 50 polizze, gestione digitale e zero burocrazia.
        </p>
      </div>

      {/* STACKED CARDS */}
      <div className="relative h-[300px] flex items-center justify-center">
        {cards.map((card, i) => {
          const position = (i - active + cards.length) % cards.length;
          if (position > 2) return null;

          const Icon = card.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{
                scale: position === 0 ? 1 : 0.86,
                y: position * 18,
                opacity: position === 0 ? 1 : 0.4,
                zIndex: 10 - position,
                filter: position === 0 ? "none" : "blur(1px)",
              }}
              transition={{
                type: "spring",
                stiffness: 140,
                damping: 20,
              }}
              style={{
                boxShadow:
                  position === 0
                    ? "0 45px 120px rgba(37,99,235,0.35)"
                    : "0 12px 30px rgba(0,0,0,0.15)",
              }}
              className={`
                absolute w-[300px] h-[260px] rounded-3xl p-5
                flex flex-col justify-between
                ${card.color}
                backdrop-blur-xl
              `}
            >
              {/* TOP */}
              <div className="flex justify-between items-center">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Icon size={18} />
                </div>

                <div className="text-[10px] px-2 py-1 rounded-full bg-green-100 text-green-600 font-semibold">
                  {card.status}
                </div>
              </div>

              {/* DATA */}
              <div>
                <div className="text-[10px] uppercase opacity-60">
                  {card.subtitle}
                </div>

                {position === 0 ? (
                  <div className="mt-2">

                    {/* VALUE → from LEFT */}
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4 }}
                      className="text-xl font-bold"
                    >
                      €
                      <motion.span>{roundedValue}</motion.span>K
                    </motion.div>

                    {/* TREND → from RIGHT */}
                    <motion.div
                      key={`trend-${active}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.15 }}
                      className="text-xs text-green-500 font-semibold"
                    >
                      +<motion.span>{roundedTrend}</motion.span>%
                    </motion.div>

                  </div>
                ) : (
                  <div className="mt-2 opacity-40">
                    <div className="text-xl font-bold">
                      €{card.value}K
                    </div>
                    <div className="text-xs">
                      +{card.trend}%
                    </div>
                  </div>
                )}
              </div>

              {/* TITLE */}
              <div className="text-lg font-bold">
                {card.title}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* SEARCH BAR */}
      <motion.div
        className="w-full max-w-[420px] mx-auto mt-6 px-2"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="relative group">
          <div className="absolute inset-0 bg-blue-600/5 blur-2xl rounded-full group-hover:bg-blue-600/8 transition-all" />

          <div className="relative flex items-center bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl p-1.5 shadow-md">
            <div className="pl-3 text-slate-400">
              <Search size={16} />
            </div>

            <input
              type="text"
              placeholder="Cerca tra 50+ polizze..."
              className="flex-1 bg-transparent border-none outline-none text-slate-900 placeholder:text-slate-400 px-3 py-2 text-xs font-medium"
            />

            <button className="bg-slate-900 text-white px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors duration-200">
              Cerca
            </button>
          </div>
        </div>
      </motion.div>

      {/* INDICATOR */}
      <div className="flex justify-center gap-2 mt-2">
        {cards.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active
                ? "w-6 bg-blue-600"
                : "w-2 bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};