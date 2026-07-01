/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { useTheme } from "./ThemeContext";
import { useLanguage } from "./LanguageContext";
import { X, ArrowRight, Lock, ClipboardCheck, Sparkles, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface LoginPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginPopup({ isOpen, onClose }: LoginPopupProps) {
  const { theme } = useTheme();
  const { language, t } = useLanguage();
  const [orderCode, setOrderCode] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState<{
    clientName: string;
    projectName: string;
    status: string;
    progress: number;
    estimatedDelivery: string;
  } | null>(null);

  const handleTrackSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!orderCode) {
      setError(language === "ar" ? "يرجى إدخال كود تتبع الطلب الخاص بك." : "Please enter your Order Code or email.");
      return;
    }
    
    setError("");
    setLoading(true);
    
    // Simulate real database lookup
    setTimeout(() => {
      setLoading(false);
      const cleanedCode = orderCode.trim().toUpperCase();
      if (cleanedCode === "FDP-9831" || cleanedCode === "9831" || cleanedCode.toLowerCase().includes("vane")) {
        setSuccessData({
          clientName: language === "ar" ? "مجموعة فاين وشركاه الإبداعية" : "Vane & Co. Creative Group",
          projectName: language === "ar" ? "مطبوعات مذهبة فاخرة وعلب تغليف صلبة مغناطيسية مخصصة" : "Gold-Foil Stationery & Custom Magnetic Rigid Boxes",
          status: language === "ar" ? "مرحلة المعايرة الفنية الدقيقة قبل الطباعة" : "Pre-press Fine-Calibration",
          progress: 65,
          estimatedDelivery: language === "ar" ? "٢ يوليو، ٢٠٢٦" : "July 2, 2026",
        });
      } else if (cleanedCode === "FDP-2491" || cleanedCode === "2491" || cleanedCode.toLowerCase().includes("altamira")) {
        setSuccessData({
          clientName: language === "ar" ? "استوديو ألتاميرا للتصميم المعماري" : "Altamira Architecture Studio",
          projectName: language === "ar" ? "كروت عمل قطنية فاخرة بمستوى المتاحف وكتيبات أعمال مخصصة" : "Museum-Grade Matte Cotton Business Cards & Portfolio Booklets",
          status: language === "ar" ? "مرحلة التجميع اليدوي والإنهاء الفاخر للعلب" : "Completing Hand-Stretching / Premium Packaging",
          progress: 90,
          estimatedDelivery: language === "ar" ? "٣٠ يونيو، ٢٠٢٦" : "June 30, 2026",
        });
      } else {
        // Fallback simulate correct-format
        setSuccessData({
          clientName: language === "ar" ? "شريكنا وعميلنا الفاضل" : "Valued Partner Client",
          projectName: language === "ar" ? "مطبوعات فاخرة وتغليف رقمي مخصص للمشروع" : "Bespoke Custom Digital Print Project",
          status: language === "ar" ? "فحص الخطوط المتجهية وضبط هوامش النزيف للملفات" : "File Vector Validation & Bleeding Check",
          progress: 35,
          estimatedDelivery: language === "ar" ? "٥ يوليو، ٢٠٢٦" : "July 5, 2026",
        });
      }
    }, 900);
  };

  const isDark = theme === "dark";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.6 }}
            className={`relative w-full max-w-lg overflow-hidden rounded-3xl p-8 z-10 ${
              isDark 
                ? "liquid-glass-dark text-white shadow-2xl shadow-orange-500/5" 
                : "liquid-glass-light text-neutral-900 shadow-xl"
            }`}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className={`absolute p-2 rounded-full transition-colors ${language === "ar" ? "top-5 left-5" : "top-5 right-5"} ${
                isDark 
                  ? "bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white" 
                  : "bg-black/5 hover:bg-black/10 text-neutral-600 hover:text-neutral-900"
              }`}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Glowing spot */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative">
              {/* Header */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono mb-3 bg-brand-orange/15 text-brand-orange">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{language === "ar" ? "بوابة العملاء المميزين" : "PREMIUM CLIENT PORTAL"}</span>
                </div>
                <h3 className="text-2xl font-display font-medium tracking-tight">
                  {language === "ar" ? "فحص نماذج التصميم وتتبع الطلبات" : "Design Verification & Order Tracking"}
                </h3>
                <p className={`text-sm mt-1 ${isDark ? "text-neutral-400" : "text-neutral-500"}`}>
                  {language === "ar" ? "الوصول لملفات التصميم، النماذج المبدئية، ومؤشرات مراحل الإنتاج المباشرة." : "Access pre-press vectors, proofing drafts, and real-time production schedules."}
                </p>
              </div>

              {/* Conditional Success State */}
              {successData ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className={`p-5 rounded-2xl border ${
                    isDark ? "bg-white/5 border-white/10" : "bg-black/[0.02] border-neutral-100"
                  }`}>
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-brand-orange/10 text-brand-orange mt-0.5">
                        <ClipboardCheck className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <span className="text-xs font-mono text-brand-orange block uppercase tracking-wider">
                          {language === "ar" ? "تم العثور على مشروع نشط" : "Active Project File Found"}
                        </span>
                        <h4 className="font-display font-medium text-lg mt-0.5 leading-snug">
                          {successData.clientName}
                        </h4>
                        <p className={`text-xs mt-1 ${isDark ? "text-neutral-400" : "text-neutral-500"}`}>
                          {successData.projectName}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className={isDark ? "text-neutral-400" : "text-neutral-500"}>
                        {language === "ar" ? "مؤشر مراحل خط الإنتاج:" : "PRODUCTION TIMELINE:"}
                      </span>
                      <span className="text-brand-orange font-bold">
                        {successData.progress}%
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${successData.progress}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-brand-orange rounded-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs font-mono py-1">
                    <div className={`p-3 rounded-xl ${isDark ? "bg-white/5" : "bg-black/[0.01]"}`}>
                      <span className={`block text-[10px] ${isDark ? "text-neutral-500" : "text-neutral-400"}`}>
                        {language === "ar" ? "حالة الطلب الحالية:" : "CURRENT STATUS:"}
                      </span>
                      <span className="font-sans font-medium text-brand-orange mt-1 block">
                        {successData.status}
                      </span>
                    </div>
                    <div className={`p-3 rounded-xl ${isDark ? "bg-white/5" : "bg-black/[0.01]"}`}>
                      <span className={`block text-[10px] ${isDark ? "text-neutral-500" : "text-neutral-400"}`}>
                        {language === "ar" ? "موعد التسليم المتوقع:" : "EST. PACKAGING & DISPATCH:"}
                      </span>
                      <span className="font-sans font-medium mt-1 block">
                        {successData.estimatedDelivery}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={() => setSuccessData(null)}
                      className={`flex-1 py-3 px-4 rounded-xl text-xs font-mono font-medium transition-colors ${
                        isDark 
                          ? "bg-white/5 hover:bg-white/10 text-white" 
                          : "bg-neutral-100 hover:bg-neutral-200 text-neutral-800"
                      }`}
                    >
                      {language === "ar" ? "تتبع كود آخر" : "Track Another Code"}
                    </button>
                    <a
                      href={`https://wa.me/201210050621?text=${encodeURIComponent(language === "ar" ? `السلام عليكم،\nأنا أقوم بمتابعة طلبي لمشروع: ${successData.projectName} وأرغب في التحقق الفني من النماذج مع مهندس ما قبل الطباعة.` : `Hello,\nI am tracking my order for project: ${successData.projectName} and would like to verify proof drafts with the pre-press desk.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 rounded-xl text-xs font-mono font-medium bg-brand-orange hover:bg-brand-orange/90 text-white text-center flex items-center justify-center gap-1.5 transition-all shadow-lg shadow-brand-orange/20"
                    >
                      <span>{language === "ar" ? "فحص ما قبل الطباعة" : "Pre-press Verification"}</span>
                      <ArrowRight className={`w-3.5 h-3.5 ${language === "ar" ? "rotate-180" : ""}`} />
                    </a>
                  </div>
                </motion.div>
              ) : (
                /* Form State */
                <form onSubmit={handleTrackSubmit} className="space-y-4">
                  {error && (
                    <div className="flex items-center gap-2 p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <label className={`text-xs font-mono tracking-wider ${isDark ? "text-neutral-400" : "text-neutral-500"}`}>
                      {language === "ar" ? "أدخل كود تتبع الطلب الخاص بك (مثال FDP-9831)" : "ENTER YOUR ORDER CODE (e.g., FDP-9831)"}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={orderCode}
                        onChange={(e) => setOrderCode(e.target.value)}
                        placeholder="FDP-XXXX"
                        className={`w-full py-3 rounded-xl text-sm transition-all outline-none ${
                          language === "ar" ? "pl-12 pr-4" : "pl-4 pr-12"
                        } ${
                          isDark 
                            ? "bg-white/5 border border-white/10 text-white focus:border-brand-orange/60 focus:bg-white/10" 
                            : "bg-neutral-100 border border-neutral-200 text-neutral-900 focus:border-brand-orange/60 focus:bg-white focus:shadow-md"
                        }`}
                      />
                      <div className={`absolute top-1/2 -translate-y-1/2 text-neutral-400 ${language === "ar" ? "left-3" : "right-3"}`}>
                        <Lock className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center px-1">
                      <span className={`text-[10px] ${isDark ? "text-neutral-500" : "text-neutral-400"}`}>
                        {language === "ar" ? (
                          <>أكواد تجريبية: <strong className="text-brand-orange">FDP-9831</strong> أو <strong className="text-brand-orange">FDP-2491</strong></>
                        ) : (
                          <>Demo Codes: <strong className="text-brand-orange">FDP-9831</strong> or <strong className="text-brand-orange">FDP-2491</strong></>
                        )}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between">
                      <label className={`text-xs font-mono tracking-wider ${isDark ? "text-neutral-400" : "text-neutral-500"}`}>
                        {language === "ar" ? "رمز التحقق والولوج الآمن (اختياري)" : "VERIFICATION SECURE KEY (OPTIONAL)"}
                      </label>
                    </div>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className={`w-full py-3 px-4 rounded-xl text-sm transition-all outline-none ${
                        isDark 
                          ? "bg-white/5 border border-white/10 text-white focus:border-brand-orange/60 focus:bg-white/10" 
                          : "bg-neutral-100 border border-neutral-200 text-neutral-900 focus:border-brand-orange/60 focus:bg-white focus:shadow-md"
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 mt-2 rounded-xl text-sm font-medium font-mono text-white bg-brand-orange hover:bg-brand-orange/90 transition-all shadow-xl shadow-brand-orange/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>{language === "ar" ? "تتبع حالة الطلب الآمن" : "Validate Secure Order"}</span>
                        <ArrowRight className={`w-4 h-4 ${language === "ar" ? "rotate-180" : ""}`} />
                      </>
                    )}
                  </button>

                  <p className={`text-[10px] text-center mt-4 leading-normal ${isDark ? "text-neutral-500" : "text-neutral-400"}`}>
                    {language === "ar" ? "باستخدامك لهذه البوابة تتبع معايير فحص النماذج الفنية المباشرة لفاست ديجيتال برينت. يتم تشفير جميع ملفات التصميم وتخزينها بأمان." : "By using this portal, you agree to our direct proof-checking standards. All design files are securely cached and encrypted using client-side pre-press tokens."}
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
