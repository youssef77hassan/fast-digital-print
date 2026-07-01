/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useTheme } from "./ThemeContext";
import { useLanguage } from "./LanguageContext";
import { Testimonial } from "../types";
import { Quote } from "lucide-react";
import { motion } from "motion/react";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const isDark = theme === "dark";

  return (
    <section id="testimonials" className="py-24 px-4 md:px-8 bg-neutral-100/30 dark:bg-neutral-900/10 relative overflow-hidden">
      {/* Background Video with 40% Opacity */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none opacity-40">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/disqhusor/video/upload/v1782945489/0702_1__gwr_video_mvp_qcerut.mp4" type="video/mp4" />
        </video>
        {/* Subtle dark overlay to ensure readability */}
        <div className={`absolute inset-0 ${isDark ? "bg-neutral-950/50" : "bg-white/30"}`} />
        
        {/* Soft fading gradient to blend with surrounding sections */}
        <div className={`absolute inset-0 bg-gradient-to-b ${
          isDark 
            ? "from-neutral-950/80 via-transparent to-neutral-950/80" 
            : "from-white/80 via-transparent to-white/80"
        }`} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-1.5 mb-3.5 select-none">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.25em] text-brand-orange font-black uppercase">
              FAST DIGITAL PRINT
            </span>
          </div>
          <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase bg-brand-orange/10 dark:bg-brand-orange/20 px-3.5 py-1.5 rounded-full border border-brand-orange/25">
            {t("testimonials_badge")}
          </span>
          <h2 className={`font-display text-3xl md:text-4xl font-bold tracking-tight mt-4 ${
            isDark ? "text-white" : "text-neutral-900"
          }`}>
            {t("testimonials_title")}
          </h2>
          <p className={`text-sm md:text-base mt-3 leading-relaxed ${
            isDark ? "text-neutral-400" : "text-neutral-600"
          }`}>
            {t("testimonials_desc")}
          </p>
        </div>

        {/* Testimonials Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => {
            const translatedName = t(`t${index + 1}_name` as any);
            const translatedRole = t(`t${index + 1}_role` as any);
            const translatedText = t(`t${index + 1}_text` as any);
            
            // Compute dynamic initials
            const parts = translatedName.trim().split(/\s+/);
            const initials = parts.map(p => p[0]).filter(Boolean).join("").substring(0, 2);

            return (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ 
                  scale: 1.08, 
                  y: -8, 
                  zIndex: 20,
                  boxShadow: isDark 
                    ? "0 25px 50px -12px rgba(247, 147, 30, 0.25)" 
                    : "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 350, 
                  damping: 20,
                  opacity: { duration: 0.6, delay: index * 0.1 },
                  y: { type: "spring", stiffness: 350, damping: 20 }
                }}
                className={`relative rounded-3xl p-8 border transition-colors duration-300 flex flex-col justify-between cursor-pointer ${
                  isDark
                    ? "bg-neutral-950/60 backdrop-blur-md border-white/10 hover:border-brand-orange/40"
                    : "bg-white/70 backdrop-blur-md border-neutral-200/60 hover:border-brand-orange/30 hover:bg-white"
                }`}
              >
                {/* Top Quote Icon Accent */}
                <div className="absolute top-6 right-6 text-brand-orange/15 dark:text-white/5">
                  <Quote className="w-10 h-10 transform rotate-180" />
                </div>

                {/* Text content */}
                <p className={`text-xs sm:text-sm leading-relaxed mb-8 italic relative z-10 ${
                  isDark ? "text-neutral-300" : "text-neutral-600"
                }`}>
                  "{translatedText}"
                </p>

                {/* Author Info with Initial Letters */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-neutral-200/50 dark:border-white/10">
                  {/* Initial Letter block - No AI generated face */}
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-xs bg-brand-orange/10 dark:bg-brand-orange/20 border border-brand-orange/20 text-brand-orange shrink-0">
                    {initials || testimonial.initials}
                  </div>

                  <div className="flex flex-col min-w-0">
                    <span className={`font-display font-semibold text-xs tracking-tight truncate ${
                      isDark ? "text-white" : "text-neutral-900"
                    }`}>
                      {translatedName}
                    </span>
                    <span className={`text-[10px] font-mono truncate ${
                      isDark ? "text-neutral-500" : "text-neutral-400"
                    }`}>
                      {translatedRole}
                    </span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
