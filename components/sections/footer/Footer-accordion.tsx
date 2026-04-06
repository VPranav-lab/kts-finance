"use client"
import React, { memo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconChevronDown } from '@tabler/icons-react'

function FooterAccordion({ section, idx }: {
    section: {
        key: string;
        options: {
            title: string;
            href: string;
        }[];
    }, idx: number
}) {
    const [toggle, settoggle] = useState(false)
    return (
        <div>
            <button
                onClick={() => settoggle(!toggle)}
                className="w-full flex justify-between items-center py-5 cursor-pointer list-none outline-none"
            >
                <span className="text-[15px] font-bold text-white/90">{section.key}</span>
                <motion.div
                    animate={{ rotate: toggle ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <IconChevronDown size={20} className="text-white/50" />
                </motion.div>
            </button>
            <AnimatePresence>
                {toggle && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="flex flex-col gap-4 pb-6 pt-2">
                            {section.options.map((link, j) => (
                                <a key={j} href={link.href} className="text-white/60 hover:text-white transition-colors text-sm font-semibold">{link.title}</a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default memo(FooterAccordion)