"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Tab = {
    title: string;
    value: string;
    content?: string | React.ReactNode | any;
};

export const Tabs = ({
    tabs: propTabs,
    containerClassName,
    activeTabClassName,
    tabClassName,
    contentClassName,
    toggleMobileMenu,
}: {
    tabs: Tab[];
    containerClassName?: string;
    activeTabClassName?: string;
    tabClassName?: string;
    contentClassName?: string;
    toggleMobileMenu: (tab: any) => void;
}) => {
    const [active, setActive] = useState<Tab>(propTabs[0])

    const moveSelectedTabToTop = (idx: number) => {
        setActive(propTabs[idx]);
        toggleMobileMenu(propTabs[idx].value)
    };

    return (
        <>
            <div
                className={cn(
                    "flex flex-row items-center gap-1 justify-start [perspective:1000px] relative overflow-x-auto sm:overflow-visible no-visible-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] max-w-full w-full pb-2",
                    containerClassName
                )}
            >
                {propTabs.map((tab, idx) => (
                    <button
                        key={tab.title}
                        onClick={() => {
                            moveSelectedTabToTop(idx);
                        }}
                        className={cn("relative px-2 py-2.5 rounded-full whitespace-nowrap flex-shrink-0 transition-colors", tabClassName)}
                        style={{
                            transformStyle: "preserve-3d",
                        }}
                    >
                        {active.value === tab.value && (
                            <motion.div
                                layoutId="clickedbutton"
                                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                                className={cn(
                                    "absolute inset-0 bg-secondary rounded-full shadow-sm",
                                    activeTabClassName
                                )}
                            />
                        )}

                        <span className={cn(
                            "relative block text-[15px] transition-colors",
                            active.value === tab.value ? "text-primary-white font-semibold" : "text-primary-black font-medium hover:text-primary-black/80"
                        )}>
                            {tab.title}
                        </span>
                    </button>
                ))}
            </div>
        </>
    );
};