import { motion } from 'framer-motion';

export function Proof() {
  const services = [
    {
      title: 'تنفيذ شاسيهات وهياكل معدنية',
      image: 'https://images.unsplash.com/photo-1508188609340-e8068b599193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc3RlZWwlMjB3ZWxkaW5nfGVufDF8fHx8MTc2NjI2MzY4M3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'تجهيز خطوط إنتاج',
      image: 'https://images.unsplash.com/photo-1764115424769-ebdd2683d5a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGZhYnJpY2F0aW9uJTIwcHJlY2lzaW9ufGVufDF8fHx8MTc2NjI2MzY4M3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'حلول خاصة حسب الطلب',
      image: 'https://images.unsplash.com/photo-1763926025678-95d196d0ab28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZyUyMHN0ZWVsfGVufDF8fHx8MTc2NjI2MzY4NHww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <section className="py-20 bg-white">
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
            مش بنوعد… بننفذ بس
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-[#0A1626] cursor-pointer"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1626] via-[#0A1626]/50 to-transparent"></div>
              <div className="absolute bottom-0 right-0 left-0 p-6">
                <h3 className="text-xl text-white">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* B2B Focus Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center bg-[#F4F6F8] p-8 rounded-lg border-r-4 border-[#2E7D32]"
        >
          <p className="text-xl text-[#0A1626]">
            أعمال صناعية للمصانع فقط
          </p>
        </motion.div>
      </div>
    </section>
  );
}