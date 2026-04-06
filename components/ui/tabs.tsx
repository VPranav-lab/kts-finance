"use client";

import { Tabs } from "./tabs-container";

export default function TabsDemo({ toggleMobileMenu }: { toggleMobileMenu: (tab: any) => void }) {
    const tabs = [
        {
            title: "Per Te",
            value: "Per Te",
        },
        {
            title: "Per il Tuo Business",
            value: "Per il Tuo Business",
        },
        {
            title: "Per le Tue Finanze",
            value: "Per le Tue Finanze",
        },
    ];

    return (
        <div className="[perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
            <Tabs toggleMobileMenu={toggleMobileMenu} tabs={tabs} />
        </div>
    );
}