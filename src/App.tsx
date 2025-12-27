import { Hero } from './components/Hero';
import { RiskRemoval } from './components/RiskRemoval';
import { Proof } from './components/Proof';
import { ObjectionHandling } from './components/ObjectionHandling';
import { Approach } from './components/Approach';
import { Experience } from './components/Experience';
import { WhoWeWorkWith } from './components/WhoWeWorkWith';
import { FinalConversion } from './components/FinalConversion';
import { Machinery } from './components/Machinery';
import { StickyContact } from './components/StickyContact';
import { Footer } from './components/Footer';
import { QuoteButton } from './components/QuoteButton';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div dir="rtl" className="min-h-screen">
      <Hero />
      <RiskRemoval />
      <Proof />
      <ObjectionHandling />
      <Approach />
      <WhoWeWorkWith />
      <Experience />
      <FinalConversion />
      <Machinery />
      <StickyContact />
      <QuoteButton />
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}