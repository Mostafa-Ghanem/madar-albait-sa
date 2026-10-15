# التحويل والربح

## طلب الفني (Lead Gen)
- يظهر تلقائيًا في نهاية مقالات أقسام: الأقمار، أجهزة الاستقبال، القنوات.
- للتحكم يدويًا في مقال: `leadCta: true` أو `false`.
- `city:` يحدد المدينة المختارة مسبقًا في الفورم (riyadh, jeddah, dammam, ...).
- الحقول: الاسم + الجوال + المدينة + الحي ← رسالة واتساب جاهزة تتضمن عنوان المقال.
- لا يظهر المكوّن إطلاقًا حتى يُضبط `PUBLIC_WHATSAPP_NUMBER`.

## منتجات الأفلييت
حتى 3 منتجات لكل مقال في الـ frontmatter (أو من Pages CMS):

```yaml
affiliate: true
products:
  - name: اسم المنتج
    note: سطر واحد يوضح لماذا نرشحه
    url: https://www.amazon.sa/dp/XXXX?tag=YOUR-TAG
    store: amazon # amazon | noon | jarir | extra | other
```

الروابط تحمل `rel="sponsored nofollow"` ويظهر تحت الصندوق إفصاح العمولة.

## التتبع (GTM / GA4)
كل الأحداث تُرسل إلى `dataLayer`:

| الحدث | متى | المتغيرات |
| --- | --- | --- |
| `technician_lead` | إرسال فورم الفني | `lead_city`, `lead_district`, `article_slug`, `article_category` |
| `affiliate_click` | ضغط رابط منتج | `store`, `product`, `slug`, `link_url`, `page_path` |

أي عنصر جديد يحمل `data-track="event_name"` يُتتبع تلقائيًا مع باقي خصائص `data-*`.
في GTM: أنشئ Custom Event trigger لكل حدث واربطه بوسم GA4 Event، وعلّم `technician_lead` كـ Key Event.

## أدسنس
معطّل افتراضيًا. فعّله بـ `PUBLIC_ADSENSE_ENABLED=true` مع `PUBLIC_ADSENSE_CLIENT` و`PUBLIC_ADSENSE_SLOT_ARTICLE` بعد تجاوز ~10,000 زيارة شهريًا.

## Search Console
ضع قيمة رمز التحقق في `PUBLIC_GSC_VERIFICATION`.

كل المتغيرات في `.example.env`، وتُضبط في Cloudflare Pages ← Settings ← Environment variables.
