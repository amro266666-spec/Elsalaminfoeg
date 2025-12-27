import { MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';
import logo from 'figma:asset/35f8c4d8be81cd86b20cae356f54c10b27984f11.png';

export function Footer() {
  return (
    <footer className="bg-[#0A1626] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl mb-6 text-[#F9A825]">
              مصنع السلام للصناعات المعدنية
            </h3>
            <div className="space-y-4 text-[#F4F6F8] leading-relaxed">
              <p>
                مصنع السلام للصناعات المعدنية هو أحد المصانع الرائدة في مجال الحلول والصناعات المعدنية، بخبرة تمتد لأكثر من 20 عامًا في السوق المصري.
              </p>
              <p>
                نمتلك خبرة عملية قوية في تنفيذ جميع الرسومات الهندسية والأعمال المعدنية بدقة عالية، مع الالتزام الكامل بالمواصفات الفنية ومتطلبات كل مشروع.
              </p>
              <p>
                نقدّم حلولًا معدنية متكاملة تخدم المصانع والشركات والمشروعات الصناعية، بدءًا من دراسة الرسومات واحتياجات العميل، مرورًا بعمليات التصنيع والتشكيل واللحام، وحتى التسليم النهائي بجودة تعتمد عليها.
              </p>
              <p>
                نعمل دائمًا بمنهجية هندسية واضحة، ونلتزم بالجودة، والدقة، ومواعيد التسليم، مما جعلنا شريكًا موثوقًا للعديد من المصانع والمشروعات على مدار السنوات.
              </p>
            </div>
          </motion.div>

          {/* Contact & Social Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Address */}
            <div className="mb-8">
              <div className="flex items-start gap-3 bg-[#0A1626] border border-[#F9A825]/30 p-6 rounded-lg">
                <MapPin className="w-6 h-6 text-[#F9A825] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[#F9A825] mb-2">📍 العنوان:</p>
                  <p className="text-[#F4F6F8]">
                    العاشر من رمضان المنطقة الصناعية الثالثة الستة مليون
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-xl mb-4 text-[#F9A825]">تابعنا على</h4>
              <div className="flex gap-4 mb-8">
                {/* Facebook */}
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.facebook.com/elsal1am"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#F4F6F8] hover:bg-[#F9A825] text-[#0A1626] rounded-lg flex items-center justify-center transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </motion.a>

                {/* Instagram */}
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.instagram.com/elsal1am/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#F4F6F8] hover:bg-[#F9A825] text-[#0A1626] rounded-lg flex items-center justify-center transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.linkedin.com/in/elsal1am/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#F4F6F8] hover:bg-[#F9A825] text-[#0A1626] rounded-lg flex items-center justify-center transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>

                {/* TikTok */}
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.tiktok.com/@elsal1am"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#F4F6F8] hover:bg-[#F9A825] text-[#0A1626] rounded-lg flex items-center justify-center transition-all duration-300"
                  aria-label="TikTok"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </motion.a>
              </div>

              {/* Logo at Bottom */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex justify-start"
              >
                <img src={logo} alt="مصنع السلام للصناعات المعدنية" className="h-32 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-[#F4F6F8]/20 pt-8 text-center text-[#F4F6F8]/70"
        >
          <p>© 2025 مصنع السلام للصناعات المعدنية. جميع الحقوق محفوظة.</p>
        </motion.div>
      </div>
    </footer>
  );
}