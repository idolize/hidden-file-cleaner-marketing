import marketing from '../content/marketing.json';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

export const metadata = {
  title: 'Hidden File Cleaner - Remove macOS metadata clutter in a single click',
  description:
    'A native Mac app that effortlessly cleans annoying metadata files from external drives, making your storage experience seamless across all devices.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[rgb(var(--background-rgb))]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[rgb(var(--background-rgb))]/80 backdrop-blur-xl z-50 border-b border-[rgb(var(--gray-200))]">
        <Navigation title={marketing.title} />
      </header>

      {/* Hero Section */}
      <HeroSection title={marketing.title} tagline={marketing.tagline} description={marketing.hero.description} />

      {/* Features Section */}
      <FeaturesSection title={marketing.title} features={marketing.features} />

      {/* Pricing Section */}
      <PricingSection
        title={marketing.pricing.title}
        description={marketing.pricing.description}
        price={marketing.pricing.price}
        features={marketing.pricing.features}
        volumePricing={marketing.pricing.volumePricing}
      />

      {/* FAQ Section */}
      <FAQSection title={marketing.faq.title} questions={marketing.faq.questions} />

      {/* CTA Section */}
      <CTASection description={marketing.cta.description} />
    </main>
  );
}
