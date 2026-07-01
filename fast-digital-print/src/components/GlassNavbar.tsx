/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, MouseEvent } from "react";
import { useTheme } from "./ThemeContext";
import { useLanguage } from "./LanguageContext";
import { Sun, Moon, MessageCircle, User, ShieldCheck, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface GlassNavbarProps {
  onOpenLogin: () => void;
  activeSection: string;
}

export function GlassNavbar({ onOpenLogin, activeSection }: GlassNavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav_home"), href: "#home" },
    { name: t("nav_products"), href: "#products" },
    { name: t("nav_about"), href: "#about" },
    { name: t("nav_contact"), href: "#contact" },
  ];

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isDark = theme === "dark";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 pointer-events-none">
      {/* Floating Wrapper with center constraint */}
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Floating Glass Container */}
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 18 }}
          className={`w-full flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${
            scrolled
              ? isDark
                ? "liquid-glass-dark py-2.5 shadow-lg shadow-black/30"
                : "liquid-glass-light py-2.5 shadow-md shadow-black/5"
              : isDark
                ? "bg-transparent border border-white/5"
                : "bg-transparent border border-black/5"
          }`}
        >
          {/* Logo with modern Swiss precision */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative w-11 h-11 rounded-xl bg-brand-orange flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-110 shadow-lg shadow-brand-orange/30">
              {/* Dynamic Logo Graphics */}
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-black tracking-widest leading-none text-base md:text-lg lg:text-xl ${
                isDark ? "text-white" : "text-neutral-900"
              }`}>
                FAST DIGITAL
              </span>
              <span className="font-mono text-[10px] tracking-[0.25em] text-brand-orange font-extrabold leading-none mt-1.5 uppercase">
                PRINT SHOP
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Swiss Centered) */}
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-neutral-200/50 dark:border-white/5 bg-neutral-100/40 dark:bg-neutral-900/40">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                    isActive
                      ? isDark
                        ? "text-white bg-white/10"
                        : "text-neutral-900 bg-black/5 font-semibold"
                      : isDark
                        ? "text-neutral-400 hover:text-white"
                        : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-glow"
                      className="absolute inset-0 border border-brand-orange/40 rounded-full pointer-events-none"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Controls Area */}
          <div className="hidden md:flex items-center gap-3">
            {/* Elite Pre-press Portal Portal Trigger */}
            <button
              onClick={onOpenLogin}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-medium border transition-all cursor-pointer ${
                isDark
                  ? "border-white/10 hover:border-brand-orange/40 bg-white/5 hover:bg-brand-orange/5 text-neutral-300 hover:text-white"
                  : "border-neutral-200 hover:border-brand-orange/40 bg-neutral-100/50 hover:bg-brand-orange/[0.03] text-neutral-600 hover:text-neutral-900"
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
              <span>{t("nav_login")}</span>
            </button>

            {/* Apple VisionOS Liquid Glass Theme Switcher */}
            <button
              onClick={toggleTheme}
              title={isDark ? t("theme_light") : t("theme_dark")}
              className="relative glass-shine-container flex items-center justify-center w-10 h-10 rounded-full cursor-pointer transition-all hover:scale-105 active:scale-95 duration-300"
              style={{
                background: isDark ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.04)",
                backdropFilter: "blur(22px)",
                border: isDark ? "1px solid rgba(255,255,255,.15)" : "1px solid rgba(0,0,0,.08)",
                boxShadow: isDark 
                  ? "0 4px 12px rgba(0,0,0,.15), inset 0 1px 0 rgba(255,255,255,.05)" 
                  : "0 4px 12px rgba(0,0,0,.04), inset 0 1px 0 rgba(255,255,255,.8)"
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    exit={{ scale: 0.5, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Sun className="w-4 h-4 text-brand-orange fill-brand-orange/20" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ scale: 0.5, opacity: 0, rotate: 90 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    exit={{ scale: 0.5, opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Moon className="w-4 h-4 text-neutral-800 fill-neutral-800/15" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Premium Liquid Glass Language Switcher */}
            <button
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              title={language === "en" ? "Switch to Arabic / العربية" : "Switch to English / الإنجليزية"}
              className="relative glass-shine-container flex items-center justify-center gap-1 px-3.5 h-10 rounded-full cursor-pointer transition-all hover:scale-105 active:scale-95 duration-300 font-sans text-xs font-semibold select-none"
              style={{
                background: isDark ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.04)",
                backdropFilter: "blur(22px)",
                border: isDark ? "1px solid rgba(255,255,255,.15)" : "1px solid rgba(0,0,0,.08)",
                boxShadow: isDark 
                  ? "0 4px 12px rgba(0,0,0,.15), inset 0 1px 0 rgba(255,255,255,.05)" 
                  : "0 4px 12px rgba(0,0,0,.04), inset 0 1px 0 rgba(255,255,255,.8)",
                color: isDark ? "#FAFAFA" : "#171A20"
              }}
            >
              <span>{language === "en" ? "العربية" : "English"}</span>
              <span className="text-[13px]">{language === "en" ? "🇸🇦" : "🇺🇸"}</span>
            </button>

            {/* Floating Quick WhatsApp Button */}
            <a
              href={`https://wa.me/201210050621?text=${encodeURIComponent(
                language === "ar"
                  ? "السلام عليكم،\nأنا مهتم بخدمات FAST DIGITAL PRINT وأرغب في معرفة تفاصيل المنتج والأسعار.\nمن فضلك تواصل معي."
                  : "Hello, I am interested in FAST DIGITAL PRINT services and would like to get product details and quotes. Please contact me."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#F7931E] hover:bg-[#F7931E]/90 text-white font-mono text-xs px-4 py-2.5 rounded-full font-medium shadow-md hover:shadow-[#F7931E]/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{t("contact_submit")}</span>
            </a>
          </div>

          {/* Mobile Right Controls Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Premium Liquid Glass Language Switcher for Mobile */}
            <button
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className={`flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer select-none transition-all hover:scale-105 active:scale-95 ${
                isDark
                  ? "border border-white/10 bg-white/5 text-neutral-200"
                  : "border border-neutral-200 bg-neutral-100/50 text-neutral-800"
              }`}
            >
              <span>{language === "en" ? "العربية" : "English"}</span>
              <span className="text-xs">{language === "en" ? "🇸🇦" : "🇺🇸"}</span>
            </button>

            {/* Quick Toggle for Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-neutral-200 dark:border-white/10 text-neutral-600 dark:text-neutral-400 cursor-pointer"
            >
              {isDark ? <Sun className="w-4 h-4 text-brand-orange" /> : <Moon className="w-4 h-4 text-neutral-700" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-full border transition-all cursor-pointer ${
                isDark 
                  ? "border-white/10 text-white hover:bg-white/5" 
                  : "border-neutral-200 text-neutral-900 hover:bg-neutral-100"
              }`}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Drawer (Liquid Glass Menu overlay) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-4 right-4 p-6 rounded-3xl z-40 shadow-2xl pointer-events-auto"
            style={{
              background: isDark ? "rgba(15, 17, 21, 0.95)" : "rgba(250, 250, 250, 0.95)",
              backdropFilter: "blur(22px)",
              border: isDark ? "1px solid rgba(255,255,255,.1)" : "1px solid rgba(0,0,0,.08)",
            }}
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isDark 
                        ? "text-neutral-300 hover:text-white hover:bg-white/5" 
                        : "text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="h-[1px] bg-neutral-200 dark:bg-white/15 my-1" />

              <div className="flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenLogin();
                  }}
                  className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-mono font-medium border cursor-pointer ${
                    isDark
                      ? "border-white/10 hover:border-brand-orange/40 bg-white/5 text-white"
                      : "border-neutral-200 hover:border-brand-orange/40 bg-neutral-100 text-neutral-800"
                  }`}
                >
                  <ShieldCheck className="w-4 h-4 text-brand-orange" />
                  <span>{t("nav_login")}</span>
                </button>

                <a
                  href={`https://wa.me/201210050621?text=${encodeURIComponent(
                    language === "ar"
                      ? "السلام عليكم،\nأنا مهتم بخدمات FAST DIGITAL PRINT وأرغب في معرفة تفاصيل المنتج والأسعار.\nمن فضلك تواصل معي."
                      : "Hello, I am interested in FAST DIGITAL PRINT services and would like to get product details and quotes. Please contact me."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#F7931E] hover:bg-[#F7931E]/90 text-white font-mono text-xs py-3.5 rounded-xl font-medium shadow-md transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t("contact_submit")}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
