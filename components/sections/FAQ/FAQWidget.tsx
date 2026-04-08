"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  MessageCircle,
  Maximize2,
  Minimize2,
  Search,
} from "lucide-react";

export default function FAQWidget() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [query, setQuery] = useState("");

  const faqs = [
    {
      q: "Come funziona KTS Finance?",
      a: "Offriamo polizze digitali con gestione completamente online.",
    },
    {
      q: "Posso gestire tutto dall'app?",
      a: "Sì, tutto è accessibile dall'app mobile.",
    },
    {
      q: "Quanto tempo serve per attivare?",
      a: "In meno di 2 minuti puoi attivare una polizza.",
    },
    {
      q: "È sicuro?",
      a: "Utilizziamo standard bancari per la sicurezza dei dati.",
    },
  ];

  // 🔍 Search filter
  const filteredFaqs = useMemo(() => {
    return faqs.filter((item) =>
      item.q.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <>
      {/* FLOATING BUTTON */}
      {!open && (
        <motion.button
          onClick={() => setOpen(true)}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed bottom-4 right-6 z-49 w-12 h-12 rounded-full bg-black text-white shadow-lg flex items-center justify-center hover:scale-110 transition"
        >
          <MessageCircle size={18} />
        </motion.button>
      )}

      {/* PANEL */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
                opacity: 0,
                scale: 0.3,
                y: 20,
            }}
            animate={{
                opacity: 1,
                scale: 1,
                y: 0,
            }}
            exit={{
                opacity: 0,
                scale: 0.3,
                y: 20,
            }}
            transition={{
                type: "spring",
                stiffness: 110,
                damping: 18,
                mass: 1.2,
            }}
            style={{
                transformOrigin: "bottom right",
            }}
            className={`fixed bottom-6 right-6 z-50 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden
              ${expanded ? "w-[380px] h-[520px]" : "w-[320px] h-[420px]"}`}
          >
            {/* HEADER */}
            <div className="flex justify-between items-center p-3 border-b">
              <h3 className="font-semibold text-sm">Centro Assistenza</h3>

              <div className="flex items-center gap-2">
                <button onClick={() => setExpanded(!expanded)}>
                  {expanded ? (
                    <Minimize2 size={16} />
                  ) : (
                    <Maximize2 size={16} />
                  )}
                </button>

                <button onClick={() => setOpen(false)}>
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* QUICK ACTIONS */}
            <div className="p-3 border-b grid grid-cols-2 gap-2">
              <a
                href="/preventivo"
                className="text-center text-xs font-semibold bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Ottieni Preventivo
              </a>

              <a
                href="/contact"
                className="text-center text-xs font-semibold bg-slate-100 text-slate-700 py-2 rounded-lg hover:bg-slate-200 transition"
              >
                Contattaci
              </a>
            </div>

            {/* SEARCH */}
            <div className="p-3 border-b">
              <div className="flex items-center bg-slate-100 rounded-lg px-2">
                <Search size={14} className="text-slate-400" />
                <input
                  type="text"
                  placeholder="Cerca una domanda..."
                  className="bg-transparent outline-none px-2 py-2 text-xs w-full"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </div>

            {/* FAQ LIST */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              {filteredFaqs.map((item, i) => (
                <div key={i} className="border rounded-lg overflow-hidden">
                  <button
                    onClick={() =>
                      setActiveIndex(activeIndex === i ? null : i)
                    }
                    className="w-full text-left p-3 text-sm font-medium bg-white hover:bg-slate-50 transition"
                  >
                    {item.q}
                  </button>

                  <AnimatePresence>
                    {activeIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-3 pb-3 text-xs text-slate-500"
                      >
                        {item.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {filteredFaqs.length === 0 && (
                <div className="text-xs text-slate-400 text-center mt-4">
                  Nessun risultato trovato
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}