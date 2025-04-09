import AnimatedSection from './AnimatedSection';
import DownloadButton from './DownloadButton';
import { sectionStyles, textStyles, layoutStyles } from '../styles/shared';

interface CTASectionProps {
  title?: string;
  description: string;
}

export default function CTASection({ title, description }: CTASectionProps) {
  return (
    <AnimatedSection className={`${sectionStyles.base} bg-[rgb(var(--section-alt))]`}>
      <div className={`${layoutStyles.maxWidth} flex justify-center`}>
        <div
          className={`text-center w-full flex flex-col items-center border border-[rgb(var(--gray-200))] rounded-md p-12 max-w-3xl`}
        >
          {title && <h2 className={`${textStyles.displayMedium} mb-6`}>{title}</h2>}
          <p className={`${textStyles.bodyLarge} ${textStyles.grayText} mb-12 max-w-2xl mx-auto`}>{description}</p>
          <DownloadButton />
        </div>
      </div>
    </AnimatedSection>
  );
}
