import { Award, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function Experience() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#F4F6F8] to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Stat 1: خبرة 20 سنة */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            className="bg-white border-r-8 border-[#2E7D32] rounded-lg p-10 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                className="bg-[#F9A825] rounded-full p-4"
              >
                <Award className="w-10 h-10 text-[#0A1626]" />
              </motion.div>
              <div>
                <div className="flex items-baseline gap-2">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-6xl text-[#0A1626]"
                  >
                    20
                  </motion.span>
                  <span className="text-3xl text-[#3A3A3A]">سنة</span>
                </div>
              </div>
            </div>
            <p className="text-xl text-[#3A3A3A] mt-4">
              خبرة في تصنيع المعادن وفهم التحديات الحقيقية للمصانع
            </p>
          </motion.div>

          {/* Stat 2: مئات التصاميم */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            className="bg-white border-r-8 border-[#F9A825] rounded-lg p-10 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
                className="bg-[#2E7D32] rounded-full p-4"
              >
                <CheckCircle className="w-10 h-10 text-white" />
              </motion.div>
              <div>
                <div className="flex items-baseline gap-2">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-6xl text-[#0A1626]"
                  >
                    مئات
                  </motion.span>
                </div>
              </div>
            </div>
            <p className="text-xl text-[#3A3A3A] mt-4">
              التصاميم المنفذة بنجاح من مشاريع بسيطة لخطوط إنتاج كاملة
            </p>
          </motion.div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 text-center"
        >
          <p className="text-lg text-[#3A3A3A]">
            <span className="text-[#2E7D32]">مش بنوعد بنفذ بس</span> - كل رقم من دول شغل حقيقي اتسلّم في معاده
          </p>
        </motion.div>
      </div>
    </section>
  );
}