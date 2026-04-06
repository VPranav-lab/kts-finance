"use client";

import React, { memo, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Service planets ────────────────────────────────────────────────────────
const SERVICES = [
    { label: "Auto", icon: "🚗", href: "/assicurazione-auto", orbit: 148, startAngle: 0, speed: 24, size: 56, accent: "#2563EB" },
    { label: "Moto", icon: "🏍️", href: "/assicurazione-moto", orbit: 204, startAngle: 55, speed: 32, size: 52, accent: "#7C3AED" },
    { label: "Casa", icon: "🏠", href: "/assicurazione-casa", orbit: 258, startAngle: 135, speed: 40, size: 56, accent: "#059669" },
    { label: "Vita", icon: "❤️", href: "/assicurazione-vita", orbit: 310, startAngle: 205, speed: 48, size: 52, accent: "#DB2777" },
    { label: "Salute", icon: "🏥", href: "/assicurazione-sanitaria", orbit: 358, startAngle: 285, speed: 56, size: 50, accent: "#0891B2" },
    { label: "Business", icon: "🏢", href: "/assicurazione-negozio", orbit: 404, startAngle: 40, speed: 65, size: 54, accent: "#D97706" },
    { label: "Investimenti", icon: "📈", href: "/piano-di-risparmio", orbit: 448, startAngle: 160, speed: 73, size: 50, accent: "#16A34A" },
    { label: "Cyber", icon: "🔒", href: "/assicurazione-cyber-risk", orbit: 490, startAngle: 315, speed: 80, size: 48, accent: "#4F46E5" },
];

// Floating social-proof badges
const BADGES = [
    { text: "⭐ 4.9 su Google", sub: "500+ recensioni", top: "12%", left: "4%", delay: 0 },
    { text: "🏆 Broker certificato", sub: "Iscritto RUI IVASS", top: "22%", right: "5%", delay: 0.4 },
    { text: "⚡ Preventivo in 2 min", sub: "100% digitale", top: "68%", left: "3%", delay: 0.8 },
    { text: "🔐 Dati protetti", sub: "Crittografia SSL", top: "75%", right: "4%", delay: 1.2 },
];

function orbitPos(radius: number, angleDeg: number) {
    const r = (angleDeg * Math.PI) / 180;
    return { x: Math.cos(r) * radius, y: Math.sin(r) * radius };
}

function HeroSection2() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const sunRef = useRef<HTMLDivElement>(null);
    const planetRefs = useRef<(HTMLElement | null)[]>([]);
    const ringRefs = useRef<(HTMLDivElement | null)[]>([]);
    const labelRefs = useRef<(HTMLDivElement | null)[]>([]);
    const badgeRefs = useRef<(HTMLDivElement | null)[]>([]);
    const headlineRef = useRef<HTMLDivElement>(null);
    const taglineRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const pillsRef = useRef<HTMLDivElement>(null);
    const idleTimers = useRef<gsap.core.Tween[]>([]);
    // Per-planet orbit scale: 1 = full orbit, 0 = merged into sun.
    // The scroll timeline tweens these via proxies; idle timers read them
    // every frame so reversing the scroll naturally resumes the orbit.
    const orbitScales = useRef<number[]>(SERVICES.map(() => 1));

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            // ── Entrance stagger ─────────────────────────────────────────────
            // immediateRender:false stops gsap.from instantly overriding opacity
            // at mount, which would pollute the scroll timeline's recorded from-state.
            gsap.from(headlineRef.current, { opacity: 0, y: 36, duration: 1.0, ease: "power3.out", delay: 0.15, immediateRender: false });
            gsap.from(taglineRef.current, { opacity: 0, y: 24, duration: 0.9, ease: "power3.out", delay: 0.45, immediateRender: false });
            gsap.from(ctaRef.current, { opacity: 0, y: 18, duration: 0.8, ease: "power3.out", delay: 0.7, immediateRender: false });
            gsap.from(pillsRef.current, { opacity: 0, y: 12, duration: 0.8, ease: "power3.out", delay: 0.9, immediateRender: false });

            // ── Badges float in with bounce ─────────────────────────────────────
            badgeRefs.current.forEach((badge, i) => {
                if (!badge) return;
                gsap.from(badge, {
                    opacity: 0, scale: 0.7, y: 16,
                    duration: 0.65, ease: "back.out(1.8)",
                    delay: 1.1 + i * 0.18,
                });
                // idle float
                gsap.to(badge, {
                    y: i % 2 === 0 ? -8 : 8,
                    duration: 2.8 + i * 0.35,
                    repeat: -1, yoyo: true, ease: "sine.inOut",
                    delay: i * 0.5,
                });
            });

            // ── Sun pulse ───────────────────────────────────────────────────────
            gsap.to(sunRef.current, {
                scale: 1.055,
                boxShadow: "0 0 0 16px rgba(37,99,235,0.08), 0 0 0 32px rgba(37,99,235,0.04)",
                duration: 2.6, repeat: -1, yoyo: true, ease: "sine.inOut",
            });

            // ── Idle orbit — runs forever, reads orbitScales every frame ────────
            // We never pause these. Instead the scroll timeline tweens
            // orbitScales[i] from 1 → 0. The idle tween picks up that value
            // and shrinks the orbit radius accordingly. On reverse scrub the
            // scale climbs back to 1 and orbiting resumes automatically.
            SERVICES.forEach((svc, i) => {
                const planet = planetRefs.current[i];
                const label = labelRefs.current[i];
                if (!planet) return;

                const proxy = { angle: svc.startAngle };
                idleTimers.current[i] = gsap.to(proxy, {
                    angle: svc.startAngle + 360,
                    duration: svc.speed,
                    repeat: -1,
                    ease: "none",
                    onUpdate() {
                        const s = orbitScales.current[i];          // 0 → 1
                        const r = svc.orbit * s;                   // shrinks toward 0
                        const { x, y } = orbitPos(r, proxy.angle);
                        const opacity = Math.min(1, s * 3);      // fades below s=0.33
                        const pScale = 0.15 + s * 0.85;         // shrinks to 15%
                        gsap.set(planet, { x, y, opacity, scale: pScale });
                        if (label) gsap.set(label, { x, y, opacity: Math.min(1, s * 4) });
                    },
                });
            });

            // ── Scroll-merged timeline ──────────────────────────────────────────
            const copyEls = [
                headlineRef.current,
                taglineRef.current,
                ctaRef.current,
                pillsRef.current,
            ];

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "+=200%",
                    scrub: 1.2,
                    pin: true,
                    anticipatePin: 1,
                    // ── Fired when the user scrolls BACK above the section ──────
                    // The scrub lag (1.2s) means the timeline may not fully reach
                    // progress=0 before the pin releases. We force-restore here so
                    // text and badges are guaranteed to be visible on scroll-back.
                    onLeaveBack() {
                        gsap.to(copyEls, {
                            opacity: 1, y: 0,
                            duration: 0.55, ease: "power2.out",
                            stagger: 0.05, overwrite: true,
                        });
                        badgeRefs.current.forEach((badge) => {
                            if (badge) gsap.to(badge, { opacity: 1, scale: 1, duration: 0.4, overwrite: true });
                        });
                        ringRefs.current.forEach((ring) => {
                            if (ring) gsap.to(ring, { opacity: 1, duration: 0.35, overwrite: true });
                        });
                        // Restore sun
                        gsap.to(sunRef.current, { scale: 1, opacity: 1, duration: 0.4, overwrite: true });
                    },
                },
            });

            // Rings & badges fade out (overwrite:auto so they win over entrance tweens)
            SERVICES.forEach((_, i) => {
                const ring = ringRefs.current[i];
                if (ring) tl.to(ring, { opacity: 0, duration: 0.35, ease: "power2.in", overwrite: "auto" }, i * 0.01);
            });
            badgeRefs.current.forEach((badge, i) => {
                if (badge) tl.to(badge, { opacity: 0, scale: 0.8, duration: 0.2, overwrite: "auto" }, i * 0.04);
            });

            // Tween orbitScales[i] via proxy — idle timer reads it every frame
            SERVICES.forEach((_svc, i) => {
                const delay = 0.28 + i * 0.065;
                const scaleProxy = { value: 1 };
                tl.to(
                    scaleProxy,
                    {
                        value: 0,
                        duration: 0.45,
                        ease: "power3.inOut",
                        onUpdate() {
                            orbitScales.current[i] = scaleProxy.value;
                        },
                    },
                    delay,
                );
            });

            // Copy fades (overwrite:auto to cleanly own opacity/y)
            // tl.to(copyEls, {
            //     opacity: 0, y: -24,
            //     duration: 0.28, stagger: 0.04,
            //     overwrite: "auto",
            // }, 0.94);

            tl.to(sunRef.current, {
                scale: 3,
                boxShadow: "0 0 0 60px rgba(37,99,235,0.12), 0 0 0 120px rgba(37,99,235,0.05)",
                duration: 0.32, ease: "expo.inOut",
            }, 0.95);

            tl.to(sunRef.current, { scale: 0, opacity: 0, duration: 0.22, ease: "power4.in" }, 1.28);
        }, section);

        return () => {
            // Kill all ScrollTrigger instances FIRST — before ctx.revert() —
            // so GSAP doesn't try to removeChild the pin-spacer after React
            // has already torn down the parent node (causes NotFoundError).
            ScrollTrigger.getAll().forEach((t) => t.kill());
            ctx.revert();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full min-h-svh flex items-center justify-center overflow-hidden"
            aria-label="KTS Finance – Protezione completa a 360°"
            style={{ background: "linear-gradient(145deg, #ffffff 0%, #f0f4ff 45%, #fdf2ff 100%)" }}
        >
            {/* ── Mesh grid overlay ───────────────────────────────────────────── */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
                style={{
                    backgroundImage:
                        "linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(90deg, #2563EB 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            {/* ── Soft blobs ──────────────────────────────────────────────────── */}
            <div
                className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full pointer-events-none opacity-[0.22] blur-[80px] z-0 animate-[hs2-blob_14s_ease-in-out_infinite_alternate]"
                style={{ background: "radial-gradient(circle, #93C5FD, transparent 70%)" }}
                aria-hidden="true"
            />
            <div
                className="absolute -bottom-24 -right-24 w-[360px] h-[360px] rounded-full pointer-events-none opacity-[0.18] blur-[70px] z-0 animate-[hs2-blob_14s_ease-in-out_infinite_alternate] [animation-delay:-7s]"
                style={{ background: "radial-gradient(circle, #C4B5FD, transparent 70%)" }}
                aria-hidden="true"
            />
            <div
                className="absolute top-1/3 -right-16 w-[280px] h-[280px] rounded-full pointer-events-none opacity-[0.14] blur-[60px] z-0 animate-[hs2-blob_10s_ease-in-out_infinite_alternate] [animation-delay:-3s]"
                style={{ background: "radial-gradient(circle, #6EE7B7, transparent 70%)" }}
                aria-hidden="true"
            />

            {/* ── Floating social-proof badges ─────────────────────────────────── */}
            {BADGES.map((badge, i) => (
                <div
                    key={i}
                    ref={(el) => { badgeRefs.current[i] = el; }}
                    className="absolute z-30 hidden md:flex flex-col gap-0.5 px-3.5 py-2.5 rounded-2xl border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.07)] backdrop-blur-sm cursor-default select-none"
                    style={{
                        background: "rgba(255,255,255,0.82)",
                        top: badge.top,
                        left: ("left" in badge) ? badge.left : undefined,
                        right: ("right" in badge) ? badge.right : undefined,
                    }}
                >
                    <span className="text-[12px] font-bold text-gray-900 leading-tight">{badge.text}</span>
                    <span className="text-[10px] font-medium text-gray-400 leading-tight">{badge.sub}</span>
                </div>
            ))}

            {/* ── Solar system scene ───────────────────────────────────────────── */}
            <div
                className="absolute inset-0 flex items-center justify-center z-[1] pointer-events-none max-md:scale-[0.54] max-[500px]:scale-[0.38]"
                aria-hidden="true"
            >
                {/* Orbit rings */}
                {SERVICES.map((svc, i) => (
                    <div
                        key={`ring-${i}`}
                        ref={(el) => { ringRefs.current[i] = el; }}
                        className="absolute rounded-full pointer-events-none"
                        style={{
                            width: svc.orbit * 2,
                            height: svc.orbit * 2,
                            border: `1.5px dashed ${svc.accent}22`,
                        }}
                    />
                ))}

                {/* Sun */}
                <div
                    ref={sunRef}
                    className="absolute w-[84px] h-[84px] rounded-full flex flex-col items-center justify-center z-10 select-none"
                    style={{
                        background: "linear-gradient(135deg, #1D4ED8 0%, #2563EB 60%, #60A5FA 100%)",
                        boxShadow: "0 0 0 8px rgba(37,99,235,0.1), 0 8px 32px rgba(37,99,235,0.4)",
                    }}
                    aria-label="KTS Finance"
                >
                    <span className="text-[17px] font-black tracking-tight text-white leading-none">KTS</span>
                    <span className="text-[6.5px] font-bold tracking-[1px] text-white/70 uppercase mt-[2px]">Finance</span>
                </div>

                {/* Planets */}
                {SERVICES.map((svc, i) => {
                    const initial = orbitPos(svc.orbit, svc.startAngle);
                    return (
                        <React.Fragment key={`planet-${i}`}>
                            <a
                                href={svc.href}
                                ref={(el) => { planetRefs.current[i] = el; }}
                                className="absolute rounded-full flex items-center justify-center pointer-events-auto z-[5] hover:scale-[1.2] hover:z-20 transition-transform duration-[180ms] ease-out"
                                style={{
                                    width: `${svc.size}px`,
                                    height: `${svc.size}px`,
                                    background: `linear-gradient(145deg, ${svc.accent}18, ${svc.accent}08)`,
                                    boxShadow: `0 0 0 1.5px ${svc.accent}30, 0 4px 18px ${svc.accent}22`,
                                    backdropFilter: "blur(6px)",
                                    x: initial.x,
                                    y: initial.y,
                                } as React.CSSProperties}
                            >
                                <span className="text-[22px] leading-none select-none drop-shadow-sm">{svc.icon}</span>
                            </a>

                            {/* Label pill */}
                            <div
                                ref={(el) => { labelRefs.current[i] = el; }}
                                className="absolute pointer-events-none z-[6] text-center"
                                style={{
                                    x: initial.x,
                                    y: initial.y,
                                    marginTop: svc.size / 2 + 8,
                                    transform: `translateX(-50%) translateY(${svc.size / 2 + 6}px)`,
                                } as React.CSSProperties}
                            >
                                <span
                                    className="text-[9px] font-semibold tracking-wide px-2 py-0.5 rounded-full border whitespace-nowrap"
                                    style={{
                                        color: svc.accent,
                                        background: `${svc.accent}12`,
                                        borderColor: `${svc.accent}25`,
                                    }}
                                >
                                    {svc.label}
                                </span>
                            </div>
                        </React.Fragment>
                    );
                })}
            </div>

            {/* ── Hero copy ────────────────────────────────────────────────────── */}
            {/* <div className="relative z-20 flex flex-col items-center text-center max-w-[600px] px-6 mt-16 max-md:mt-0 pointer-events-none">

                <div
                    ref={pillsRef}
                    className="flex items-center gap-2 mb-6"
                >
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold text-[#2563EB] bg-[#2563EB]/[0.09] border border-[#2563EB]/20 tracking-wide">
                        🚀 <span>500+ clienti protetti</span>
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold text-[#7C3AED] bg-[#7C3AED]/[0.09] border border-[#7C3AED]/20 tracking-wide">
                        ✦ Broker RUI certificato
                    </span>
                </div>

                <div
                    ref={headlineRef}
                    className="text-[clamp(2.6rem,6.5vw,5rem)] font-black leading-[1.06] tracking-[-0.04em] text-gray-950 mb-5"
                >
                    La tua{" "}
                    <span
                        className="relative inline-block"
                        style={{
                            background: "linear-gradient(90deg, #2563EB 0%, #7C3AED 50%, #DB2777 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        protezione
                    </span>
                    ,<br />in orbita.
                </div>

                <p
                    ref={taglineRef}
                    className="text-[clamp(0.95rem,2vw,1.1rem)] text-gray-500 leading-[1.75] mb-8 max-w-[440px]"
                >
                    Auto, casa, vita, business — tutti i tuoi rischi
                    coperti in un ecosistema digitale costruito su misura per te.
                </p>

                <div ref={ctaRef} className="flex gap-3 flex-wrap justify-center">
                    <a
                        href="#vantaggi"
                        className="pointer-events-auto inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-[0.9rem] font-bold text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(37,99,235,0.45)] active:scale-95"
                        style={{
                            background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                            boxShadow: "0 4px 18px rgba(37,99,235,0.38)",
                        }}
                    >
                        Scopri i servizi →
                    </a>
                    <a
                        href="/contatti"
                        className="pointer-events-auto inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-[0.9rem] font-bold text-gray-800 no-underline bg-white border border-black/10 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-95"
                    >
                        Parla con noi
                    </a>
                </div>

                <div className="flex items-center gap-3 mt-7 text-[11px] text-gray-400 font-medium flex-wrap justify-center">
                    <span>✓ Nessun costo nascosto</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span>✓ Risposta in 2 minuti</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span>✓ 100% digitale</span>
                </div>
            </div> */}

            {/* ── Scroll hint ──────────────────────────────────────────────────── */}
            <div
                className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 pointer-events-none"
                aria-hidden="true"
            >
                <span className="text-[9px] tracking-[2.5px] uppercase text-gray-400 font-semibold">Scorri</span>
                <span className="block w-[18px] h-[18px] border-r-[2px] border-b-[2px] border-gray-300 rotate-45 animate-[hs2-arrow_1.8s_ease-in-out_infinite]" />
            </div>


        </section>
    );
}

export default memo(HeroSection2);