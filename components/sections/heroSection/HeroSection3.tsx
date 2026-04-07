"use client";

import React, { useRef, useState, useEffect, memo } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { Shield, Heart, Briefcase, ShieldCheck, ArrowRight, Search, Expand } from 'lucide-react';
import { SERVICES } from '@/lib/heroUtils';

const HeroMobile = () => {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);

    const cards = [
        {
            title: "Protezione Totale",
            subtitle: "Polizza Master",
            icon: ShieldCheck,
            color: "bg-white text-slate-900 border",
        },
        {
            title: "Enterprise Shield",
            subtitle: "Business",
            icon: Briefcase,
            color: "bg-slate-900 text-white",
        },
        {
            title: "Vita Illimitata",
            subtitle: "Personale",
            icon: Heart,
            color: "bg-blue-600 text-white",
        },
    ];

    useEffect(() => {
        if (paused) return;

        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % cards.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [paused]);

    const handleSelect = (i: number) => {
        setActive(i);
        setPaused(true);
        setTimeout(() => setPaused(false), 6000);
    };

    return (
  <div className="z-0 relative h-[88vh] flex flex-col justify-between px-5 pt-20 pb-12 bg-white">

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
    <div className="relative h-[280px] flex items-center justify-center">
      {cards.map((card, i) => {
        const position = (i - active + cards.length) % cards.length;
        if (position > 2) return null;

        const Icon = card.icon;

        return (
          <motion.div
            key={i}
            onClick={() => handleSelect(i)}
            initial={{ opacity: 0, y: 30 }}
            animate={{
              scale: position === 0 ? 1 : 0.86,
              y: position * 18,
              opacity: position === 0 ? 1 : 0.45,
              zIndex: 10 - position,
            }}
            transition={{
              type: "spring",
              stiffness: 140,
              damping: 20,
            }}
            style={{
              boxShadow:
                position === 0
                  ? "0 45px 120px rgba(0,0,0,0.35)"
                  : "0 12px 30px rgba(0,0,0,0.15)",
            }}
            className={`
              absolute w-[300px] h-[240px] rounded-3xl p-5
              flex flex-col justify-between
              ${card.color}
              backdrop-blur-xl
            `}
          >
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <Icon size={18} />
            </div>

            <div>
              <div className="text-[10px] uppercase opacity-60">
                {card.subtitle}
              </div>
              <div className="text-lg font-bold">
                {card.title}
              </div>
            </div>
          </motion.div>
          
        );
      })}
    </div>
      <motion.div
  className="w-full max-w-[420px] mx-auto mt-6 px-2"
  initial={{ y: 40, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
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
        <motion.button
          key={i}
          onClick={() => handleSelect(i)}
          whileTap={{ scale: 0.8 }}
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

// ─── ServiceIcon Component ──────────────────────────────────────────────────
interface ServiceIconProps {
    icon: React.ElementType;
    x: number;
    y: number;
    delay: number;
    scale: number;
    counterRotate: MotionValue<number>;
}

const ServiceIcon = ({ icon: Icon, x, y, delay, scale, counterRotate }: ServiceIconProps) => {
    // Continuous idle drift animation
    const idleX = useSpring(0, { stiffness: 40, damping: 20 });
    const idleY = useSpring(0, { stiffness: 40, damping: 20 });

    useEffect(() => {
        const interval = setInterval(() => {
            idleX.set((Math.random() - 0.5) * 15);
            idleY.set((Math.random() - 0.5) * 15);
        }, 2000 + Math.random() * 2000);
        return () => clearInterval(interval);
    }, [idleX, idleY]);

    return (
        <motion.div
            style={{
                x,
                y,
                scale,
                position: 'absolute',
                left: '50%',
                top: '50%',
                rotate: counterRotate,
                translateX: idleX,
                translateY: idleY,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                delay,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                scale: { type: "spring", damping: 12, stiffness: 100, delay }
            }}
            className="p-3 md:p-4 rounded-2xl bg-white/80 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 text-slate-500 -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer hover:shadow-xl hover:text-blue-600 hover:scale-110 transition-all duration-300"
        >
            <Icon size={20} />
        </motion.div>
    );
};

// ─── Hero Main Component ────────────────────────────────────────────────────
const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState<boolean | null>(null);
    
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    const { scrollYProgress } = useScroll(
    isMobile === false
        ? {
            target: containerRef,
            offset: ['start start', 'end end'],
        }
        : {}
    );

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    // ── Mouse parallax drift ────────────────────────────────────────────────
    const mouseX = useSpring(0, { stiffness: 50, damping: 25 });
    const mouseY = useSpring(0, { stiffness: 50, damping: 25 });

    useEffect(() => {
        const handleMouse = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const xOffset = (clientX / window.innerWidth - 0.5) * 40;
            const yOffset = (clientY / window.innerHeight - 0.5) * 40;
            mouseX.set(xOffset);
            mouseY.set(yOffset);
        };
        window.addEventListener('mousemove', handleMouse);
        return () => window.removeEventListener('mousemove', handleMouse);
    }, [mouseX, mouseY]);
    
    // ── Transforms (Aggressive speed for immediate feedback) ───────────────
    const titleScale = useTransform(smoothProgress, [0, 0.15], [1, 0.8]);

    const titleOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
    const titleY = useTransform(smoothProgress, [0, 0.15], [0, -60]);

    const cardOpacity = useTransform(smoothProgress, [0.02, 0.2], [0, 1]);
    const cardRotate = useTransform(smoothProgress, [0.02, 0.35], [0, -12]);
    const cardX = useTransform(smoothProgress, [0.02, 0.35], [0, isMobile ? -130 : -360]);
    const card2X = useTransform(smoothProgress, [0.02, 0.35], [0, isMobile ? 130 : 360]);
    const card2Rotate = useTransform(smoothProgress, [0.02, 0.35], [0, 12]);

    const centerScale = useTransform(smoothProgress, [0, 0.2, 0.45], [1, 1.12, 0.85]);

    const cloudOpacity = useTransform(smoothProgress, [0.05, 0.3], [0, 1]);
    const cloudScale = useTransform(smoothProgress, [0.05, 0.55], [0.85, 1.15]);
    const cloudRotate = useTransform(smoothProgress, [0.05, 0.85], [0, 25]);
    const counterRotate = useTransform(cloudRotate, (v: number) => -v);

    const mobile = isMobile === true;
    
    const iconCount = mobile ? 8 : Math.min(SERVICES.length, 14);
    const iconRadius = mobile ? 130 : 375;
    if (isMobile === null) return null;

    if (isMobile) {
    return <HeroMobile key="mobile"/>;
    }
    return (
        <div key="desktop" ref={containerRef} className={`${mobile ? "h-[110vh]" : "h-[140vh]"} relative bg-white`}>
            <div className={`sticky top-0 ${mobile ? "h-screen" : "h-full"} w-full flex items-center justify-center overflow-hidden`}>

                {/* ── Background decoration ─────────────────────────────────── */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] md:w-[760px] h-[320px] md:h-[760px] bg-blue-50/60 rounded-full blur-[90px] md:blur-[130px]" />
                    <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
                </div>

                {/* ── Service icon cloud ──────────────────────────────────────展 */}
                {isMobile !== null && (
                    <motion.div
                        style={{
                            opacity: cloudOpacity,
                            scale: cloudScale,
                            rotate: cloudRotate,
                            x: mouseX,
                            y: mouseY
                        }}
                        className="absolute inset-0 pointer-events-none"
                    >
                        {SERVICES.slice(0, iconCount).map((s, i) => {
                            const angle = (i / iconCount) * Math.PI * 2;
                            const r = iconRadius + (i % 2 === 0 ? 0 : (mobile ? 35 : 75));
                            return (
                                <ServiceIcon
                                    key={s.id}
                                    icon={s.icon}
                                    x={Math.cos(angle) * r}
                                    y={Math.sin(angle) * r}
                                    delay={i * 0.03}
                                    scale={mobile ? 0.75 + (i % 2) * 0.1 : 0.9 + (i % 2) * 0.25}
                                    counterRotate={counterRotate}
                                />
                            );
                        })}
                    </motion.div>
                )}

                {/* ── Main content layer ─────────────────────────────────────展 */}
                <div className="relative z-10 text-center px-4 md:px-6 pt-6 max-w-4xl w-full pointer-events-none">
                    <motion.div
                        style={{ scale: titleScale, opacity: titleOpacity, y: titleY }}
                        className="mb-8 md:mb-12"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6 md:mb-8 shadow-sm"
                        >
                            <Shield size={11} />
                            <span>Protezione di nuova generazione</span>
                        </motion.div>

                        <motion.h1
                            className="text-[clamp(2.8rem,9vw,7.5rem)] font-black tracking-tighter text-slate-900 leading-[0.88] mb-6 flex flex-col items-center"
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
                        >
                            <span>Assicurazione</span>
                            <span className="text-blue-600 italic -mt-2">Ridefinita.</span>
                        </motion.h1>

                        <motion.p
                            className="text-base md:text-xl text-slate-500 max-w-sm md:max-w-xl mx-auto leading-relaxed"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
                        >
                            Oltre 50 polizze specializzate, gestione digitale e zero burocrazia.
                            Siamo il futuro della protezione assicurativa in Italia.
                        </motion.p>
                    </motion.div>

                    {/* Card Stack */}
                    <div className="relative h-[280px] md:h-[400px] flex items-center justify-center pointer-events-auto">
                        <div className='flex items-center justify-between' >
                            <motion.div
                                style={{ x: cardX, rotate: cardRotate, opacity: cardOpacity }}
                                className="absolute w-44 md:w-60 h-56 md:h-76 bg-slate-900 rounded-[28px] md:rounded-[36px] p-5 md:p-7 text-white shadow-2xl flex flex-col justify-between text-left"
                            >
                                <div className='flex items-center justify-between' >
                                    <div className="w-9 h-9 md:w-11 md:h-11 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center">
                                        <Briefcase size={18} />
                                    </div>
                                    <div className="w-9 h-9 md:w-11 md:h-11 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-2xl flex items-center justify-center cursor-pointer">
                                        <Expand size={18} />
                                    </div>
                                </div>
                                <div>
                                    <div className="text-white/40 text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-1">Business</div>
                                    <div className="text-lg md:text-2xl font-bold leading-tight">Enterprise<br />Shield</div>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            style={{ x: card2X, rotate: card2Rotate, opacity: cardOpacity }}
                            className="absolute w-44 md:w-60 h-56 md:h-76 bg-blue-600 rounded-[28px] md:rounded-[36px] p-5 md:p-7 text-white shadow-2xl flex flex-col justify-between text-left"
                        >
                            <div className='flex items-center justify-between' >
                                <div className="w-9 h-9 md:w-11 md:h-11 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center">
                                    <Heart size={18} />
                                </div>
                                <div className="w-9 h-9 md:w-11 md:h-11 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-2xl flex items-center justify-center cursor-pointer">
                                    <Expand size={18} />
                                </div>
                            </div>
                            <div>
                                <div className="text-white/40 text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-1">Personale</div>
                                <div className="text-lg md:text-2xl font-bold leading-tight">Vita<br />Illimitata</div>
                            </div>
                        </motion.div>

                        <motion.div
                            style={{ scale: centerScale }}
                            className="relative w-52 md:w-68 h-68 md:h-88 bg-white rounded-[32px] md:rounded-[44px] p-7 md:p-9 shadow-[0_40px_80px_-16px_rgba(0,0,0,0.14)] border border-slate-100 flex flex-col justify-between group cursor-pointer z-10"
                        >
                            <div className="flex justify-between items-start">
                                <div className="w-11 h-11 md:w-14 md:h-14 rounded-2xl md:rounded-3xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                    <ShieldCheck size={22} />
                                </div>
                                {/* <div className="px-2 py-0.5 rounded-full bg-green-50 text-green-600 text-[8px] md:text-[10px] font-black uppercase tracking-wider">
                                    Attiva
                                </div> */}
                                <div className="w-9 h-9 md:w-11 md:h-11 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-2xl flex items-center justify-center cursor-pointer">
                                    <Expand size={18} />
                                </div>
                            </div>

                            <div className="text-left">
                                <div className="text-slate-400 text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-1">Polizza Master</div>
                                <div className="text-xl md:text-2xl font-black text-slate-900 leading-tight mb-3">Protezione<br />Totale</div>
                                <div className="flex -space-x-2">
                                    {[0, 1, 2].map((k) => (
                                        <div key={k} className="w-6 h-6 md:w-7 md:h-7 rounded-full border-2 border-white bg-slate-100" />
                                    ))}
                                    <div className="w-6 h-6 md:w-7 md:h-7 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-[7px] md:text-[9px] font-bold text-white">
                                        +50
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-7 md:bottom-9 right-7 md:right-9 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center">
                                    <ArrowRight size={15} />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Search Bar */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-[420px] px-6 pointer-events-auto"
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.7, ease: 'easeOut' }}
                >
                    <div className="relative group">
                        <div className="absolute inset-0 bg-blue-600/5 blur-2xl rounded-full group-hover:bg-blue-600/8 transition-all" />
                        <div className="relative flex items-center bg-white/85 backdrop-blur-md border border-slate-200 rounded-2xl p-1.5 shadow-lg">
                            <div className="pl-3 text-slate-400">
                                <Search size={16} />
                            </div>
                            <input
                                type="text"
                                placeholder="Cerca tra 50+ polizze..."
                                className="flex-1 bg-transparent border-none outline-none text-slate-900 placeholder:text-slate-400 px-3 py-2 text-xs md:text-sm font-medium"
                            />
                            <button className="bg-slate-900 text-white px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors duration-200">
                                Cerca
                            </button>
                        </div>
                    </div>
                </motion.div>
                {/* ── Scroll hint ──────────────────────────────────────────────────── */}
                <motion.div
                    style={{ opacity: titleOpacity }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
                >
                    <div className="w-[22px] h-[36px] rounded-full border-2 border-slate-200 flex justify-center p-1.5">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1 h-2 bg-blue-600 rounded-full"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default memo(Hero);
