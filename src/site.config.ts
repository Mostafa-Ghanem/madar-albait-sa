import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  url: "https://sa.7kayatinfo.com/",
  title: "مدار البيت",
  shortTitle: "مدار البيت",
  author: "فريق مدار البيت",
  description: "دليل سعودي عملي وموثوق للأقمار الصناعية والقنوات وأجهزة الاستقبال والشاشات ومنصات المشاهدة المنزلية.",
  lang: "ar-SA",
  ogLocale: "ar_SA",
  showLogo: true,
  date: { options: { day: "numeric", month: "long", year: "numeric" } },
};

export const menuLinks = [
  { path: "/", title: "الرئيسية" },
  { path: "/categories/satellites/", title: "الأقمار" },
  { path: "/categories/channels/", title: "القنوات" },
  { path: "/categories/receivers/", title: "أجهزة الاستقبال" },
  { path: "/categories/streaming/", title: "المشاهدة الذكية" },
  { path: "/posts/", title: "كل الأدلة" },
];

export const categoryMeta: Record<string, { title: string; description: string; icon: string }> = {
  satellites: { title: "الأقمار والاستقبال", description: "أدلة استقبال الأقمار في مدن المملكة وضبط الطبق وقراءة خرائط التغطية.", icon: "◉" },
  channels: { title: "القنوات والترددات", description: "ترددات من مصادر رسمية وطريقة البحث والتحديث والتحقق من انتقال القنوات.", icon: "▣" },
  receivers: { title: "أجهزة الاستقبال", description: "اختيار الرسيفر وضبط LNB وحل مشكلات الإشارة والتقطيع والتحديث.", icon: "⌁" },
  streaming: { title: "الشاشات والمشاهدة الذكية", description: "إعداد الشاشات وأجهزة البث وجودة الإنترنت وحلول المشاهدة عبر التطبيقات.", icon: "▶" },
};

