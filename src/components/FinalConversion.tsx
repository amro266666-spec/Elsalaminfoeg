import { useState } from 'react';
import { Shield, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export function FinalConversion() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    project: '',
    hasDrawings: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 🔗 رابط Google Apps Script (يُقرأ من Environment Variables)
      const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || 'YOUR_GOOGLE_SCRIPT_URL_HERE';
      
      // الحصول على IP Address (اختياري)
      let userIP = '';
      try {
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        userIP = ipData.ip;
      } catch (err) {
        console.log('Could not get IP:', err);
      }

      // إرسال البيانات لـ Google Sheet
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // مهم للـ Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email || 'غير محدد',
          company: formData.company || 'غير محدد',
          details: `المشروع: ${formData.project}\nالرسومات: ${formData.hasDrawings === 'yes' ? 'نعم، لدي رسومات' : 'لا، ليس لدي رسومات'}`,
          ip: userIP
        }),
      });

      // بما أن mode: no-cors، الـ response مش هيكون متاح
      // فهنفترض النجاح
      toast.success('تم الإرسال بنجاح! سنتواصل معك قريباً', {
        duration: 5000,
        icon: '✅'
      });
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        company: '',
        project: '',
        hasDrawings: ''
      });

    } catch (error) {
      console.error('Error:', error);
      toast.error('حدث خطأ. حاول مرة أخرى أو تواصل معنا مباشرة.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl text-[#0A1626] mb-4">
            لو عندك مشروع صناعي وعاوز تنفيذ معدني قوي املا الفورم وهنتواصل معاك
          </h2>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-[#F4F6F8] p-8 md:p-12 rounded-lg border-t-4 border-[#F9A825]"
        >
          <div className="space-y-6 mb-8">
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <label htmlFor="name" className="block text-[#0A1626] mb-2">
                الاسم
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9A825] text-right"
              />
            </motion.div>

            {/* Phone Field */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <label htmlFor="phone" className="block text-[#0A1626] mb-2">
                رقم الهاتف
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9A825] text-right"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.45 }}
            >
              <label htmlFor="email" className="block text-[#0A1626] mb-2">
                البريد الإلكتروني (اختياري)
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9A825] text-right"
                dir="ltr"
                placeholder="example@email.com"
              />
            </motion.div>

            {/* Company Field */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <label htmlFor="company" className="block text-[#0A1626] mb-2">
                اسم المصنع أو الشركة
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9A825] text-right"
              />
            </motion.div>

            {/* Project Field */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <label htmlFor="project" className="block text-[#0A1626] mb-2">
                طبيعة المشروع
              </label>
              <textarea
                id="project"
                rows={4}
                required
                value={formData.project}
                onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9A825] text-right resize-none"
              />
            </motion.div>

            {/* Drawings Field */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <label htmlFor="hasDrawings" className="block text-[#0A1626] mb-2">
                هل في رسومات معدنية ولا لا؟
              </label>
              <select
                id="hasDrawings"
                value={formData.hasDrawings}
                onChange={(e) => setFormData({ ...formData, hasDrawings: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9A825] text-right"
              >
                <option value="">اختر...</option>
                <option value="yes">نعم، لدي رسومات</option>
                <option value="no">لا، ليس لدي رسومات</option>
              </select>
            </motion.div>
          </div>

          {/* Submit Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-[#F9A825] hover:bg-[#F9A825]/90 text-[#0A1626] py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'جاري الإرسال...' : 'احصل على تواصل'}
          </motion.button>

          {/* Trust Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.9 }}
            className="mt-6 flex items-start gap-3 text-[#3A3A3A] bg-white p-4 rounded-lg"
          >
            <Shield className="w-5 h-5 text-[#2E7D32] flex-shrink-0 mt-0.5" />
            <p className="text-sm">
              تواصلك مباشر مع فريق فني – بدون مبيعات عشوائية
            </p>
          </motion.div>
        </motion.form>

        {/* Factory Address */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex items-start gap-3 text-[#0A1626] bg-[#F4F6F8] p-6 rounded-lg border-r-4 border-[#2E7D32]"
        >
          <MapPin className="w-6 h-6 text-[#2E7D32] flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold mb-1">عنوان المصنع:</p>
            <p>العاشر من رمضان المنطقة الصناعية الثالثة الستة مليون</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}