export const authors = {
  "mostafa-ghanem": {
    name: "مصطفى غانم",
    role: "رئيس التحرير وتطوير المنتج",
    bio: "يتولى تخطيط المحتوى وتجربة المستخدم ومراجعة بنية الأدلة ووضوحها قبل النشر.",
    initials: "مغ",
  },
  "gamal-abdelaziz": {
    name: "جمال عبد العزيز",
    role: "مراجع تقني للأقمار والاستقبال",
    bio: "يراجع خطوات الاستقبال والترددات المتغيرة ويطابقها مع الاختبارات العملية والمصادر الرسمية المتاحة.",
    initials: "جع",
  },
} as const;

export type AuthorSlug = keyof typeof authors;
export function getAuthor(slug: string) {
  return authors[slug as AuthorSlug] ?? authors["mostafa-ghanem"];
}
