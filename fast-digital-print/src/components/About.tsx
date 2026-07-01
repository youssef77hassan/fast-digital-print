/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, useRef } from "react";
import { useTheme } from "./ThemeContext";
import { useLanguage } from "./LanguageContext";
import { TimelineEvent, StatItem } from "../types";
import { Award, Clock, Users, Zap, ShieldCheck, Star } from "lucide-react";
import { motion, useInView } from "motion/react";

interface AboutProps {
  timeline: TimelineEvent[];
  stats: StatItem[];
}

// Custom Scroll-Linked Counter Component for high fidelity $20,000 feel
function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 1200; // ms
    const increment = end / (duration / 16); // ~60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={containerRef} className="font-display font-bold text-3xl sm:text-4xl text-brand-orange">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export function About({ timeline, stats }: AboutProps) {
  const { theme } = useTheme();
  const { language, t } = useLanguage();

  const isDark = theme === "dark";

  const resolvedStats = stats.map((stat, idx) => {
    const labelKey = `stat_s${idx + 1}_label` as any;
    return {
      ...stat,
      label: t(labelKey),
    };
  });

  const resolvedTimeline = timeline.map((event, idx) => {
    const titleKey = `timeline_${idx + 1}_title` as any;
    const descKey = `timeline_${idx + 1}_desc` as any;
    return {
      ...event,
      title: t(titleKey),
      description: t(descKey),
    };
  });

  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-neutral-100/30 dark:bg-neutral-900/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-1.5 mb-3.5 select-none">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-[10px] font-mono tracking-[0.25em] text-brand-orange font-black uppercase">
                FAST DIGITAL PRINT
              </span>
            </div>
            <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase bg-brand-orange/10 dark:bg-brand-orange/20 px-3.5 py-1.5 rounded-full border border-brand-orange/25">
              {t("about_badge")}
            </span>
            <h2 className={`font-display text-3xl md:text-5xl font-bold tracking-tight mt-4 ${
              isDark ? "text-white" : "text-neutral-900"
            }`}>
              {language === "ar" ? (
                <>
                  إرث من الدقة <br />
                  والإتقان منذ ٢٠١٨.
                </>
              ) : (
                <>
                  Crafting Impressions <br />
                  Since 2018.
                </>
              )}
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className={`text-sm md:text-base leading-relaxed ${
              isDark ? "text-neutral-400" : "text-neutral-600"
            }`}>
              {t("about_desc")}
            </p>
          </div>
        </div>

        {/* Dynamic Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {resolvedStats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`p-6 rounded-3xl border transition-all duration-500 ${
                isDark
                  ? "bg-neutral-900/40 border-white/5 hover:border-brand-orange/20 shadow-xl"
                  : "bg-white border-neutral-100 hover:border-brand-orange/15 shadow-md shadow-neutral-400/5"
              }`}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <div className={`text-xs font-mono font-medium mt-1 uppercase tracking-wider ${
                isDark ? "text-neutral-500" : "text-neutral-400"
              }`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Minimalist Timeline of Company History */}
        <div className={`max-w-4xl mx-auto relative pl-6 md:pl-10 space-y-12 ${language === "ar" ? "border-r pr-6 md:pr-10 pl-0 md:pl-0" : "border-l"}`} style={{ borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)" }}>
          
          {/* Pulsing timeline absolute dot path indicator */}
          <div className={`absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-orange via-amber-500 to-transparent pointer-events-none ${language === "ar" ? "right-0" : "left-0"}`} />

          {resolvedTimeline.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: language === "ar" ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Dynamic Timeline Dot Indicator */}
              <div className={`absolute top-1 w-4 h-4 rounded-full bg-white dark:bg-[#0F1115] border-2 border-brand-orange flex items-center justify-center group-hover:scale-125 transition-transform ${language === "ar" ? "-right-[31px] md:-right-[47px]" : "-left-[31px] md:-left-[47px]"}`}>
                <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              </div>

              {/* Year Label */}
              <div className="text-sm font-mono font-bold text-brand-orange">
                {event.year}
              </div>

              {/* Title & Description */}
              <h4 className={`font-display text-lg font-bold tracking-tight mt-1 mb-2 ${
                isDark ? "text-white" : "text-neutral-900"
              }`}>
                {event.title}
              </h4>
              <p className={`text-xs sm:text-sm leading-relaxed max-w-2xl ${
                isDark ? "text-neutral-400" : "text-neutral-600"
              }`}>
                {event.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
