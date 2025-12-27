import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ObjectionHandling() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'نشتغل حسب رسوماتك؟',
      answer: 'أكيد بنشتغل حسب رسوماتك الصناعية المعدنية'
    },
    {
      question: 'إيه المكن اللي بتشتغلوا بيه؟',
      answer: 'متاح عندنا كل المكن اللي ينفذ تصاميمك المعدنية سواء كان جلفنة أو ثناية أو ليزر أو مكابس أو CNC ومتاح أيضاً ماكينات ومعدات أخرى'
    },
    {
      question: 'نقدر نقدملكم إيه؟',
      answer: 'بنقدملك حلول صناعية معدنية تخدم خط إنتاجك'
    },
    {
      question: 'إزاي نبدأ معاكم؟',
      answer: 'تقدر تسجل بياناتك تحت وهنتواصل معاك أو تتواصل معانا هاتفياً من الأسفل'
    }
  ];

  return (
    <section className="py-20 bg-[#F4F6F8]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl text-[#0A1626] mb-4">
            قبل ما تتواصل معانا، خليك مطمّن
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-right hover:bg-gray-50 transition-colors"
              >
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-[#0A1626]" />
                </motion.div>
                <h3 className="text-xl text-[#0A1626]">
                  {faq.question}
                </h3>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 border-t border-gray-100">
                      <p className="text-lg text-[#2E7D32]">
                        ← {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}