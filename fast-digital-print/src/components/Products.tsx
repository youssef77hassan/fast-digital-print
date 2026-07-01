/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef } from "react";
import { useTheme } from "./ThemeContext";
import { useLanguage } from "./LanguageContext";
import { Product } from "../types";
import { MessageCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

interface ProductsProps {
  products: Product[];
  searchQuery: string;
}

interface ProductLandingSectionProps {
  key?: any;
  bgUrl?: string;
  videoUrl?: string;
  title: string;
  subtitle?: string;
  waLink: string;
}

function ProductLandingSection({ bgUrl, videoUrl, title, subtitle, waLink }: ProductLandingSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  // Track scroll position of this container relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth cinematic parallax effect
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.12]);

  return (
    <div
      ref={containerRef}
      className="relative h-[380px] md:h-[500px] w-full overflow-hidden flex items-center justify-center rounded-[24px] shadow-2xl shadow-black/15 select-none will-change-transform"
    >
      {/* Background container with parallax */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        {videoUrl ? (
          <motion.div
            style={{ y: backgroundY, scale: backgroundScale }}
            className="absolute -inset-y-16 inset-x-0 w-full h-[calc(100%+128px)] will-change-transform"
          >
            <video
              src={videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>
        ) : (
          <motion.div
            style={{ y: backgroundY, scale: backgroundScale, backgroundImage: `url(${bgUrl})` }}
            className="absolute -inset-y-16 inset-x-0 w-full h-[calc(100%+128px)] bg-cover bg-center will-change-transform"
          />
        )}
      </div>

      {/* Subtle dark overlay (exactly 25% opacity) */}
      <div className="absolute inset-0 bg-neutral-950/25 z-[1]" />

      {/* Deep gradient overlay to guarantee premium contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/20 to-transparent z-[1]" />

      {/* Content centered vertically */}
      <div className="relative z-10 w-full p-8 md:p-16 flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-7xl mx-auto">
        <div className="max-w-2xl">
          {subtitle && (
            <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase mb-2 block drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
              {subtitle}
            </span>
          )}
          
          <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            {title}
          </h3>
        </div>

        {/* Premium "Contact on WhatsApp" Button */}
        <div className="flex-shrink-0">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-brand-orange hover:bg-brand-orange/95 shadow-lg shadow-brand-orange/25 transition-all duration-300 hover:scale-[1.03] active:scale-95 cursor-pointer border border-white/10 backdrop-blur-sm"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{t("products_cta")}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export function Products({ products, searchQuery }: ProductsProps) {
  const { theme } = useTheme();
  const { language, t } = useLanguage();
  const isDark = theme === "dark";

  const productSections = [
    {
      videoUrl: "https://res.cloudinary.com/disqhusor/video/upload/v1782939792/Business_card_with_paint_splash_202607012353_gwr_video_mvp_ze1fz3.mp4",
      titleKey: "products_section_1_title" as const,
      subKey: "products_section_1_sub" as const,
      arabicTag: "مطبوعات الشركات وكروت العمل الفاخرة",
    },
    {
      bgUrl: "https://res.cloudinary.com/disqhusor/image/upload/v1782937811/ChatGPT_Image_Jul_1_2026_10_44_57_PM_efcq5e.png",
      titleKey: "products_section_2_title" as const,
      subKey: "products_section_2_sub" as const,
      arabicTag: "العلب الفاخرة والتغليف المخصص",
    },
    {
      videoUrl: "https://res.cloudinary.com/disqhusor/video/upload/v1782938426/Abstract_paint_splatters_swirl_b__202607012336_gwr_video_mvp_1_vahtff.mp4",
      titleKey: "products_section_3_title" as const,
      subKey: "products_section_3_sub" as const,
      arabicTag: "المطبوعات الداخلية والخارجية واللوحات الكبيرة",
    },
    {
      videoUrl: "https://res.cloudinary.com/disqhusor/video/upload/v1782942304/0702_gwr_video_mvp_dumf2l.mp4",
      titleKey: "products_section_4_title" as const,
      subKey: "products_section_4_sub" as const,
      arabicTag: "ملصقات واستيكرات عالية الجودة",
    },
  ];

  const resolvedSections = productSections.map(sec => ({
    bgUrl: "bgUrl" in sec ? sec.bgUrl : undefined,
    videoUrl: "videoUrl" in sec ? sec.videoUrl : undefined,
    title: t(sec.titleKey),
    subtitle: t(sec.subKey),
    arabicTag: sec.arabicTag,
    titleEn: sec.titleKey === "products_section_1_title" 
      ? "Professional Printing Solutions" 
      : sec.titleKey === "products_section_2_title" 
        ? "Premium Packaging & Branding" 
        : sec.titleKey === "products_section_3_title" 
          ? "Indoor & Outdoor Printing" 
          : "Premium Custom Stickers & Labels"
  }));

  // Search logic
  const filteredSections = resolvedSections.filter(
    (section) =>
      section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      section.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="products" className="py-24 px-4 md:px-8 relative overflow-hidden bg-neutral-100/30 dark:bg-neutral-900/10">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-1.5 mb-3.5 select-none">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.25em] text-brand-orange font-black uppercase">
              FAST DIGITAL PRINT
            </span>
          </div>
          <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase bg-brand-orange/10 dark:bg-brand-orange/20 px-3.5 py-1.5 rounded-full border border-brand-orange/25">
            {t("products_badge")}
          </span>
          <h2 className={`font-display text-3xl md:text-5xl font-bold tracking-tight mt-4 ${
            isDark ? "text-white" : "text-neutral-900"
          }`}>
            {t("products_title")}
          </h2>
          <p className={`text-sm md:text-base mt-3 leading-relaxed ${
            isDark ? "text-neutral-400" : "text-neutral-600"
          }`}>
            {t("products_desc")}
          </p>
        </div>

        {/* 3 Premium Stacked Landing Banners */}
        {filteredSections.length === 0 ? (
          <div className="text-center py-16 text-neutral-400 font-mono text-sm">
            {t("search_no_results").replace("{query}", searchQuery)}
          </div>
        ) : (
          <div className="space-y-12 md:space-y-16">
            {filteredSections.map((section, idx) => {
              const arabMsg = language === "ar" 
                ? `السلام عليكم،\nأنا مهتم بخدمات FAST DIGITAL PRINT وأرغب في الاستفسار عن تفاصيل وأسعار قسم: ${section.title}.\nمن فضلك تواصل معي.`
                : `Hello,\nI am interested in FAST DIGITAL PRINT services and would like to inquire about details and pricing for: ${section.title}.\nPlease contact me.`;
              const waLink = `https://wa.me/201210050621?text=${encodeURIComponent(arabMsg)}`;

              return (
                <ProductLandingSection
                  key={idx}
                  bgUrl={section.bgUrl}
                  videoUrl={section.videoUrl}
                  title={section.title}
                  subtitle={section.subtitle}
                  waLink={waLink}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
