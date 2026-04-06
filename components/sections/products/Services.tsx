"use client"
import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';
import { Heart, Car, Home, Briefcase, ShieldCheck, ArrowRight } from 'lucide-react';

const FEATURED_SERVICES = [
    {
        id: 'life',
        title: 'Life Insurance',
        description: 'Secure your family\'s future with flexible plans that adapt to your life stages. We provide more than just a policy; we provide peace of mind.',
        icon: Heart,
        color: 'bg-rose-500',
        lightColor: 'bg-rose-50',
        textColor: 'text-rose-600',
        image: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'auto',
        title: 'Auto Protection',
        description: 'Smart coverage for every mile. From daily commutes to cross-country adventures, our AI-driven claims process gets you back on the road in record time.',
        icon: Car,
        color: 'bg-blue-600',
        lightColor: 'bg-blue-50',
        textColor: 'text-blue-600',
        image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'home',
        title: 'Home & Property',
        description: 'Your home is your sanctuary. Protect it against the unexpected with comprehensive coverage that includes smart home integration and rapid response.',
        icon: Home,
        color: 'bg-emerald-500',
        lightColor: 'bg-emerald-50',
        textColor: 'text-emerald-600',
        image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'business',
        title: 'Business Liability',
        description: 'Scale with confidence. Our professional liability and asset protection plans are designed for modern enterprises navigating a complex global market.',
        icon: Briefcase,
        color: 'bg-slate-900',
        lightColor: 'bg-slate-100',
        textColor: 'text-slate-900',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
    }
];

interface ServiceCardProps {
    service: any;
    index: number;
    setActiveIndex: (i: number) => void;
    activeIndex: number;
    isLast: boolean;
}

const ServiceCard = ({ service, index, setActiveIndex, activeIndex, isLast }: ServiceCardProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        amount: 0.4,
        margin: "-10% 0px -10% 0px"
    });

    useEffect(() => {
        if (isInView) {
            setActiveIndex(index);
        }
    }, [isInView, index, setActiveIndex]);

    return (
        <div
            ref={ref}
            className={`md:min-h-screen h-[70vh] flex flex-col justify-center pb-20 md:pb-0`}
            data-index={index}
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-20%", once: false }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="p-8 md:p-0 rounded-3xl md:rounded-none bg-white md:bg-transparent border border-slate-100 md:border-none shadow-xl md:shadow-none"
            >
                {/* Mobile Image */}
                <div className="md:hidden relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 shadow-lg">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex items-center justify-between mb-6 md:mb-8">
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl ${service.lightColor} ${service.textColor} flex items-center justify-center shadow-lg shadow-black/5`}>
                        <service.icon size={28} className="md:w-8 md:h-8" />
                    </div>
                    <span className="text-xs md:text-sm font-bold text-slate-400 tracking-widest uppercase">
                        Service 0{index + 1}
                    </span>
                </div>
                <h2 className="text-3xl md:text-7xl font-black text-slate-900 tracking-tighter mb-4 md:mb-6 leading-tight">
                    {service.title}
                </h2>
                <p className="text-base md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8 md:mb-12 font-medium">
                    {service.description}
                </p>
                <button className={`flex items-center gap-3 font-bold text-xs md:text-sm uppercase tracking-widest ${service.textColor} group hover:gap-4 transition-all duration-300`}>
                    Explore Coverage
                    <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
                </button>
            </motion.div>
        </div>
    );
};

export default function ServiceShowcase() {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

    return (
        <section ref={containerRef} className="relative bg-white">
            <div className="flex flex-col md:flex-row relative items-start">
                {/* Left Side: Scrolling Content */}
                <div className="w-full md:w-1/2 pt-2 md:pt-0 px-6 md:px-20">
                    {FEATURED_SERVICES.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            index={index}
                            setActiveIndex={setActiveIndex}
                            activeIndex={activeIndex}
                            isLast={index === FEATURED_SERVICES.length - 1}
                        />
                    ))}
                </div>

                {/* Right Side: Sticky Visuals */}
                <div className="hidden md:block md:w-1/2 md:sticky md:top-0 md:h-screen overflow-hidden bg-slate-50 relative">
                    {/* Background Progress Rail */}
                    <div className="absolute right-8 top-1/2 -translate-y-1/2 w-1 h-32 bg-slate-200 rounded-full overflow-hidden">
                        <motion.div
                            animate={{
                                height: `${((activeIndex + 1) / FEATURED_SERVICES.length) * 100}%`
                            }}
                            className="bg-slate-900 w-full rounded-full"
                        />
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 1.1, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -20 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full h-full flex items-center justify-center p-12 lg:p-20"
                        >
                            <div className="relative w-full h-full max-h-[70vh] rounded-[40px] overflow-hidden shadow-2xl border border-white/50 group">
                                <motion.img
                                    style={{ y: imageY, height: "120%", top: "-10%" }}
                                    initial={{ scale: 1.2 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                    src={FEATURED_SERVICES[activeIndex].image}
                                    alt={FEATURED_SERVICES[activeIndex].title}
                                    className="absolute inset-0 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                    referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                                <div className="absolute bottom-10 left-10 right-10">
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] uppercase tracking-tighter font-bold mb-3"
                                    >
                                        Feature Details
                                    </motion.div>
                                    <motion.h3
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="text-white text-3xl font-bold"
                                    >
                                        {FEATURED_SERVICES[activeIndex].title}
                                    </motion.h3>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}