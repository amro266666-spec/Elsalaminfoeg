import { CheckCircle, Wrench, Shield, Clock, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';
import logo from 'figma:asset/35f8c4d8be81cd86b20cae356f54c10b27984f11.png';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1738162837438-92ff852619a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwZmxvb3IlMjB3ZWxkaW5nJTIwQ05DfGVufDF8fHx8MTc2NjI2MzY4M3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Factory floor"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1626]/95 via-[#0A1626]/85 to-[#0A1626]/70"></div>
      </div>

      {/* Logo at Top */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-6 right-6 z-20"
      >
        <img src={logo} alt="مصنع السلام للصناعات المعدنية" className="h-24 md:h-32 w-auto" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="max-w-3xl">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
          >
            تنفيذ معدني يعتمد عليه من أول الرسمة لحد التنفيذ
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed"
          >
            نساعد المصانع في تنفيذ حلول معدنية دقيقة مطابقة للرسومات
          </motion.p>

          {/* Trust Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6"
          >
            {[
              { icon: Wrench, text: 'تنفيذ هندسي', color: 'text-[#F9A825]' },
              { icon: CheckCircle, text: 'خامات معتمدة', color: 'text-[#2E7D32]' },
              { icon: Clock, text: 'التزام زمني', color: 'text-[#F9A825]' },
              { icon: Briefcase, text: 'شغل B2B فقط', color: 'text-[#2E7D32]' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="flex flex-col items-center text-center gap-2"
              >
                <item.icon className={`w-8 h-8 ${item.color}`} />
                <span className="text-white text-sm">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:01013260330"
            className="inline-block bg-[#F9A825] hover:bg-[#F9A825]/90 text-[#0A1626] px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            طلب عرض سعر
          </motion.a>
        </div>
      </div>
    </section>
  );
}