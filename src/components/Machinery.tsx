import { useRef } from 'react';
import { ChevronRight, ChevronLeft, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

export function Machinery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const machines = [
    {
      name: 'جلفنة',
      feature: 'طلاء معدني للحماية من التآكل',
      note: '(حماية من الصدأ بدون تأثير على الخامة)',
      image: 'https://images.unsplash.com/photo-1575305842946-0e807ce6f3fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWx2YW5pemluZyUyMG1ldGFsJTIwY29hdGluZ3xlbnwxfHx8fDE3NjY0MTIxODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'تناية',
      feature: 'ثني دقيق للمعادن',
      note: '(زوايا مضبوطة بدون تشوهات)',
      image: 'https://images.unsplash.com/photo-1738162837330-9257f938463c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGJlbmRpbmclMjBtYWNoaW5lfGVufDF8fHx8MTc2NjQwMjIzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'مقص',
      feature: 'قص مستقيم للألواح',
      note: '(حواف نظيفة بدون نتوءات)',
      image: 'https://images.unsplash.com/photo-1759159091728-e2c87b9d9315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWlsbG90aW5lJTIwc2hlYXIlMjBmYWN0b3J5JTIwbWV0YWwlMjBjdXR0aW5nfGVufDF8fHx8MTc2NjQyODkwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'مكابس',
      feature: 'تشكيل المعادن بالضغط',
      note: '(أشكال معقدة بدقة عالية)',
      image: 'https://images.unsplash.com/photo-1701448149957-b96dbd1926ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeWRyYXVsaWMlMjBwcmVzcyUyMG1hY2hpbmV8ZW58MXx8fHwxNzY2NDEyMTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'ليزر',
      feature: 'قص دقيق للتصميمات المعقدة',
      note: '(دقة تصل لأجزاء الملليمتر)',
      image: 'https://images.unsplash.com/photo-1764114235891-66ff86abaf87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXNlciUyMGN1dHRpbmclMjBtZXRhbHxlbnwxfHx8fDE3NjY0MDIyMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'CNC',
      feature: 'تحكم رقمي في التصنيع',
      note: '(تكرار دقيق للقطع المتطابقة)',
      image: 'https://images.unsplash.com/photo-1652888510609-ed2d2ad64d6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDTkMlMjBtYWNoaW5lJTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NjYzOTM1NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'لحام',
      feature: 'وصلات قوية ودائمة',
      note: '(MIG, TIG, Arc حسب التطبيق)',
      image: 'https://images.unsplash.com/photo-1641893823219-38b433f736c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2VsZGluZyUyMG1ldGFsfGVufDF8fHx8MTc2NjQxMjE4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'مخراط',
      feature: 'تشغيل دقيق للأجزاء الأسطوانية',
      note: '(قطع دوران بمواصفات محكمة)',
      image: 'https://images.unsplash.com/photo-1739879501339-1c5a2bf1eb46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRoZSUyMG1hY2hpbmUlMjBtZXRhbHdvcmt8ZW58MXx8fHwxNzY2NDEyMTg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <Wrench className="w-8 h-8 text-[#F9A825]" />
          <h3 className="text-2xl md:text-3xl text-[#0A1626]">
            بعض المكن والمعدات المتوفرة
          </h3>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#F9A825] hover:bg-[#F9A825]/90 text-[#0A1626] w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="السابق"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#F9A825] hover:bg-[#F9A825]/90 text-[#0A1626] w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="التالي"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide scroll-smooth px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6" style={{ width: 'max-content' }}>
              {machines.map((machine, index) => (
                <div
                  key={index}
                  className="bg-[#F4F6F8] border-t-4 border-[#2E7D32] rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  style={{ minWidth: '320px', maxWidth: '320px' }}
                >
                  {/* Machine Image */}
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={machine.image}
                      alt={machine.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Machine Name */}
                    <h4 className="text-xl text-[#0A1626] mb-3 border-b-2 border-[#F9A825] pb-2 inline-block">
                      {machine.name}
                    </h4>
                    
                    {/* Feature */}
                    <p className="text-[#3A3A3A] mb-2">
                      {machine.feature}
                    </p>
                    
                    {/* Note */}
                    <p className="text-sm text-[#3A3A3A]/70">
                      {machine.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full Width CTA Button */}
        <div className="mt-12">
          <a
            href="#contact"
            className="block w-full bg-[#F9A825] hover:bg-[#F9A825]/90 text-[#0A1626] py-5 text-center rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-xl"
          >
            تواصل معنا الان
          </a>
        </div>
      </div>
    </section>
  );
}