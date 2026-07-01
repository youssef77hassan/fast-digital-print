/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { useTheme } from "./ThemeContext";
import { useLanguage } from "./LanguageContext";
import { Phone, Mail, Clock, MapPin, MessageCircle, Send, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  const { theme } = useTheme();
  const { language, t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("Bespoke Cotton Business Cards");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // CRO Optimization: compile the fields into a beautifully formatted WhatsApp link
    const arabMsg = language === "ar" ? `السلام عليكم،
أنا مهتم بخدمات FAST DIGITAL PRINT وأرغب في معرفة تفاصيل المنتج والأسعار.
من فضلك تواصل معي.

الاسم: ${name}
البريد: ${email}
المنتج/الخدمة: ${interest}
التفاصيل: ${message}` : `Hello,
I am interested in FAST DIGITAL PRINT services and would like to know product details and pricing.
Please contact me.

Name: ${name}
Email: ${email}
Product/Service: ${interest}
Details: ${message}`;
    const waUrl = `https://wa.me/201210050621?text=${encodeURIComponent(arabMsg)}`;
    
    window.open(waUrl, "_blank");
  };

  const isDark = theme === "dark";

  const options = [
    { value: "Bespoke Cotton Business Cards", label: t("cat_cotton_cards") },
    { value: "Rigid Magnetic Packaging", label: t("cat_rigid_pkg") },
    { value: "Exhibition Banners & Roll-Ups", label: t("cat_banners") },
    { value: "Fine Art Canvas Prints", label: t("cat_canvas") },
    { value: "Die-Cut Brand Stickers", label: t("cat_stickers") },
    { value: "Storefront Signs & Acrylics", label: t("cat_signs") },
  ];

  return (
    <section id="contact" className="py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background Video with 40% Opacity */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none opacity-40">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/disqhusor/video/upload/v1782944091/Image_to_video_storefront_202607020112_ibpgbm.mp4" type="video/mp4" />
        </video>
        {/* Subtle dark overlay to ensure readability on both dark and light modes */}
        <div className={`absolute inset-0 ${isDark ? "bg-neutral-950/40" : "bg-white/20"}`} />
        
        {/* Soft fading gradient to integrate smoothly with neighboring sections */}
        <div className={`absolute inset-0 bg-gradient-to-b ${
          isDark 
            ? "from-neutral-950/70 via-transparent to-neutral-950/70" 
            : "from-white/70 via-transparent to-white/70"
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
            {t("contact_badge")}
          </span>
          <h2 className={`font-display text-3xl md:text-4xl font-bold tracking-tight mt-4 ${
            isDark ? "text-white" : "text-neutral-900"
          }`}>
            {t("contact_title")}
          </h2>
          <p className={`text-sm md:text-base mt-3 leading-relaxed ${
            isDark ? "text-neutral-400" : "text-neutral-600"
          }`}>
            {t("contact_desc")}
          </p>
        </div>

        {/* Combined Contact Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Custom CRO-Optimized Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`lg:col-span-6 rounded-3xl p-8 border ${
              isDark
                ? "bg-neutral-900/40 border-white/5 text-white"
                : "bg-white border-neutral-100 text-neutral-900"
            }`}
          >
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 text-brand-orange animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider text-brand-orange">
                {t("contact_form_badge")}
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className={`text-[10px] font-mono tracking-wider ${isDark ? "text-neutral-400" : "text-neutral-500"}`}>
                    {t("contact_name").toUpperCase()}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t("contact_placeholder_name")}
                    className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm outline-none transition-all ${
                      isDark
                        ? "bg-white/5 border border-white/10 text-white focus:border-brand-orange/60"
                        : "bg-neutral-50 border border-neutral-200 text-neutral-900 focus:border-brand-orange/60"
                    }`}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className={`text-[10px] font-mono tracking-wider ${isDark ? "text-neutral-400" : "text-neutral-500"}`}>
                    {t("contact_email").toUpperCase()}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("contact_placeholder_email")}
                    className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm outline-none transition-all ${
                      isDark
                        ? "bg-white/5 border border-white/10 text-white focus:border-brand-orange/60"
                        : "bg-neutral-50 border border-neutral-200 text-neutral-900 focus:border-brand-orange/60"
                    }`}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className={`text-[10px] font-mono tracking-wider ${isDark ? "text-neutral-400" : "text-neutral-500"}`}>
                  {t("contact_label_category")}
                </label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm outline-none transition-all ${
                    isDark
                      ? "bg-[#171A20] border border-white/10 text-white focus:border-brand-orange/60"
                      : "bg-neutral-50 border border-neutral-200 text-neutral-900 focus:border-brand-orange/60"
                  }`}
                >
                  {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className={`text-[10px] font-mono tracking-wider ${isDark ? "text-neutral-400" : "text-neutral-500"}`}>
                  {t("contact_message").toUpperCase()}
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t("contact_placeholder_message")}
                  className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm outline-none transition-all resize-none ${
                    isDark
                      ? "bg-white/5 border border-white/10 text-white focus:border-brand-orange/60"
                      : "bg-neutral-50 border border-neutral-200 text-neutral-900 focus:border-brand-orange/60"
                  }`}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-mono text-xs font-semibold bg-brand-orange hover:bg-brand-orange/90 text-white transition-all shadow-xl shadow-brand-orange/20 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t("contact_submit")}</span>
              </button>
            </form>
          </motion.div>

          {/* Right Column: Google Maps and Studio details */}
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-between gap-6"
          >
            {/* The Google Maps embedded panel */}
            <div className={`flex-1 rounded-3xl overflow-hidden border relative min-h-[250px] ${
              isDark ? "border-white/10" : "border-neutral-200"
            }`}>
              <iframe
                title="FAST DIGITAL PRINT Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13645.719717163826!2d30.0163351307612!3d31.23668383842183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5daf8953f938d%3A0xe5a363fffa694c9!2zNDUg2KfZhNiV2LXYp9mB2LHYp9iMINin2YTYp9iz2YPYp9mG2K_YsdmK2Kk!5e0!3m2!1sen!2seg!4v1719665678900!5m2!1sen!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer"
                className={`w-full h-full ${isDark ? "grayscale invert opacity-80" : ""}`}
              />
            </div>

            {/* Practical details card */}
            <div className={`p-6 rounded-3xl border grid grid-cols-1 sm:grid-cols-2 gap-4 ${
              isDark ? "bg-white/5 border-white/10 text-white" : "bg-white border-neutral-100 text-neutral-900"
            }`}>
              {/* Address detail */}
              <a
                href="https://www.bing.com/maps/search?v=2&pc=FACEBK&mid=8100&mkt=en-US&fbclid=IwY2xjawSyRvRleHRuA2FlbQIxMABicmlkETFHSGhUQTJnZWZjSTBMdXdFc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHiZpB3JXq3y-Gk9SIpCHkbUBlwfdqfxX2OxW7IEj9TYEEOfVk9GVQsYS3RL7_aem_B7K7mRGMT8dBvMdqggDeyA&FORM=FBKPL1&q=%D8%B4%D8%A7%D8%B1%D8%B9+5+%D9%85%D9%86+%D8%B4%D8%A7%D8%B1%D8%B9+45+%D8%A7%D9%84%D8%B9%D8%B5%D8%A7%D9%81%D8%B1%D8%A9%2C+Alexandria%2C+Egypt&cp=31.278184%7E30.015562&lvl=16&style=r"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 group/address cursor-pointer hover:bg-white/5 p-1 rounded-2xl transition-all duration-300"
              >
                <div className="p-2.5 rounded-xl bg-brand-orange/10 text-brand-orange self-start shrink-0 group-hover/address:bg-brand-orange group-hover/address:text-white transition-all duration-300">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono tracking-wider opacity-50 uppercase group-hover/address:text-brand-orange transition-colors duration-300">{t("contact_card_address_title")}</span>
                  <span className="text-xs font-semibold mt-1 group-hover/address:text-brand-orange transition-colors duration-300">{t("contact_card_address_value")}</span>
                  <span className="text-[10px] opacity-70 group-hover/address:text-white/80 transition-colors duration-300">{t("contact_card_address_city")}</span>
                </div>
              </a>

              {/* Working hours */}
              <div className="flex gap-3">
                <div className="p-2.5 rounded-xl bg-brand-orange/10 text-brand-orange self-start shrink-0">
                  <Clock className="w-4.5 h-4.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono tracking-wider opacity-50 uppercase">{t("contact_card_hours_title")}</span>
                  <span className="text-xs font-semibold mt-1">{t("contact_card_hours_days")}</span>
                  <span className="text-[10px] opacity-70">{t("contact_card_hours_time")}</span>
                </div>
              </div>

              {/* Phone contact */}
              <div className="flex gap-3">
                <div className="p-2.5 rounded-xl bg-brand-orange/10 text-brand-orange self-start shrink-0">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono tracking-wider opacity-50 uppercase">{t("contact_card_phone_title")}</span>
                  <a href="tel:+201210050621" className="text-xs font-semibold mt-1 hover:text-brand-orange transition-colors">
                    +20 121 005 0621
                  </a>
                  <span className="text-[10px] opacity-70">{t("contact_card_phone_subtitle")}</span>
                </div>
              </div>

              {/* Email details */}
              <div className="flex gap-3">
                <div className="p-2.5 rounded-xl bg-brand-orange/10 text-brand-orange self-start shrink-0">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono tracking-wider opacity-50 uppercase">{t("contact_card_email_title")}</span>
                  <a href="mailto:info@fastdigitalprint.co" className="text-xs font-semibold mt-1 hover:text-brand-orange transition-colors">
                    info@fastdigitalprint.co
                  </a>
                  <span className="text-[10px] opacity-70">{t("contact_card_email_subtitle")}</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
