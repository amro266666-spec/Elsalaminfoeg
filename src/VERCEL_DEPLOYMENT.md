# 🚀 دليل النشر على Vercel

---

## ✅ **الخطوات الكاملة:**

### **المرحلة 1: رفع المشروع على GitHub**

1. ✅ **افتح GitHub Desktop**
2. ✅ **تأكد من Commit كل التغييرات:**
   - اكتب Summary: "Initial commit - موقع السلام ميتال"
   - اضغط **Commit to main**
3. ✅ **اضغط:** **Publish repository** (أو Push origin)
4. ✅ **اختار:** Public أو Private حسب رغبتك

---

### **المرحلة 2: إنشاء حساب على Vercel**

1. **روح على:** https://vercel.com
2. **اضغط:** **Sign Up**
3. **اختار:** **Continue with GitHub**
4. **سجل دخول** بحسابك في GitHub
5. **اضغط:** **Authorize Vercel**

✅ **تمام! دخلت Vercel بنجاح**

---

### **المرحلة 3: استيراد المشروع**

1. **في لوحة تحكم Vercel،** اضغط: **Add New → Project**

2. **ستظهر قائمة بكل repositories بتاعتك:**
   - ابحث عن: `elsalam-metal-website`
   - اضغط **Import** بجانبه

3. **لو المشروع مش ظاهر:**
   - اضغط **Adjust GitHub App Permissions**
   - اختار **All repositories** أو اختار المشروع يدوياً
   - اضغط **Save**
   - ارجع لصفحة Import

---

### **المرحلة 4: إعدادات المشروع**

في صفحة **Configure Project**:

#### **✅ Project Settings:**
```
Project Name: elsalam-metal-website
Framework Preset: Vite
Root Directory: ./
```

#### **✅ Build & Development Settings:**
```
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

**كل الإعدادات صحيحة تلقائياً!** ✅

---

### **المرحلة 5: Environment Variables (مهم!)**

⚠️ **انزل للأسفل** لقسم **Environment Variables**

#### **أضف المتغير التالي:**

1. **اضغط:** **Add** أو **New Variable**

2. **املأ البيانات:**
   ```
   Key: VITE_GOOGLE_SCRIPT_URL
   Value: [ضع رابط Google Apps Script هنا]
   ```

3. **Environment:** اختار **Production, Preview, Development** (الثلاثة)

4. **اضغط:** **Add**

#### **مثال:**
```
Key: VITE_GOOGLE_SCRIPT_URL
Value: https://script.google.com/macros/s/AKfycbxXXXXXXXXXXXXX/exec
```

⚠️ **ملاحظة:** لو معملتش Google Apps Script بعد، تقدر تسيبها فاضية دلوقتي وتضيفها بعدين من:
```
Settings → Environment Variables
```

---

### **المرحلة 6: النشر!**

1. **اضغط:** الزر الأزرق **Deploy** 🚀

2. **Vercel هيبدأ يشتغل:**
   ```
   ⏳ Queued...
   📦 Building...
   🔨 Installing dependencies (npm install)
   🔨 Building project (npm run build)
   ✅ Deploying...
   ```

3. **انتظر 2-3 دقائق...**

---

### **المرحلة 7: النجاح! 🎉**

بعد الانتهاء ستظهر:

```
🎉 Congratulations!

