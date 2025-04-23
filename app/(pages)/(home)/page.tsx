import marketing from '@/app/content/marketing.yaml';
import Navigation from '../../components/Navigation';
import HeroSection from '../../components/HeroSection';
import FeaturesSection from '../../components/FeaturesSection';
import PricingSection from '../../components/PricingSection';
import FAQSection from '../../components/FAQSection';
import CTASection from '../../components/CTASection';
import HeaderMain from '../../components/HeaderMain';

export default function Home() {
  return (
    <div className="min-h-screen bg-[rgb(var(--background-rgb))]">
      {/* Header */}
      <HeaderMain>
        <Navigation title={marketing.title} />
      </HeaderMain>

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
    </div>
  );
}
