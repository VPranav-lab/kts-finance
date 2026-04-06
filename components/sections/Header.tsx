"use client"
import { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { AnimatePresence, motion } from "framer-motion";
import { subMenus, TabsType } from "@/lib/navbarUtils";
import TabsDemo from "../ui/tabs";


export default function Navbar() {
    const [active, setActive] = useState<string | null>(null);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [activeMobileMenu, setActiveMobileMenu] = useState<TabsType>("Per Te");

    const toggleMobileMenu = (menu: TabsType) => {
        setActiveMobileMenu(activeMobileMenu === menu ? "Per Te" : menu);
    };

    return (
        <div className="fixed top-4 inset-x-0 w-full max-w-5xl mx-auto px-4 z-10">
            <Menu setActive={setActive} isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen}>
                <MenuItem setActive={setActive} active={active} item="Per Te">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm w-[20rem] sm:w-[32rem]">
                        <div className="flex flex-col gap-2">
                            <span className="font-semibold text-primary-black">Area Vita & Salute</span>
                            <HoveredLink href="/assicurazione-vita">Assicurazione Vita & Malattia</HoveredLink>
                            <HoveredLink href="/assicurazione-sanitaria">Polizza Sanitaria & Infortuni</HoveredLink>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="font-semibold text-primary-black">Beni & Veicoli</span>
                            <HoveredLink href="/assicurazione-casa">Assicurazione Casa & Mutuo</HoveredLink>
                            <HoveredLink href="/assicurazione-auto">Assicurazione Auto & Moto</HoveredLink>
                            <HoveredLink href="/assicurazione-animali">Assicurazione Animali</HoveredLink>
                        </div>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Business">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm w-[20rem] sm:w-[32rem]">
                        <div className="flex flex-col gap-2">
                            <span className="font-semibold text-primary-black">Imprese</span>
                            <HoveredLink href="/assicurazione-negozio">Assicurazione Negozio & Ufficio</HoveredLink>
                            <HoveredLink href="/assicurazione-cyber-risk">Cyber Risk</HoveredLink>
                            <HoveredLink href="/assicurazione-catastrofale">Rischio Catastrofale & D&O</HoveredLink>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="font-semibold text-primary-black">Professionisti (RC)</span>
                            <HoveredLink href="/assicurazione-professionale-medici">Medici & Sanitari</HoveredLink>
                            <HoveredLink href="/assicurazione-professionale-commercialisti">Commercialisti & Architetti</HoveredLink>
                            <HoveredLink href="/assicurazione-professionale-it">Professionisti IT</HoveredLink>
                        </div>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Finanze">
                    <div className="flex flex-col space-y-3 text-sm flex-1 w-64">
                        <HoveredLink href="/piano-di-accumulo">Piani di Accumulo (PAC)</HoveredLink>
                        <HoveredLink href="/assicurazione-pensionistica">Previdenza Integrativa</HoveredLink>
                        <HoveredLink href="/gestione-separata">Gestione Separata</HoveredLink>
                        <HoveredLink href="/unit-linked">Polizze Unit Linked</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="KTS">
                    <div className="flex flex-col space-y-3 text-sm flex-1 w-48">
                        <HoveredLink href="/chi-siamo">Chi Siamo</HoveredLink>
                        <HoveredLink href="/blog">Academy & Guide</HoveredLink>
                        <HoveredLink href="/contatti">Contatti</HoveredLink>
                    </div>
                </MenuItem>
            </Menu>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden absolute top-[calc(100%+10px)] inset-x-4 overflow-hidden bg-white/90 rounded-4xl backdrop-blur-2xl border border-white/40 shadow-2xl py-6 px-2 flex flex-col h-[calc(100vh-100px)]"
                    >
                        <div className="flex flex-col h-full overflow-hidden">
                            <div className="flex-1 overflow-y-auto w-full pr-2 pb-4 flex flex-col gap-2 no-visible-scrollbar">
                                {/* create tabs for mobile menu */}
                                <TabsDemo toggleMobileMenu={toggleMobileMenu} />
                                {/* ACCORDION MENUS */}
                                <div className="flex flex-col w-full h-auto">
                                    {/* Accordion 1: Per Te */}
                                    <AnimatePresence >
                                        {activeMobileMenu === subMenus[activeMobileMenu]?.key && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden flex flex-col gap-2 pl-2 pt-4 pb-2"
                                            >
                                                {/* <div className="flex flex-col gap-3">
                          <span className="font-black text-xs text-primary-black/40 tracking-widest uppercase">Area Vita & Salute</span>
                          <HoveredLink href="/assicurazione-vita">Assicurazione Vita & Malattia</HoveredLink>
                          <HoveredLink href="/assicurazione-sanitaria">Polizza Sanitaria & Infortuni</HoveredLink>
                        </div> */}
                                                <div className="flex flex-col gap-3 pb-2">
                                                    {
                                                        subMenus[activeMobileMenu]?.options?.map((option) => {
                                                            return <HoveredLink key={`${option.title}`} href={option.href}>{option.title}</HoveredLink>
                                                        })
                                                    }
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                            <div className="flex gap-3 pt-4 border-t border-black/10 shrink-0">
                                <button className="w-full p-2 rounded-2xl border border-black/10 bg-white/50 text-primary-black transition-colors flex justify-center items-center ">
                                    Accedi
                                </button>
                                <button className="w-full p-2 rounded-2xl border border-black/10 bg-white/50 text-primary-black transition-colors flex justify-center items-center mx-1">
                                    Registrati
                                </button>
                                <button className="w-full p-2 rounded-2xl bg-secondary text-white transition-colors flex justify-center items-center ">Scarica App
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}