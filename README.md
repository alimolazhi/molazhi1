# Cafe & Restaurant ERP AI Enterprise

این مخزن در حال تبدیل از یک اپلیکیشن کوچک تک‌صفحه‌ای مدیریت مالی شخصی به یک ERP واقعی برای کافه و رستوران است.

## وضعیت فعلی

- Stack فعلی: HTML5، CSS3، JavaScript ES Modules، تست داخلی Node.js (`node --test`).
- Backend واقعی، دیتابیس، Migration، Authentication، RBAC و API هنوز پیاده‌سازی نشده‌اند.
- UI موجود هنوز محصول نهایی ERP نیست و تا زمان اتصال به Backend واقعی نباید به‌عنوان قابلیت کامل POS/ERP معرفی شود.

## دستورهای توسعه

```bash
npm test
npm start
```

## فاز فعلی

Phase 01: Architecture + Repository Audit تکمیل مستندسازی اولیه و تعیین مسیر مهاجرت Enterprise.

## اصل‌های پروژه

- هیچ قابلیت نمایشی نباید به‌عنوان قابلیت کامل معرفی شود.
- هر قابلیت کامل باید Backend، Database، Validation، Authorization، Error Handling، Logging، Tests و Documentation داشته باشد.
- Business Logic باید از UI و Data Access جدا بماند.
- داده‌های مالی و موجودی باید Audit و Transactional باشند.
