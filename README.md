# مدار البيت

موقع محتوى سعودي متخصص في الأقمار الصناعية والقنوات وأجهزة الاستقبال والمشاهدة الذكية.

## التقنية

- Astro + TypeScript
- Astro Content Collections
- Pages CMS
- Pagefind
- Cloudflare Pages

## التشغيل المحلي

```bash
pnpm install
pnpm dev
```

## الفحص والبناء

```bash
pnpm astro check
pnpm build
```

## التحرير

المقالات موجودة داخل `content/posts`. إعداد Pages CMS موجود في `.pages.yml`، وكل مقال يحتوي على الكاتب والمراجع وحالة التحقق والمصادر وتواريخ النشر والتحديث.

## الفروع

- `main`: النسخة النهائية بعد الاعتماد.
- `develop`: نسخة المعاينة والمراجعة.

المشروع مبني فوق Astro Cactus المرخص برخصة MIT، مع واجهة وبنية تحريرية مخصصة بالكامل.
