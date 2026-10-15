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


// أرقام وروابط التحويل تُقرأ من متغيرات البيئة (انظر .example.env) حتى لا تُكتب في الكود.
const env = import.meta.env;

export const cityMeta: Record<string, string> = {
  riyadh: "الرياض",
  jeddah: "جدة",
  makkah: "مكة المكرمة",
  madinah: "المدينة المنورة",
  dammam: "الدمام",
  khobar: "الخبر",
  qassim: "القصيم",
  abha: "أبها وخميس مشيط",
  tabuk: "تبوك",
  hail: "حائل",
  other: "مدينة أخرى",
};

export const monetization = {
  // رقم واتساب دولي بدون + أو أصفار بادئة، مثل 9665XXXXXXXX. إذا كان فارغًا لا يظهر مكوّن طلب الفني.
  whatsappNumber: (env.PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, ""),
  // الأقسام التي يظهر فيها طلب الفني تلقائيًا ما لم يُحدَّد leadCta في المقال.
  leadCategories: ["satellites", "receivers", "channels"],
  gtmId: env.PUBLIC_GTM_ID ?? "",
  gscVerification: env.PUBLIC_GSC_VERIFICATION ?? "",
  adsenseClient: env.PUBLIC_ADSENSE_CLIENT ?? "",
  // أدسنس معطّل افتراضيًا حتى يتجاوز الموقع ~10,000 زيارة شهريًا.
  adsenseEnabled: env.PUBLIC_ADSENSE_ENABLED === "true",
};
