import AnimatedSection from './AnimatedSection';
import { sectionStyles, textStyles, layoutStyles } from '../styles/shared';

interface FAQQuestion {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  questions: FAQQuestion[];
}

export default function FAQSection({ title, questions }: FAQSectionProps) {
  return (
    <AnimatedSection id="faq" className={`${sectionStyles.base} bg-[rgb(var(--section-alt))]`}>
      <div className={layoutStyles.maxWidth}>
        <h2 className={`${textStyles.displayMedium} text-center mb-16`}>{title}</h2>
        <div className={layoutStyles.maxWidthNarrow}>
          {questions.length === 0 ? (
            <p className={`text-center ${textStyles.grayText} ${textStyles.bodyLarge}`}>FAQ content coming soon...</p>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}
