"use client"
import React, { useState,useRef } from 'react'
import { IconChevronDown, IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandX, IconWorld } from '@tabler/icons-react'
import { footerMenus, footerTypes } from '@/lib/footerUtils'
import FooterAccordion from './Footer-accordion';
import { motion, useScroll, useTransform } from "framer-motion";

function Footer() {
    const [footerSections] = useState(() => (Object.keys(footerMenus) as footerTypes[]).map((e: footerTypes) => footerMenus[e]))
     const footerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: footerRef,
        offset: ["start end", "end start"],
        });
    const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.6]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

    return (
        
        <footer ref={footerRef} className="bg-[#111111] text-white pt-16 pb-12 px-4 md:px-8 font-medium">
            
            <div className="max-w-7xl mx-auto flex flex-col">
                

                {/* Desktop Grid Links */}
                <div className="hidden md:grid grid-cols-3 gap-3 mb-20">
                    {footerSections.slice(0, 3).map((section, idx) => (
                        <div key={idx} className="flex flex-col space-y-4 text-sm">
                            <span className="font-bold text-white/90 text-base mb-2">{section.key}</span>
                            {section.options.map((link, j) => (
                                <a key={j} href={link.href} className="text-white/60 hover:text-white transition-colors">{link.title}</a>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="hidden md:grid grid-cols-3 gap-3 mb-5">
                    {footerSections.slice(3, 6).map((section, idx) => (
                        <div key={idx} className="flex flex-col space-y-4 text-sm">
                            <span className="font-bold text-white/90 text-base mb-2">{section.key}</span>
                            {section.options.map((link, j) => (
                                <a key={j} href={link.href} className="text-white/60 hover:text-white transition-colors">{link.title}</a>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Mobile Accordion Links */}
                <div className="flex md:hidden flex-col mb-12">
                    {footerSections.map((section, idx) => (
                        <FooterAccordion key={idx} section={section} idx={idx} />
                    ))}
                </div>

                {/* Sub Footer Row 1: Logo & Socials */}
                <div className="flex  md:flex-row justify-between items-center md:items-center gap-8 py-8 border-b border-white/10">
                    <img
                        src="/logo.png" // change path if needed
                        alt="KTS Finance"
                        className="h-12 md:h-16 w-auto"
                    />
                    <div className="flex gap-6 items-center ml-auto mr-15">
                        <a href="#" className="text-white/60 hover:text-white transition-colors"><IconBrandFacebook size={24} /></a>
                        <a href="#" className="text-white/60 hover:text-white transition-colors"><IconBrandInstagram size={24} /></a>
                        <a href="#" className="text-white/60 hover:text-white transition-colors"><IconBrandX size={24} /></a>
                        <a href="#" className="text-white/60 hover:text-white transition-colors"><IconBrandLinkedin size={24} /></a>
                    </div>
                </div>

                {/* Sub Footer Row 2: Regions & Links */}
                {/* <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 gap-8 text-sm text-white/60">
                    <div className="flex items-center gap-8 font-semibold">
                        <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                            <span className="text-xl">🇮🇹</span>
                            <span>Italia</span>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                            <IconWorld size={20} />
                            <span>Italiano</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 md:gap-6 font-semibold">
                        <a href="#" className="hover:text-white transition-colors">Termini d'uso del sito</a>
                        <a href="#" className="hover:text-white transition-colors">Accordi legali</a>
                        <a href="/reclami" className="hover:text-white transition-colors">Reclami</a>
                    </div>
                </div> */}

                {/* Final Address */}
                <div className="text-xs text-white/40 text-left leading-relaxed mt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-2">
                    <div className='flex-none'>
                        KTS Finance è un marchio di KTS srl – Società a Socio Unico<br />
                        Sede legale: Via Marconi, 47, 25011 Calcinato (BS) – PEC: <a href="mailto:ktssrls@pec.it">ktssrls@pec.it</a><br />
                        Sede amministrativa: Via Aldo Moro 13, Palazzo Mercurio, 25124 Brescia (BS) – Tel. +39.030.13877410.<br />
                        Codice fiscale 03981500980 – Partita iva 03981500980 – Cap. Soc. 50’000€ – Rea BS <br className="hidden md:block" />578946 – Email: <a href="mailto:servizioclienti@ktsfinance.com">servizioclienti@ktsfinance.com</a> – www.ktsfinance.com
                        {/* © {new Date().getFullYear()} KTS Finance. Tutti i diritti riservati. */}
                    </div>
                    <div>
                        Iscrizione al Registro Unico degli Intermediari Assicurativi e Riassicurativi n. B000675941 L’Istituto competente alla vigilanza sull’attività di distribuzione svolta è IVASS. Gli estremi identificativi e di iscrizione dell’intermediario possono essere verificati consultando il RUI (https://ruipubblico.ivass.it), sul sito internet dell’IVASS (www.ivass.it).
                    </div>
                </div>
                <motion.div
                    style={{ y, opacity, scale }}
                    className="md:hidden flex flex-col items-center text-center mt-12 mb-6"
                    >
                    <h1 className="text-[clamp(3rem,10vw,5rem)] font-black tracking-tight leading-[0.9] text-white">
                        KTS Finance
                    </h1>

                    <p className="mt-3 text-sm text-white/60">
                        Assicurazione. <span className="text-blue-500 italic">Ridefinita.</span>
                    </p>
                </motion.div>
                <motion.div
                    style={{ y, opacity, scale }}
                    className="hidden md:flex flex-col items-center text-center mt-12 mb-6"
                    >
                    <h1 className="text-[clamp(4rem,12vw,9rem)] font-black tracking-tight leading-none text-white/90">
                        KTS Finance
                    </h1>

                    <p className="mt-4 text-2xl text-white/60">
                        Assicurazione. <span className="text-blue-500 italic">Ridefinita.</span>
                    </p>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer