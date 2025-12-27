import { AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

export function RiskRemoval() {
  const problems = [
    'تنفيذ بدون فهم هندسي حقيقي',
    'موردين لا يلتزمون بالرسومات',
    'أخطاء تظهر بعد التنفيذ',
    'خسارة وقت وتكلفة إعادة شغل'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center justify-center w-16 h-16 bg-[#0A1626]/5 rounded-full mb-6"
          >
            <AlertTriangle className="w-8 h-8 text-[#0A1626]" />
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl text-[#0A1626] mb-10"
          >
            ليه أغلب المشاريع الصناعية بتواجه مشاكل في التنفيذ المعدني؟
          </motion.h2>

          {/* Problems Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-[#F4F6F8] border-r-4 border-[#3A3A3A] p-6 text-right rounded-lg hover:shadow-lg transition-shadow"
              >
                <p className="text-[#0A1626] text-lg">{problem}</p>
              </motion.div>
            ))}
          </div>

          {/* Closing Line */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-[#0A1626] text-white p-8 rounded-lg"
          >
            <p className="text-xl md:text-2xl">
              المشكلة مش في الرسمة… المشكلة في التنفيذ.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}