/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ComponentType } from "react";
import { useTheme } from "./ThemeContext";
import { useLanguage } from "./LanguageContext";
import { ValueCard } from "../types";
import { Truck, Award, Cpu, Sparkles, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

interface WhyChooseUsProps {
  items: ValueCard[];
}

// Icon Mapping table to respect Named Imports rule
const iconMap: Record<string, ComponentType<any>> = {
  Truck: Truck,
  Award: Award,
  Cpu: Cpu,
  Sparkles: Sparkles,
  MessageCircle: MessageCircle,
};

export function WhyChooseUs({ items }: WhyChooseUsProps) {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const isDark = theme === "dark";

  const resolvedItems = items.map((item, idx) => {
    const titleKey = `value_v${idx + 1}_title` as any;
    const descKey = `value_v${idx + 1}_desc` as any;
    return {
      ...item,
      title: t(titleKey),
      description: t(descKey),
    };
  });

  return (
    <section className="py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-1.5 mb-3.5 select-none">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.25em] text-brand-orange font-black uppercase">
              FAST DIGITAL PRINT
            </span>
          </div>
          <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase bg-brand-orange/10 dark:bg-brand-orange/20 px-3.5 py-1.5 rounded-full border border-brand-orange/25">
            {t("why_badge")}
          </span>
          <h2 className={`font-display text-3xl md:text-4xl font-bold tracking-tight mt-4 ${
            isDark ? "text-white" : "text-neutral-900"
          }`}>
            {t("why_title")}
          </h2>
          <p className={`text-sm md:text-base mt-3 leading-relaxed ${
            isDark ? "text-neutral-400" : "text-neutral-600"
          }`}>
            {t("why_desc")}
          </p>
        </div>

        {/* Core Values Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {resolvedItems.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Award;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`group rounded-3xl p-6 border transition-all duration-500 hover:scale-[1.02] ${
                  isDark
                    ? "bg-neutral-900/40 border-white/5 hover:border-brand-orange/30 hover:bg-[#171A20]/80 shadow-2xl"
                    : "bg-white border-neutral-100 hover:border-brand-orange/20 hover:bg-neutral-50/50 shadow-md shadow-neutral-400/5"
                }`}
              >
                {/* Icon box */}
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 dark:bg-brand-orange/20 text-brand-orange flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-4.5 h-4.5" />
                </div>

                {/* Typography */}
                <h3 className={`font-display font-bold text-sm tracking-tight mb-2 ${
                  isDark ? "text-white" : "text-neutral-900"
                }`}>
                  {item.title}
                </h3>
                <p className={`text-xs leading-relaxed ${
                  isDark ? "text-neutral-400" : "text-neutral-500"
                }`}>
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
