/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Search, X, Sparkles, CornerDownLeft } from "lucide-react";
import { useTheme } from "./ThemeContext";
import { useLanguage } from "./LanguageContext";
import { motion, AnimatePresence } from "motion/react";

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  suggestions?: string[];
  onSelectSuggestion?: (sug: string) => void;
}

export function SearchBar({
  value,
  onChange,
  placeholder,
  suggestions,
  onSelectSuggestion,
}: SearchBarProps) {
  const { theme } = useTheme();
  const { language, t } = useLanguage();

  const isDark = theme === "dark";

  const resolvedPlaceholder = placeholder || t("search_placeholder");
  const resolvedSuggestions = suggestions || (language === "ar"
    ? ["كروت شخصية", "علب فاخرة", "رول اب", "لوحات كانفاس", "ملصقات ستيكر"]
    : ["Business Cards", "Rigid Packaging", "Roll-Up Stand", "Canvas Prints", "Sticker Decals"]);

  return (
    <div className="relative w-full max-w-xl mx-auto z-30">
      {/* Search Input Box */}
      <div
        className="relative flex items-center rounded-2xl transition-all duration-300"
        style={{
          background: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(22px)",
          border: isDark ? "1px solid rgba(255, 255, 255, 0.12)" : "1px solid rgba(0, 0, 0, 0.08)",
          boxShadow: isDark
            ? "0 4px 20px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)"
            : "0 4px 20px rgba(0, 0, 0, 0.02), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
        }}
      >
        <div className="pl-4 pr-4 text-brand-orange shrink-0">
          <Search className="w-4.5 h-4.5" />
        </div>

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={resolvedPlaceholder}
          className={`w-full py-4 px-3 text-sm bg-transparent outline-none ${
            isDark ? "text-white placeholder-neutral-500" : "text-neutral-900 placeholder-neutral-400"
          }`}
        />

        {value ? (
          <button
            onClick={() => onChange("")}
            className={`p-2 mr-2 ml-2 rounded-full transition-colors cursor-pointer hover:bg-neutral-500/10 ${
              isDark ? "text-neutral-400 hover:text-white" : "text-neutral-500 hover:text-neutral-900"
            }`}
          >
            <X className="w-4 h-4" />
          </button>
        ) : (
          <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 mx-3 rounded-md bg-neutral-200/50 dark:bg-white/10 text-[10px] font-mono opacity-50 select-none">
            <span>{language === "ar" ? "تصفية" : "Filter"}</span>
            <CornerDownLeft className="w-2.5 h-2.5" />
          </div>
        )}
      </div>

      {/* Suggestion Chips */}
      <AnimatePresence>
        {!value && resolvedSuggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex flex-wrap gap-2 justify-center mt-3.5"
          >
            <span className={`text-[10px] font-mono flex items-center gap-1 self-center ${isDark ? "text-neutral-500" : "text-neutral-400"}`}>
              <Sparkles className="w-3 h-3 text-brand-orange" />
              <span>{language === "ar" ? "عمليات بحث شائعة:" : "POPULAR QUERIES:"}</span>
            </span>
            {resolvedSuggestions.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => onSelectSuggestion && onSelectSuggestion(suggestion)}
                className={`px-3 py-1 rounded-full text-xs font-mono transition-all duration-300 border cursor-pointer hover:scale-105 active:scale-95 ${
                  isDark
                    ? "bg-white/5 border-white/10 text-neutral-300 hover:border-brand-orange/40 hover:text-white hover:bg-white/10"
                    : "bg-white border-neutral-200 text-neutral-600 hover:border-brand-orange/40 hover:text-neutral-900 hover:bg-neutral-50"
                }`}
              >
                {suggestion}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
