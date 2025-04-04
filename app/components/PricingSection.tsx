import AnimatedSection from './AnimatedSection';
import BuyButton from './BuyButton';
import CheckmarkIcon from '@/app/icons/light/check.svg';
import { sectionStyles, cardStyles, textStyles, layoutStyles } from '../styles/shared';

interface PricingSectionProps {
  title: string;
  description: string;
  price: string | number;
  features: string[];
  volumePricing: string;
}

export default function PricingSection({ title, description, price, features, volumePricing }: PricingSectionProps) {
  return (
    <AnimatedSection id="pricing" className={sectionStyles.base}>
      <div className={`${layoutStyles.maxWidth} text-center`}>
        <h2 className={`${textStyles.displayMedium} mb-6`}>{title}</h2>
        <p className={`${textStyles.bodyLarge} ${textStyles.grayText} mb-12 max-w-2xl mx-auto`}>{description}</p>
        <div className={cardStyles.pricingCard}>
          <div className="text-5xl font-bold mb-8">
            ${price}
            <span className="text-lg text-[rgb(var(--gray-600))] ml-1">/license</span>
          </div>
          <ul className="space-y-4 mb-12">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center justify-center text-lg">
                <CheckmarkIcon className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <BuyButton />
          <p className="text-sm text-[rgb(var(--gray-600))]">{volumePricing}</p>
        </div>
      </div>
    </AnimatedSection>
  );
}
