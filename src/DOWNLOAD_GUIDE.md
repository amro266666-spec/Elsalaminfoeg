# 📥 دليل تحميل المشروع على جهازك

## 🎯 الطريقة المباشرة (الأسهل)

بما إن Figma Make مش بيدي خيار تحميل مباشر، هنستخدم GitHub كوسيط.

---

## ✅ الخطوات بالتفصيل:

### **المرحلة 1: رفع المشروع على GitHub**

#### **الطريقة أ: باستخدام GitHub Web Interface (الأسهل للمبتدئين)**

1. **إنشاء Repository جديد:**
   - روح على: https://github.com/new
   - **Repository name:** `elsalam-metal-website`
   - **Description:** `موقع السلام ميتال - صفحة هبوط صناعية B2B`
   - اختار: ✅ **Public** (أو Private لو عايز خاص)
   - اختار: ✅ **Add a README file**
   - اضغط: **Create repository**

2. **رفع الملفات:**
   - في صفحة Repository، اضغط **"Add file" → "Upload files"**
   - اسحب كل ملفات المشروع من Figma Make (أو انسخهم يدوياً)
   - اضغط **"Commit changes"**

#### **الطريقة ب: باستخدام GitHub Desktop (الأفضل)**

1. **افتح GitHub Desktop**
2. **File → New Repository:**
   - Name: `elsalam-metal-website`
   - Local Path: Desktop
   - اضغط **Create Repository**

3. **انسخ كل الملفات** من Figma Make للمجلد اللي اتعمل

4. **في GitHub Desktop:**
   - هتلاقي كل التغييرات ظاهرة
   - في خانة **Summary:** اكتب "Initial commit - موقع السلام ميتال"
   - اضغط **"Commit to main"**
   - اضغط **"Publish repository"**

---

### **المرحلة 2: تنزيل المشروع على جهازك**

#### **الخيار 1: GitHub Desktop (موصى به)**

1. افتح GitHub Desktop
2. **File → Clone Repository**
3. اختار `elsalam-metal-website`
4. اختار مكان التنزيل (مثلاً: Desktop)
5. اضغط **Clone**

✅ **تمام! المشروع على جهازك دلوقتي**

#### **الخيار 2: Git CLI**

افتح Terminal/CMD:

\`\`\`bash
# انتقل للمكان اللي عايز تنزل فيه المشروع
cd Desktop

# استنسخ المشروع
git clone https://github.com/YOUR_USERNAME/elsalam-metal-website.git

# ادخل للمجلد
cd elsalam-metal-website
\`\`\`

#### **الخيار 3: تنزيل ZIP مباشرة**

1. روح على: https://github.com/YOUR_USERNAME/elsalam-metal-website
2. اضغط الزر الأخضر **"Code"**
3. اختار **"Download ZIP"**
4. فك الضغط على جهازك

---

### **المرحلة 3: تشغيل المشروع**

1. **افتح Terminal/CMD** في مجلد المشروع:
   - **Windows:** Shift + كليك يمين → "Open PowerShell here"
   - **Mac:** كليك يمين → "New Terminal at Folder"

2. **ثبت المكتبات:**
   \`\`\`bash
   npm install
   \`\`\`
   (انتظر 2-3 دقائق...)

3. **شغّل المشروع:**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **افتح المتصفح:**
   - اذهب إلى: http://localhost:5173
   - 🎉 **الموقع شغال!**

---

## 🛠️ التعديلات المطلوبة:

### **1. Web3Forms Access Key:**

في الملف: `/components/FinalConversion.tsx`

ابحث عن:
\`\`\`javascript
access_key: 'YOUR_ACCESS_KEY_HERE'
\`\`\`

استبدلها بالـ Key من: https://web3forms.com

### **2. معلومات الشركة:**

كل معلومات الشركة موجودة في الكود، بس راجعها في:
- `/components/Hero.tsx` - العنوان الرئيسي
- `/components/Footer.tsx` - معلومات التواصل
- `/components/FinalConversion.tsx` - الفورم

---

## 🚀 النشر على Vercel:

1. **روح على:** https://vercel.com
2. **Sign up with GitHub**
3. **Import Repository:** `elsalam-metal-website`
4. **Deploy!**

⏱️ بعد دقيقتين الموقع يكون Live على الإنترنت!

---

## 📦 هيكل المشروع:

\`\`\`
elsalam-metal-website/
├── components/
│   ├── Hero.tsx
│   ├── RiskRemoval.tsx
│   ├── Proof.tsx
│   ├── ObjectionHandling.tsx
│   ├── Approach.tsx
│   ├── Experience.tsx
│   ├── WhoWeWorkWith.tsx
│   ├── FinalConversion.tsx
│   ├── Machinery.tsx
│   ├── StickyContact.tsx
│   ├── QuoteButton.tsx
│   └── Footer.tsx
├── styles/
│   └── globals.css
├── App.tsx
├── main.tsx
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
\`\`\`

---

## ⚠️ مشاكل محتملة وحلولها:

### **"npm: command not found"**
**الحل:** ثبت Node.js من https://nodejs.org

### **"Module not found: framer-motion"**
**الحل:**
\`\`\`bash
npm install framer-motion
\`\`\`

### **المشروع مش شغال**
**الحل:**
\`\`\`bash
# امسح node_modules وحاول تاني
rm -rf node_modules package-lock.json
npm install
npm run dev
\`\`\`

---

## 💬 تحتاج مساعدة؟

لو واجهتك أي مشكلة في أي خطوة، اتواصل معي!

**بالتوفيق! 🚀**
