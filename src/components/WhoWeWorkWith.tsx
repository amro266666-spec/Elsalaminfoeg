import { Factory, HardHat, ShoppingCart, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function WhoWeWorkWith() {
  const clients = [
    {
      icon: Factory,
      title: 'أصحاب مصانع'
    },
    {
      icon: HardHat,
      title: 'مهندسين مواقع'
    },
    {
      icon: ShoppingCart,
      title: 'مديري مشتريات'
    },
    {
      icon: Building2,
      title: 'شركات مقاولات صناعية'
    }
  ];

  return (
    <section className="py-20 bg-[#0A1626]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            العملاء اللي بنفهم متطلباتهم
          </h2>
        </motion.div>

        {/* Clients Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-lg text-center hover:bg-white/20 transition-all duration-300"
            >
              <motion.div
                initial={{ rotate: -180, scale: 0 }}
                whileInView={{ rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2, type: "spring" }}
                className="inline-flex items-center justify-center w-16 h-16 bg-[#F9A825] rounded-lg mb-4"
              >
                <client.icon className="w-8 h-8 text-[#0A1626]" />
              </motion.div>
              <h3 className="text-xl text-white">
                {client.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}