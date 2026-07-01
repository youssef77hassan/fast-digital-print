/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MouseEvent } from "react";
import { useTheme } from "./ThemeContext";
import { useLanguage } from "./LanguageContext";
import { MessageCircle, Instagram, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const { theme } = useTheme();
  const { language, t } = useLanguage();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isDark = theme === "dark";

  return (
    <footer className={`py-16 px-4 md:px-8 border-t ${
      isDark 
        ? "bg-[#0F1115] border-white/5 text-neutral-400" 
        : "bg-[#FAFAFA] border-neutral-200/50 text-neutral-600"
    }`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Brand Column */}
        <div className="md:col-span-5 flex flex-col items-start space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-brand-orange flex items-center justify-center overflow-hidden">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold tracking-wider leading-none text-sm ${
                isDark ? "text-white" : "text-neutral-900"
              }`}>
                FAST DIGITAL
              </span>
              <span className="font-mono text-[8px] tracking-[0.2em] text-brand-orange font-medium leading-none mt-1">
                PRINT SHOP
              </span>
            </div>
          </div>
          <p className="text-xs leading-relaxed max-w-sm">
            {t("footer_desc")}
          </p>
        </div>

        {/* Quick navigation */}
        <div className="md:col-span-3 flex flex-col space-y-3.5">
          <span className={`text-[10px] font-mono uppercase tracking-widest ${isDark ? "text-white" : "text-neutral-900"}`}>
            {t("footer_nav")}
          </span>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {[
              { name: t("nav_home"), href: "#home" },
              { name: t("nav_products"), href: "#products" },
              { name: t("nav_about"), href: "#about" },
              { name: t("nav_contact"), href: "#contact" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-brand-orange transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Channels / Social Links */}
        <div className="md:col-span-4 flex flex-col space-y-3.5">
          <span className={`text-[10px] font-mono uppercase tracking-widest ${isDark ? "text-white" : "text-neutral-900"}`}>
            {language === "ar" ? "قنوات الاتصال المباشرة" : "COMMUNICATION CHANNELS"}
          </span>
          <div className="flex items-center gap-3">
            {/* Instagram Link (Referencing real account handle) */}
            <a
              href="https://www.instagram.com/fast_digitalprint/"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow @fast_digitalprint"
              className={`p-3 rounded-full border transition-all hover:scale-105 ${
                isDark 
                  ? "bg-white/5 border-white/10 hover:border-brand-orange/40 hover:bg-brand-orange/10 text-neutral-300 hover:text-white" 
                  : "bg-white border-neutral-200 hover:border-brand-orange/20 hover:bg-neutral-50 text-neutral-600 hover:text-neutral-900"
              }`}
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* WhatsApp direct thread */}
            <a
              href={`https://wa.me/201210050621?text=${encodeURIComponent(language === "ar" ? "السلام عليكم،\nأنا مهتم بخدمات FAST DIGITAL PRINT وأرغب في الاستفسار عن المطبوعات والتفاصيل." : "Hello,\nI am interested in FAST DIGITAL PRINT services and would like to inquire about print solutions.")}`}
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp inquiry"
              className={`p-3 rounded-full border transition-all hover:scale-105 ${
                isDark 
                  ? "bg-white/5 border-white/10 hover:border-[#F7931E]/40 hover:bg-[#F7931E]/10 text-neutral-300 hover:text-white" 
                  : "bg-white border-neutral-200 hover:border-[#F7931E]/20 hover:bg-neutral-50 text-neutral-600 hover:text-neutral-900"
              }`}
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Email contact */}
            <a
              href="mailto:info@fastdigitalprint.co"
              title="Email support"
              className={`p-3 rounded-full border transition-all hover:scale-105 ${
                isDark 
                  ? "bg-white/5 border-white/10 hover:border-[#F7931E]/40 hover:bg-[#F7931E]/10 text-neutral-300 hover:text-white" 
                  : "bg-white border-neutral-200 hover:border-[#F7931E]/20 hover:bg-neutral-50 text-neutral-600 hover:text-neutral-900"
              }`}
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
          <span className="text-[10px] opacity-60 block font-mono">
            MAIN: +20 121 005 0621
          </span>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-neutral-200/50 dark:border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono uppercase tracking-wider">
        <div className="text-center sm:text-left">
          {t("footer_rights")}
        </div>
        <button
          onClick={handleScrollToTop}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-full border cursor-pointer hover:border-brand-orange/40 transition-all ${
            isDark ? "border-white/10 text-neutral-300" : "border-neutral-200 text-neutral-600"
          }`}
        >
          <span>{language === "ar" ? "العودة للأعلى" : "Scroll to top"}</span>
          <ArrowUp className="w-3 h-3" />
        </button>
      </div>
    </footer>
  );
}
