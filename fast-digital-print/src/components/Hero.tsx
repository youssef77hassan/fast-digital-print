/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MouseEvent, useRef } from "react";
import { useTheme } from "./ThemeContext";
import { useLanguage } from "./LanguageContext";
import { ArrowUpRight, MessageCircle, Sparkles, Check } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

export function Hero() {
  const { theme } = useTheme();
  const { language, t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleBrowseProducts = (e: MouseEvent) => {
    e.preventDefault();
    const productsSec = document.querySelector("#products");
    if (productsSec) {
      productsSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isDark = theme === "dark";

  // Premium GPU-accelerated Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  // Premium GPU-accelerated Parallax scroll transforms for liquid glass frames
  const card1ScrollY = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const card1ScrollX = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const card1ScrollRotate = useTransform(scrollYProgress, [0, 1], [0, -12]);

  const card2ScrollY = useTransform(scrollYProgress, [0, 1], [0, 85]);
  const card2ScrollX = useTransform(scrollYProgress, [0, 1], [0, 25]);
  const card2ScrollRotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

  // Logo Parallax (sliding offset inside the frames to create 3D depth)
  const logo1ScrollY = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const logo1ScrollX = useTransform(scrollYProgress, [0, 1], [0, -15]);
  
  const logo2ScrollY = useTransform(scrollYProgress, [0, 1], [0, 35]);
  const logo2ScrollX = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden px-4 md:px-8 bg-neutral-950"
    >
      {/* Background Video with Parallax & GPU acceleration */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
        <motion.div 
          style={{ y: videoY, scale: videoScale, transformZ: 0 }}
          className="absolute inset-0 w-full h-full will-change-transform opacity-40"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://res.cloudinary.com/disqhusor/video/upload/v1782940631/Commercial_animation_of_printing__202606300017_gwr_video_mvp_cea84e.mp4" type="video/mp4" />
          </video>
        </motion.div>
        
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-neutral-950/20 z-[1]" />
        
        {/* Subtle linear overlay to fade gracefully to black at the top and bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-transparent to-neutral-950/50 z-[1]" />
        
        {/* Subtle grid pattern background on top of overlay for extra luxury texture */}
        <div 
          className="absolute inset-0 z-[2] opacity-25" 
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}
        />
      </div>

      {/* Editorial clean centered layout */}
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center justify-center relative z-10 py-12 md:py-20 text-center">
        
        {/* Centered Elite Typography */}
        <div className="flex flex-col items-center space-y-8 w-full">
          
          {/* Accent Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center justify-center gap-2.5 px-4 py-2 rounded-full text-xs font-mono font-medium bg-brand-orange/20 border border-brand-orange/40 text-brand-orange"
          >
            <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span className="tracking-widest font-black uppercase">FAST DIGITAL PRINT</span>
            <span className="opacity-40">|</span>
            <span>{t("hero_badge")}</span>
          </motion.div>

          {/* Title - Forced to high-contrast white to guarantee absolute readability */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] text-white max-w-4xl mx-auto text-center"
          >
            {language === "ar" ? (
              <>
                نصنع{" "}
                <span className="text-brand-orange bg-gradient-to-r from-brand-orange to-amber-500 bg-clip-text text-transparent">
                  الفخامة الملموسة
                </span>{" "}
                لهوية علامتك.
              </>
            ) : (
              <>
                Professional Printing <br />
                <span className="text-brand-orange bg-gradient-to-r from-brand-orange to-amber-500 bg-clip-text text-transparent">
                  That Elevates
                </span>{" "}
                Your Brand.
              </>
            )}
          </motion.h1>

          {/* Subheading Description - Forced to high contrast light color for readability */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-base md:text-lg max-w-2xl leading-relaxed text-neutral-200 mx-auto text-center"
          >
            {t("hero_subtitle")}
          </motion.p>

          {/* Trust points */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap items-center justify-center gap-y-3 gap-x-8 pt-2 w-full max-w-2xl mx-auto"
          >
            {(language === "ar"
              ? ["محاذاة تامة فائقة الدقة", "أوراق ومواد فاخرة مخصصة", "فحص فني مباشر للمتجهات"]
              : ["Zero-Defect Alignment", "Bespoke Luxury Papers", "1-on-1 Pre-press Checks"]
            ).map((p, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-brand-orange" />
                </div>
                <span className="text-xs font-mono font-medium text-neutral-200">
                  {p}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full pt-4"
          >
            {/* Primary Browse Products */}
            <button
              onClick={handleBrowseProducts}
              className="group relative flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-mono font-medium text-white bg-brand-orange hover:bg-brand-orange/95 transition-all shadow-xl shadow-brand-orange/20 hover:scale-[1.03] active:scale-95 cursor-pointer"
            >
              <span>{language === "ar" ? "تصفح كتالوج المنتجات" : "Browse Master Catalog"}</span>
              <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${language === "ar" ? "rotate-90" : ""}`} />
            </button>

            {/* Secondary WhatsApp consultation - Styled for high contrast dark-blend backdrop */}
            <a
              href={`https://wa.me/201210050621?text=${encodeURIComponent(
                language === "ar"
                  ? "السلام عليكم،\nأنا مهتم بخدمات FAST DIGITAL PRINT وأرغب في معرفة تفاصيل المنتج والأسعار.\nمن فضلك تواصل معي."
                  : "Hello, I am interested in FAST DIGITAL PRINT services and would like to get product details and quotes. Please contact me."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-mono font-medium border border-white/20 hover:border-brand-orange/40 bg-white/5 hover:bg-brand-orange/5 text-neutral-200 hover:text-white transition-all hover:scale-[1.03] active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#F7931E] fill-[#F7931E]/10" />
              <span>{language === "ar" ? "تواصل معنا عبر واتساب" : "Discuss on WhatsApp"}</span>
            </a>
          </motion.div>
        </div>

      </div>

      {/* Animated Mouse Scroll Indicator */}
      <div 
        onClick={handleBrowseProducts}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-1.5 cursor-pointer select-none group"
      >
        <span className="text-[9px] font-mono tracking-[0.25em] text-neutral-400 group-hover:text-brand-orange transition-colors uppercase">
          {language === "ar" ? "اسحب لأسفل" : "Scroll Down"}
        </span>
        <div className="w-5 h-9 rounded-full border-2 border-neutral-500/40 group-hover:border-brand-orange/60 transition-colors flex justify-center p-1">
          <motion.div
            animate={{
              y: [0, 14, 0],
              opacity: [1, 0.2, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1.5 h-1.5 rounded-full bg-brand-orange"
          />
        </div>
      </div>
    </section>
  );
}
