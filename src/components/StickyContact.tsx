import { Phone } from 'lucide-react';

export function StickyContact() {
  return (
    <a
      href="tel:01013260330"
      className="fixed bottom-6 left-6 md:hidden bg-[#F9A825] text-[#0A1626] p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center gap-2"
      aria-label="اتصل بنا"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
}