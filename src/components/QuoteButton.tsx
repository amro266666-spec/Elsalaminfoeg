import { FileText } from 'lucide-react';

export function QuoteButton() {
  return (
    <a
      href="#contact"
      className="fixed left-0 top-1/2 -translate-y-1/2 bg-[#F9A825] hover:bg-[#0A1626] text-[#0A1626] hover:text-[#F9A825] py-4 px-3 shadow-xl hover:shadow-2xl transition-all duration-300 z-40 rounded-r-lg group hover:px-4"
    >
      <div className="flex flex-col items-center gap-2">
        <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <div className="flex flex-col items-center" style={{ writingMode: 'vertical-rl' }}>
          <span className="text-sm whitespace-nowrap">طلب عرض سعر</span>
        </div>
      </div>
    </a>
  );
}