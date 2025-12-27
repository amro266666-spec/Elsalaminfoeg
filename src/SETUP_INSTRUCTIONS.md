# 📦 تعليمات إعداد المشروع

## الطريقة الأسهل: نسخ الملفات يدوياً

### الخطوة 1: إنشاء المشروع

1. **إنشاء مجلد جديد:**
   - أنشئ مجلد اسمه `elsalam-metal-website` على Desktop

2. **تثبيت Node.js:**
   - حمّل من: https://nodejs.org
   - ثبت النسخة LTS

3. **فتح Terminal/CMD:**
   - افتح المجلد
   - Shift + كليك يمين → "Open PowerShell here"

4. **إنشاء مشروع Vite:**
```bash
npm create vite@latest . -- --template react-ts
```

5. **تثبيت المكتبات الإضافية:**
```bash
npm install lucide-react framer-motion sonner@2.0.3 clsx tailwind-merge
npm install -D tailwindcss@next autoprefixer postcss
```

### الخطوة 2: نسخ الملفات

من Figma Make، انسخ المحتوى من كل ملف وضعه في المشروع:

**الملفات الأساسية:**
- `/App.tsx`
- `/main.tsx`  
- `/index.html`
- `/styles/globals.css`

**مجلد Components:**
- `/components/Hero.tsx`
- `/components/RiskRemoval.tsx`
- `/components/Proof.tsx`
- `/components/ObjectionHandling.tsx`
- `/components/Approach.tsx`
- `/components/Experience.tsx`
- `/components/WhoWeWorkWith.tsx`
- `/components/FinalConversion.tsx`
- `/components/Machinery.tsx`
- `/components/StickyContact.tsx`
- `/components/QuoteButton.tsx`
- `/components/Footer.tsx`

### الخطوة 3: التشغيل

```bash
npm install
npm run dev
```

افتح: http://localhost:5173

---

## الطريقة البديلة: استخدام Vercel مباشرة

1. سجل حساب على https://vercel.com
2. اختار "Deploy from template"
3. ارفع المجلد بالكامل

---

## الدعم

لو واجهتك أي مشكلة، راجع الخطوات أو اتواصل معي!
