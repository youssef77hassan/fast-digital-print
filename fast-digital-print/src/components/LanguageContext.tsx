/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "ar";

// High-fidelity translations dictionary for all headings, components, inputs, and static content
export const translations = {
  en: {
    // Nav items
    nav_home: "Home",
    nav_products: "Products",
    nav_services: "Services",
    nav_about: "About",
    nav_contact: "Contact",
    nav_login: "Pre-press Portal",
    
    // Theme
    theme_dark: "Dark Mode",
    theme_light: "Light Mode",
    lang_switch: "العربية 🇸🇦",
    
    // Search Bar
    search_placeholder: "Search cards, luxury boxes, stickers, or services...",
    search_popular: "Popular Searches:",
    search_suggest_1: "Business Cards",
    search_suggest_2: "Rigid Packaging",
    search_suggest_3: "Banners",
    search_suggest_4: "Stickers",
    search_no_results: 'No print capabilities matching "{query}" found. Try another search.',
    
    // Hero Section
    hero_badge: "State-of-the-art Digital Pre-press & Production",
    hero_title: "We craft tangible luxury for your brand identity",
    hero_subtitle: "Advanced professional print house in Egypt producing custom luxury packaging, exceptional business cards, rigid boxes, and large-format architectural signage.",
    hero_cta_primary: "Get Instant Estimate",
    hero_cta_secondary: "Explore Capabilities",
    hero_scroll: "Scroll to discover",
    
    // Products Section
    products_badge: "PRODUCT SOLUTIONS",
    products_title: "Immersive Print Capabilities",
    products_desc: "We create state-of-the-art physical brand materials that redefine tactile elegance.",
    products_section_1_title: "Professional Printing Solutions",
    products_section_1_sub: "Corporate Stationery & Luxury Business Cards",
    products_section_2_title: "Premium Packaging & Branding",
    products_section_2_sub: "Luxury Rigid Boxes & Customized Bags",
    products_section_3_title: "Indoor & Outdoor Printing",
    products_section_3_sub: "Large Scale Signage & Exhibitions Displays",
    products_section_4_title: "Premium Custom Stickers & Labels",
    products_section_4_sub: "High-Quality Vinyl, Die-Cut & Waterproof Stickers",
    products_cta: "Contact on WhatsApp",
    
    // Services Section
    services_badge: "OUR CAPABILITIES",
    services_title: "Bespoke Printing Services",
    services_desc: "Explore our state-of-the-art production lines turning elite designs into tangible masterpieces.",
    services_section_1_title: "Professional Printing Solutions",
    services_section_1_sub: "Museum-grade letterpress & gold-foil stamping • كروت عمل فاخرة",
    services_section_2_title: "Premium Packaging & Branding",
    services_section_2_sub: "Premium rigid boxes & luxury customized presentation wraps • علب هدايا فاخرة",
    services_section_3_title: "Indoor & Outdoor Printing",
    services_section_3_sub: "Heavy-duty UV-resistant exhibitions & storefront banners • بنرات دعائية",
    
    // Why Choose Us Section
    why_badge: "WHY WE EXCEL",
    why_title: "Uncompromising Quality",
    why_desc: "Every project goes through strict pre-press checks, precision spectrophotometry, and is crafted using the world's most advanced industrial plotters.",
    value_v1_title: "Express Premium Delivery",
    value_v1_desc: "Carefully packaged, rigid moisture-sealed transport, and precision delivery coordinates to ensure zero-defect material arrivals.",
    value_v2_title: "Signature Museum Quality",
    value_v2_desc: "Stringent calibration and spectrophotometry guarantee accurate delta-E colors, deep rich blacks, and spectacular crispness.",
    value_v3_title: "Next-Gen Print Tech",
    value_v3_desc: "Leveraging state-of-the-art high-micron Japanese and Swiss printheads capable of flawless gradient transitions and spot varnish finishes.",
    value_v4_title: "Master Pre-press Designers",
    value_v4_desc: "Expert digital pre-press checks on every file. We analyze bleeding, vector curves, and color ranges to assure flawless physical output.",
    value_v5_title: "Concierge VIP Support",
    value_v5_desc: "Direct elite support via WhatsApp. You discuss your file vectors directly with a printing craftsperson, not an automated chatbot.",
    
    // Testimonials
    testimonials_badge: "CLIENT VOICES",
    testimonials_title: "Trusted by Industry Leaders",
    testimonials_desc: "Hear from the brands and designers who rely on our meticulous production to define their physical presence.",
    t1_name: "Ahmed Mostafa",
    t1_role: "Advertising Agency Owner",
    t1_text: "Honestly, the print quality exceeded my expectations. The colors matched the design perfectly, and delivery was right on time.",
    t2_name: "Mohamed Sameh",
    t2_role: "Apparel Brand Owner",
    t2_text: "We printed our t-shirts and business cards here. The materials are premium and the execution is highly professional. We will definitely deal with them again.",
    t3_name: "Menna Allah Khaled",
    t3_role: "Marketing Manager",
    t3_text: "First time dealing with such a professional print shop. Extremely fast response, quick execution, and the results were better than expected.",
    t4_name: "Karim Adel",
    t4_role: "Restaurant Owner",
    t4_text: "We printed our menus and brand stickers; everything arrived in excellent quality, the service is extremely respectful, and the packaging is superb.",
    
    // About Section
    about_badge: "HERITAGE & NUMBERS",
    about_title: "Our Legacy of Precision",
    about_desc: "Tracing our path from a boutique workshop to an industry leader in luxury print production.",
    about_timeline_title: "Our Historical Milestones",
    about_stats_title: "Key Industry Metrics",
    
    timeline_1_title: "The Workshop Foundation",
    timeline_1_desc: "Established in the heart of the creative district with a single state-of-the-art flatbed printer and a drive to offer pixel-perfect luxury paper goods.",
    timeline_2_title: "Large Format Revolution",
    timeline_2_desc: "Expanded our premises to house professional industrial latex plotters, adding architectural, indoor, and weather-proof outdoor printing services.",
    timeline_3_title: "Luxury Packaging Integration",
    timeline_3_desc: "Acquired bespoke die-cutting, embossing, and rigid box production equipment, providing complete tactile brand physical identity services.",
    timeline_4_title: "The Elite Creative Era",
    timeline_4_desc: "Recognized as the primary partner for high-fashion, high-concept architecture studios and elite retail brands demanding immaculate execution.",
    
    stat_s1_label: "Years of Master Craft",
    stat_s2_label: "Premium Corporate Clients",
    stat_s3_label: "Successful Deliveries",
    stat_s4_label: "Industrial Print Systems",
    
    // Contact Section
    contact_badge: "SECURE PORTAL",
    contact_title: "Initiate Your Production",
    contact_desc: "Our design and engineering pre-press desk is ready to review your vector files, material specs, and supply customized quotes.",
    contact_name: "Full Name",
    contact_email: "Email Address",
    contact_message: "Message & Technical Specs (Size, Quantity, Paper Weight)",
    contact_submit: "Submit Request via WhatsApp",
    contact_loading: "Preparing inquiry...",
    contact_direct_title: "Direct Ingress",
    contact_address: "Alexandria, Egypt",
    contact_phone: "Direct Line",
    contact_email_label: "Official Email",
    contact_hours: "Operational Hours",
    contact_hours_value: "Saturday - Thursday (10:00 AM - 10:00 PM)",
    contact_form_badge: "FAST ESTIMATE FORM",
    contact_placeholder_name: "e.g. Laila Al-Jamil",
    contact_placeholder_email: "name@company.com",
    contact_label_category: "INTERESTED PRINT CATEGORY",
    contact_placeholder_message: "Describe bleed parameters, sizing formats, or requested physical paper swatches...",
    contact_card_address_title: "MAIN WORKSHOP",
    contact_card_address_value: "5th St. from 45th St., Al-Asafra",
    contact_card_address_city: "Alexandria, Egypt",
    contact_card_hours_title: "PRODUCTION HOURS",
    contact_card_hours_days: "Saturday – Thursday",
    contact_card_hours_time: "10:00 AM – 10:00 PM (GMT+2)",
    contact_card_phone_title: "VIP VOICE LINES",
    contact_card_phone_subtitle: "Pre-press Call Desk",
    contact_card_email_title: "DIGITAL VECTOR BOX",
    contact_card_email_subtitle: "For AI / PDF Vector files",
    cat_cotton_cards: "Bespoke Cotton Business Cards",
    cat_rigid_pkg: "Rigid Magnetic Packaging",
    cat_banners: "Exhibition Banners & Roll-Ups",
    cat_canvas: "Fine Art Canvas Prints",
    cat_stickers: "Die-Cut Brand Stickers",
    cat_signs: "Storefront Signs & Acrylics",
    
    // Footer
    footer_desc: "Professional print house specialized in luxury rigid packaging, high-end business cards, and wide-format prints with unmatched precision and artistic beauty.",
    footer_nav: "Direct Navigation",
    footer_rights: "All rights reserved © 2026 FAST DIGITAL PRINT. Crafted with absolute precision.",
    
    // Login Popup
    login_title: "Pre-press Concierge Portal",
    login_subtitle: "Access your secure portal to upload production vector assets (AI, PDF) directly to your assigned pre-press engineer.",
    login_user: "Username / Client ID",
    login_pass: "Access Token / Password",
    login_btn: "Authorize Access",
    login_close: "Close"
  },
  ar: {
    // Nav items
    nav_home: "الرئيسية",
    nav_products: "المنتجات",
    nav_services: "الخدمات",
    nav_about: "من نحن",
    nav_contact: "اتصل بنا",
    nav_login: "بوابة ما قبل الطباعة",
    
    // Theme
    theme_dark: "الوضع الداكن",
    theme_light: "الوضع المضيء",
    lang_switch: "English 🇺🇸",
    
    // Search Bar
    search_placeholder: "ابحث عن كروت، علب فاخرة، ستيكرات، بنرات، أو خدمات...",
    search_popular: "اقتراحات شائعة:",
    search_suggest_1: "كروت عمل",
    search_suggest_2: "علب فاخرة",
    search_suggest_3: "بنرات إعلانية",
    search_suggest_4: "ستيكرات",
    search_no_results: 'لم يتم العثور على قدرات طباعة تطابق "{query}". جرب كلمة بحث أخرى.',
    
    // Hero Section
    hero_badge: "أحدث الحلول الرقمية لما قبل الطباعة والإنتاج",
    hero_title: "نصنع الفخامة الملموسة لهوية علامتك التجارية",
    hero_subtitle: "المطبعة الاحترافية الرائدة في مصر لإنتاج التغليف الفاخر المخصص، كروت العمل الاستثنائية، العلب الصلبة، واللوحات الإعلانية الضخمة للمؤسسات.",
    hero_cta_primary: "احصل على عرض سعر فوري",
    hero_cta_secondary: "استكشف قدراتنا",
    hero_scroll: "مرر للأسفل للاستكشاف",
    
    // Products Section
    products_badge: "حلول المنتجات الفاخرة",
    products_title: "قدرات طباعية غامرة ومميزة",
    products_desc: "نبتكر مواد تجسد روعة علامتك التجارية بلمسات ملموسة تعيد تعريف مفهوم الأناقة الفاخرة والتميز.",
    products_section_1_title: "حلول الطباعة الاحترافية",
    products_section_1_sub: "مطبوعات الشركات الرسمية وكروت العمل الفاخرة",
    products_section_2_title: "التغليف والهوية الفاخرة",
    products_section_2_sub: "علب الهدايا الصلبة الفاخرة والحقائب المخصصة لعلامتك",
    products_section_3_title: "المطبوعات الداخلية والخارجية",
    products_section_3_sub: "اللوحات الإعلانية الكبيرة وشاشات تجهيز المعارض الفخمة",
    products_section_4_title: "ملصقات واستيكرات عالية الجودة",
    products_section_4_sub: "استيكرات فينيل مخصصة، مقاومة للماء ومقصوصة بدقة فائقة لعلامتك",
    products_cta: "تواصل معنا عبر واتساب",
    
    // Services Section
    services_badge: "خطوط إنتاجنا",
    services_title: "خدمات طباعية فاخرة مخصصة",
    services_desc: "استكشف خطوط إنتاجنا الحديثة التي تحول أرقى التصاميم الفنية الإبداعية إلى واقع ملموس فائق الجودة.",
    services_section_1_title: "حلول الطباعة الاحترافية والفاخرة",
    services_section_1_sub: "كروت عمل فاخرة بورق قطني فاخر وحفر مذهب مذهل",
    services_section_2_title: "التغليف والهوية البصرية الراقية",
    services_section_2_sub: "علب صلبة فاخرة وأغلفة هدايا مصممة خصيصاً لهوية النخبة",
    services_section_3_title: "المطبوعات الداخلية والخارجية الضخمة",
    services_section_3_sub: "لوحات إعلانية ومجسمات مقاومة للأشعة فوق البنفسجية وتجهيز متكامل للمعارض",
    
    // Why Choose Us Section
    why_badge: "لماذا نتميز عن غيرنا",
    why_title: "التزام راسخ بالجودة المطلقة والكمال",
    why_desc: "يمر كل مشروع بفحص فني دقيق لما قبل الطباعة، ومعايرة ألوان طيفية فائقة، ويصنع بأحدث الطابعات الصناعية اليابانية والسويسرية.",
    value_v1_title: "شحن وتوصيل فائق السرعة والأمان",
    value_v1_desc: "تغليف متين ومقاوم للرطوبة لحماية المطبوعات مع شحن دقيق لضمان وصولها بحالتها المثالية دون أي عيوب.",
    value_v2_title: "جودة فنية تضاهي المتاحف",
    value_v2_desc: "معايرة دقيقة وضبط طيفي للألوان لضمان دقة كاملة، درجات أسود عميقة، ونقاء منقطع النظير لكل التفاصيل.",
    value_v3_title: "تقنيات طباعة جيل جديد فائقة",
    value_v3_desc: "نعتمد على أحدث رؤوس الطباعة اليابانية والسويسرية عالية الدقة لتقديم تدرجات ألوان انسيابية وتشطيبات ورنيش بارزة.",
    value_v4_title: "خبراء ومهندسو ما قبل الطباعة",
    value_v4_desc: "فحص فني دقيق لكل ملف. نحلل مساحات النزيف والخطوط المتجهية ونطاقات الألوان لضمان مخرجات مادية خالية من الأخطاء.",
    value_v5_title: "دعم VIP مباشر وسريع",
    value_v5_desc: "تواصل مباشر مع أحد مهندسي وخبراء الطباعة عبر الواتساب لمناقشة ملفاتك الفنية فوراً، وليس مع روبوتات رد آلي.",
    
    // Testimonials
    testimonials_badge: "آراء شركاء النجاح",
    testimonials_title: "موضع ثقة كبرى الشركات والمصممين",
    testimonials_desc: "آراء عملائنا المميزين في مصر والذين يعتمدون على دقة وجودة إنتاجنا لتقديم حضورهم البصري بأعلى مستوى.",
    t1_name: "أحمد مصطفى",
    t1_role: "صاحب شركة دعاية وإعلان",
    t1_text: "بصراحة الجودة فاقت توقعاتي، والألوان طلعت مطابقة للتصميم بالظبط، والتسليم كان في الموعد.",
    t2_name: "محمد سامح",
    t2_role: "صاحب براند ملابس",
    t2_text: "طبعنا تيشيرتات وكروت شخصية، والخامات كانت ممتازة والشغل طلع احترافي جدًا. أكيد هنتعامل معاهم تاني.",
    t3_name: "منة الله خالد",
    t3_role: "مديرة تسويق",
    t3_text: "أول مرة أتعامل مع مطبعة بالاحترافية دي. سرعة في الرد، تنفيذ سريع، والنتيجة كانت أفضل من المتوقع.",
    t4_name: "كريم عادل",
    t4_role: "صاحب مطعم",
    t4_text: "طبعنا المنيوهات والاستيكرات وكل حاجة وصلت بجودة ممتازة، والتعامل محترم جدًا والتغليف رائع.",
    
    // About Section
    about_badge: "تراثنا وأرقامنا القياسية",
    about_title: "قصتنا ورحلتنا في الإتقان والتميز",
    about_desc: "نطور باستمرار قدراتنا وتجهيزاتنا لنظل دائماً الرواد في تقديم الحلول الطباعية الفاخرة للعلامات الراقية.",
    about_timeline_title: "أبرز محطات مسيرتنا التاريخية",
    about_stats_title: "مؤشرات وأرقام الإنجاز",
    
    timeline_1_title: "تأسيس الورشة الإبداعية الأولى",
    timeline_1_desc: "تأسيس المطبعة في قلب المنطقة الإبداعية بطابعة مسطحة حديثة وشغف كبير لتقديم منتجات ورقية فاخرة بدقة بكسل مثالية.",
    timeline_2_title: "ثورة الطباعة العريضة واللوحات الإعلانية",
    timeline_2_desc: "توسيع منشآتنا لتشمل طابعات صناعية ضخمة، وإضافة خدمات اللوحات الإعلانية والمطبوعات الخارجية والداخلية المقاومة للعوامل الجوية.",
    timeline_3_title: "إدخال حلول التغليف والعلب الصلبة الفاخرة",
    timeline_3_desc: "امتلاك معدات متطورة لقص القوالب، كبس الحفر، وإنتاج العلب الصلبة لتقديم خدمات هوية مادية متكاملة للعلامات التجارية.",
    timeline_4_title: "عصر التميز وشريك النخبة والمصممين",
    timeline_4_desc: "اعتمادنا كشريك طباعة رئيسي لدور الأزياء العالمية، استوديوهات العمارة الراقية، وعلامات التجزئة الفاخرة التي تبحث عن الجودة الفائقة.",
    
    stat_s1_label: "سنوات من الاحتراف والتميز",
    stat_s2_label: "عملاء من كبرى الشركات والمؤسسات",
    stat_s3_label: "مطبوعات ومنتجات تم تسليمها بنجاح",
    stat_s4_label: "خطوط وآلات طباعة صناعية فائقة",
    
    // Contact Section
    contact_badge: "بوابة تقديم طلبات المطبوعات",
    contact_title: "ابدأ مشروعك الطباعي الفاخر معنا",
    contact_desc: "سيقوم فريق ما قبل الطباعة والتصميم بمراجعة ملفاتك المتجهية ومواصفات الخامات وإعداد تسعير مخصص لطلبك فوراً.",
    contact_name: "الاسم الكامل للمسؤول",
    contact_email: "البريد الإلكتروني للشركة",
    contact_message: "تفاصيل المطبوعات الفنية (المقاس، الكمية، نوع الخامات والورق)",
    contact_submit: "إرسال تفاصيل الطلب عبر واتساب",
    contact_loading: "جاري تحضير الرسالة الفنية والمستندات...",
    contact_direct_title: "قنوات الاتصال المباشرة",
    contact_address: "الإسكندرية، جمهورية مصر العربية",
    contact_phone: "الخط المباشر",
    contact_email_label: "البريد الإلكتروني الرسمي",
    contact_hours: "مواعيد وساعات العمل",
    contact_hours_value: "السبت - الخميس (١٠:٠٠ صباحاً - ١٠:٠٠ مساءً)",
    contact_form_badge: "طلب عرض أسعار سريع",
    contact_placeholder_name: "مثال: ليلى الجميل",
    contact_placeholder_email: "name@company.com",
    contact_label_category: "قسم المطبوعات المطلوبة",
    contact_placeholder_message: "صف متمتطلبات التصميم الفنية، المقاسات، أوزان الورق، أو عينات الأوراق المطلوبة لتجربتها...",
    contact_card_address_title: "المقر والمصنع الرئيسي",
    contact_card_address_value: "شارع 5 من شارع 45 العصافرة",
    contact_card_address_city: "الإسكندرية، مصر",
    contact_card_hours_title: "مواعيد وساعات العمل والإنتاج",
    contact_card_hours_days: "السبت – الخميس",
    contact_card_hours_time: "١٠:٠٠ صباحاً – ١٠:٠٠ مساءً (GMT+2)",
    contact_card_phone_title: "الخطوط الهاتفية المباشرة VIP",
    contact_card_phone_subtitle: "مكتب مبيعات ما قبل الطباعة",
    contact_card_email_title: "صندوق ملفات الفيكتور الرقمية",
    contact_card_email_subtitle: "لإرسال ملفات التصميم بصيغة AI / PDF",
    cat_cotton_cards: "كروت عمل قطنية فاخرة مخصصة",
    cat_rigid_pkg: "علب صلبة فاخرة بقفل مغناطيسي",
    cat_banners: "بنرات المعارض واللوحات الدعائية",
    cat_canvas: "لوحات الكانفاس الفنية الفاخرة",
    cat_stickers: "ملصقات واستيكرات مخصصة مقصوصة",
    cat_signs: "لوحات المحلات التجارية والأكريليك",
    
    // Footer
    footer_desc: "مطبعة احترافية متخصصة في تقديم حلول التغليف الفاخر، كروت العمل الاستثنائية، والمطبوعات العريضة بأعلى مستويات الدقة والجمال الفني.",
    footer_nav: "روابط سريعة",
    footer_rights: "جميع الحقوق محفوظة © 2026 فاست ديجيتال برينت. تم التطوير بأعلى معايير الدقة السويسرية.",
    
    // Login Popup
    login_title: "بوابة عملاء ومهندسي ما قبل الطباعة",
    login_subtitle: "قم بتسجيل الدخول بأمان لرفع أصول الإنتاج المتجهية (AI, PDF) مباشرة لمهندس ما قبل الطباعة المسؤول عن طلبك.",
    login_user: "اسم المستخدم / رقم العميل الخاص بك",
    login_pass: "رمز المرور الخاص بالبوابة",
    login_btn: "تفويض الدخول الآمن",
    login_close: "إغلاق"
  }
};

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations["en"]) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // 1. Check local storage
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language");
      if (saved === "en" || saved === "ar") {
        return saved as Language;
      }
      
      // 2. Check browser language
      const browserLang = navigator.language || (navigator as any).userLanguage || "";
      if (browserLang.toLowerCase().startsWith("ar")) {
        return "ar";
      }
    }
    return "en"; // Default
  });

  const [isTranslating, setIsTranslating] = useState(false);

  // Smooth direction & document class management
  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute("lang", language);
    if (language === "ar") {
      root.setAttribute("dir", "rtl");
      root.classList.add("rtl");
    } else {
      root.setAttribute("dir", "ltr");
      root.classList.remove("rtl");
    }
    localStorage.setItem("language", language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    if (lang === language) return;
    
    // Smooth 300ms transition effect on the body
    setIsTranslating(true);
    
    const body = document.body;
    body.style.transition = "opacity 300ms ease-in-out";
    body.style.opacity = "0.05";
    
    setTimeout(() => {
      setLanguageState(lang);
      body.style.opacity = "1";
      setTimeout(() => {
        setIsTranslating(false);
      }, 150);
    }, 300);
  };

  // Translation helper function
  const t = (key: keyof typeof translations["en"]): string => {
    const section = translations[language];
    return section[key] || translations["en"][key] || String(key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
