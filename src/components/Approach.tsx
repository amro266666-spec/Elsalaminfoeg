import { FileText, Boxes, Cog, PackageCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export function Approach() {
  const steps = [
    {
      icon: FileText,
      title: 'تحليل هندسي قبل التصنيع',
      description: 'مراجعة الرسومات والمتطلبات الفنية'
    },
    {
      icon: Boxes,
      title: 'اختيار خامات مناسبة للتطبيق الصناعي',
      description: 'مش الأرخص… الأنسب'
    },
    {
      icon: Cog,
      title: 'تنفيذ تحت إشراف فني',
      description: 'مهندسين وعمال متخصصين في تنفيذ كافة الصناعات المعدنية'
    },
    {
      icon: PackageCheck,
      title: 'تسليم مطابق للمواصفات',
      description: 'تنفيذ حسب الرسومات المعدنية لديك'
    }
  ];

  return (
    <section className="py-20 bg-[#F4F6F8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl text-[#0A1626] mb-4">
            إزاي بنشتغل؟
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white p-8 rounded-lg border-t-4 border-[#2E7D32] hover:shadow-lg transition-shadow"
            >
              {/* Step Number & Icon */}
              <div className="flex items-center justify-between mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.2, type: "spring" }}
                  className="w-12 h-12 bg-[#0A1626] text-white rounded-lg flex items-center justify-center"
                >
                  {index + 1}
                </motion.div>
                <motion.div
                  initial={{ rotate: -180, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                >
                  <step.icon className="w-10 h-10 text-[#3A3A3A]" />
                </motion.div>
              </div>

              {/* Step Title */}
              <h3 className="text-xl text-[#0A1626] mb-3 leading-snug">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-[#3A3A3A]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-block bg-[#F9A825] hover:bg-[#F9A825]/90 text-[#0A1626] px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            اطلب تواصل الان
          </a>
        </motion.div>
      </div>
    </section>
  );
}