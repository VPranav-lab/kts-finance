"use client"
import React, { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { subMenus, TabsType } from '@/lib/navbarUtils';
import { Apple, Star } from 'lucide-react';

const ServicesGrid = () => {
    const [activeCategory, setActiveCategory] = useState<TabsType>('Per Te');

    const categories = Object.keys(subMenus) as TabsType[];
    const currentOptions = subMenus[activeCategory].options;

    return (
        <section className="py-24 bg-white px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[clamp(2rem,5vw,3rem)] font-sans font-black text-slate-900 mb-2 tracking-tight leading-none">
                            Tutte le nostre <span className="text-blue-600">Polizze</span>
                        </h2>
                        <div className="flex flex-wrap gap-3 pt-4 mb-4">
                            {/* Trustpilot-style Badge */}
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 border border-white/60 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] ring-1 ring-black/5 transition-all hover:bg-white/60 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]">
                                <div className="bg-[#00b67a] p-0.5 rounded-sm">
                                    <Star className="w-4 h-4 fill-white text-white" />
                                </div>
                                <span className="font-semibold text-sm text-black">4,3/5</span>
                            </div>

                            {/* Apple Badge */}
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 border border-white/60 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] ring-1 ring-black/5 transition-all hover:bg-white/60 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]">
                                <img src="https://www.heropay.eu/icons/reviews/apple.webp" alt="Apple logo" className='w-5 h-5' />
                                <span className="font-semibold text-sm text-black">4,7/5</span>
                            </div>

                            {/* Google Badge */}
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 border border-white/60 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] ring-1 ring-black/5 transition-all hover:bg-white/60 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]">
                                <div className="flex items-center justify-center w-5 h-5">
                                    <img src="https://www.heropay.eu/icons/reviews/google.webp" alt="Google logo" className='w-5 h-5' />
                                </div>
                                <span className="font-semibold text-sm text-black">4,9/5</span>
                            </div>
                        </div>
                        <p className="text-slate-500 max-w-xl text-lg leading-relaxed">
                            Dalla protezione personale ai rischi aziendali complessi, offriamo oltre 50 prodotti assicurativi specializzati su misura per te.
                        </p>
                    </motion.div>

                    <div className="flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
                        <div className="flex md:flex-wrap gap-1">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`relative md:px-5 px-2 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${activeCategory === cat
                                        ? 'text-[#F9FAFC]'
                                        : 'text-slate-500 hover:text-slate-700'
                                        }`}
                                >
                                    {activeCategory === cat && (
                                        <motion.div
                                            layoutId="activeTabSlot"
                                            className="absolute border-black/20 bg-primary-black/80 backdrop-blur-lg inset-0 shadow-md rounded-xl"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{cat}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {currentOptions.map((service, index) => (
                            <motion.div
                                key={service.title}
                                layout
                                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                transition={{
                                    opacity: { duration: 0.3, delay: index * 0.03 },
                                    scale: { duration: 0.3, delay: index * 0.03 },
                                    y: { type: "spring", stiffness: 100, damping: 20, delay: index * 0.03 }
                                }}
                                className="group p-8 rounded-[32px] bg-slate-50 border border-slate-100 hover:bg-white hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:shadow-blue-500/5 transition-all duration-500 cursor-pointer"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 group-hover:text-blue-600 group-hover:border-blue-100 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 mb-8 shadow-sm">
                                    <service.icon size={26} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors tracking-tight">
                                    {service.title}
                                </h3>
                                <p className="text-[15px] text-slate-500 leading-relaxed font-medium">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default memo(ServicesGrid);