Your project is live at:
https://elsalam-metal-website.vercel.app
```

#### **اضغط:** **Visit** لفتح الموقع

🌐 **الموقع Live على الإنترنت الآن!**

---

## 🔄 **التحديثات التلقائية**

أي تغيير تعمله في GitHub، Vercel **هينشره تلقائياً**:

1. عدّل الكود على جهازك
2. في GitHub Desktop:
   - Commit التغييرات
   - Push origin
3. Vercel هيكتشف التحديث ويعمل Deploy جديد تلقائياً!

⏱️ **خلال 2-3 دقائق** التحديثات تكون Live

---

## 🌍 **ربط دومين مخصص**

### **بعد النشر، تقدر تربط دومينك:**

1. **في Vercel Dashboard** للمشروع
2. **اضغط تاب:** **Settings**
3. **من القائمة الجانبية:** **Domains**
4. **في خانة "Add Domain":**
   - اكتب دومينك: `elsalammetal.com`
   - اضغط **Add**

5. **Vercel هيديك تعليمات DNS:**
   - انسخ الـ DNS Records
   - ضعها في لوحة تحكم الدومين (Namecheap/GoDaddy/إلخ)

6. **انتظر 5-60 دقيقة** للـ DNS propagation

7. **✅ الدومين شغال مع SSL (HTTPS) مجاني تلقائياً!**

---

## ⚙️ **إعدادات إضافية (اختياري)**

### **تفعيل Analytics:**

في Vercel Dashboard:
1. **Analytics** تاب
2. **Enable Analytics**
3. شاهد إحصائيات الزوار والأداء

### **Preview Deployments:**

كل Branch جديد في GitHub بيخلق Preview URL تلقائي:
```
https://elsalam-metal-website-git-branch-name.vercel.app
```

---

## 📊 **إضافة Google Script بعد النشر**

لو نشرت المشروع قبل ما تعمل Google Apps Script:

### **الخطوات:**

1. **اعمل Google Apps Script** (شاهد `GOOGLE_SHEETS_SETUP.md`)
2. **انسخ رابط الـ Web App**
3. **في Vercel:**
   - Dashboard → اختار المشروع
   - **Settings → Environment Variables**
   - **اضغط:** Add New
   - **Key:** `VITE_GOOGLE_SCRIPT_URL`
   - **Value:** الصق الرابط
   - **اضغط:** Save

4. **Vercel هيعيد النشر تلقائياً** خلال دقيقة

✅ **الفورم هيشتغل الآن!**

---

## 🔍 **مراقبة الأخطاء**

في حالة وجود مشكلة:

1. **روح على:** Dashboard → اختار المشروع
2. **اضغط:** أحدث Deployment
3. **اضغط:** **View Build Logs**
4. **شاهد التفاصيل** وابحث عن الأخطاء

**الأخطاء الشائعة:**
- ❌ `Module not found` → تأكد من `npm install` في Build Command
- ❌ `Build failed` → تأكد من `npm run build` يشتغل محلياً
- ❌ `Environment variable undefined` → تأكد من إضافة `VITE_GOOGLE_SCRIPT_URL`

---

## 🎯 **الإعدادات النهائية الموصى بها**

### **في Vercel Settings:**

```
Framework Preset: Vite
Node.js Version: 18.x (أو أعلى)
Build Command: npm run build
Output Directory: dist
Install Command: npm install

Environment Variables:
├── VITE_GOOGLE_SCRIPT_URL
```

---

## 📱 **معاينة على الموبايل**

الموقع **Responsive** تلقائياً!

افتح الموقع من موبايلك:
```
https://elsalam-metal-website.vercel.app
```

---

## 🚀 **الخطوات التالية:**

بعد النشر بنجاح:

1. ✅ **اختبر الفورم** - تأكد إنه بيرسل لـ Google Sheets
2. ✅ **اربط دومين مخصص** (اختياري)
3. ✅ **شارك الرابط** مع العملاء
4. ✅ **راقب الطلبات** في Google Sheets

---

## 📞 **مشاكل شائعة:**

### **"Deployment Failed"**
**الحل:**
- تأكد إن المشروع يشتغل محلياً (`npm run build`)
- شاهد Build Logs للتفاصيل

### **"Function Not Found" في الفورم**
**الحل:**
- تأكد من إضافة `VITE_GOOGLE_SCRIPT_URL` في Environment Variables
- تأكد إن رابط Google Script صحيح

### **"This site can't be reached"**
**الحل:**
- انتظر 2-3 دقائق بعد الـ Deployment
- جرّب افتح في Incognito/Private mode
- امسح الـ cache

---

## 🎉 **تمام! موقعك Live على الإنترنت!**

**رابط الموقع:**
```
https://elsalam-metal-website.vercel.app
```

**بالتوفيق! 🚀**
