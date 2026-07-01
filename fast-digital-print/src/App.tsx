/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { ThemeProvider, useTheme } from "./components/ThemeContext";
import { GlassNavbar } from "./components/GlassNavbar";
import { Hero } from "./components/Hero";
import { SearchBar } from "./components/SearchBar";
import { Products } from "./components/Products";
import { About } from "./components/About";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { LoginPopup } from "./components/LoginPopup";
import { 
  productsData, 
  testimonialsData, 
  timelineData, 
  statsData, 
  valueCardsData 
} from "./data";
import { MessageCircle, ArrowUp, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { useLanguage } from "./components/LanguageContext";

function MainApp() {
  const { theme } = useTheme();
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height to show/hide back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      // Section Intersection Observer logic
      const sections = ["home", "products", "about", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSelectQuery = (query: string) => {
    setSearchQuery(query);
    // Smooth scroll directly to products
    const element = document.querySelector("#products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isDark = theme === "dark";

  return (
    <div className={`min-h-screen transition-colors duration-500 paper-texture select-none overflow-x-hidden ${
      isDark ? "bg-[#0F1115] text-white" : "bg-[#FAFAFA] text-neutral-900"
    }`}>
      
      {/* Liquid Glass Header Navigation */}
      <GlassNavbar onOpenLogin={() => setIsLoginOpen(true)} activeSection={activeSection} />

      {/* Hero section */}
      <Hero />

      {/* Interactive Liquid Glass Search Bar Spacer */}
      <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto border-t border-b border-neutral-200/50 dark:border-white/5 bg-neutral-50/20 dark:bg-white/[0.01]">
        <SearchBar 
          value={searchQuery} 
          onChange={setSearchQuery} 
          onSelectSuggestion={handleSelectQuery}
        />
      </div>

      {/* Products Catalog Display */}
      <Products products={productsData} searchQuery={searchQuery} />

      {/* Dynamic Brand Custom Values */}
      <WhyChooseUs items={valueCardsData} />

      {/* Testimonials glass card deck */}
      <Testimonials testimonials={testimonialsData} />

      {/* Master stats and historical timeline */}
      <About timeline={timelineData} stats={statsData} />

      {/* Integrated Contact Form & Google Maps */}
      <Contact />

      {/* Premium Minimal Footer */}
      <Footer />

      {/* Premium Liquid Glass Pre-press Portal popup */}
      <LoginPopup isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

      {/* Floating Action Triggers (Sticky Bottom) */}
      <div className="fixed bottom-6 right-6 z-[45] flex flex-col items-center gap-3 pointer-events-none">
        
        {/* Back To Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={`p-3.5 rounded-full border shadow-xl cursor-pointer pointer-events-auto transition-transform hover:scale-110 active:scale-95 ${
                isDark 
                  ? "bg-[#171A20] border-white/10 text-white" 
                  : "bg-white border-neutral-200 text-neutral-900"
              }`}
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Floating Liquid Glass Sticky WhatsApp Button */}
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", delay: 0.5 }}
          href={`https://wa.me/201210050621?text=${encodeURIComponent(
            language === "ar"
              ? "السلام عليكم،\nأنا مهتم بخدمات FAST DIGITAL PRINT وأرغب في معرفة تفاصيل المنتج والأسعار.\nمن فضلك تواصل معي."
              : "Hello, I am interested in FAST DIGITAL PRINT services and would like to get product details and quotes. Please contact me."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-brand-orange text-white shadow-2xl shadow-brand-orange/30 cursor-pointer pointer-events-auto flex items-center justify-center group relative hover:scale-110 active:scale-95 transition-all"
        >
          {/* Subtle reflection overlay */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/15 to-transparent pointer-events-none" />
          
          <MessageCircle className="w-5.5 h-5.5 fill-white/10" />

          {/* Liquid Glass floating hover hint */}
          <div className={`absolute scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap bg-neutral-950/80 backdrop-blur-md text-white text-[10px] font-mono font-medium px-3 py-1.5 rounded-xl border border-white/10 ${
            language === "ar" ? "left-14 origin-left" : "right-14 origin-right"
          }`}>
            {language === "ar" ? "تحدث مع مسؤول التجهيز الفني" : "Chat with pre-press Lead"}
          </div>
        </motion.a>
      </div>

    </div>
  );
}

import { LanguageProvider } from "./components/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <MainApp />
      </ThemeProvider>
    </LanguageProvider>
  );
}
