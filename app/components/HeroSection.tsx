import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import { sectionStyles, textStyles, layoutStyles } from '../styles/shared';
import HeroGradient from './gradients/HeroGradient';
import DownloadButton from './DownloadButton';
interface HeroSectionProps {
  title: string;
  tagline: string;
  description: string;
}

export default function HeroSection({ title, tagline, description }: HeroSectionProps) {
  return (
    <AnimatedSection className={`${sectionStyles.base} pt-32 pb-24 relative`}>
      <HeroGradient />
      <div className={`${layoutStyles.maxWidth} relative`}>
        <div className="flex flex-col text-center md:text-left md:flex-row items-center md:gap-8 lg:gap-16 z-10">
          <div className="flex flex-col md:w-2/3 lg:w-1/2 space-y-8">
            <h2 className={textStyles.displayLarge}>{tagline}</h2>
            <div className={`${textStyles.bodyLarge} ${textStyles.grayText}`}>{description}</div>
            <DownloadButton className="md:ml-0" />
          </div>
          <div className="md:w-1/3 lg:w-1/2">
            <Image
              className="hidden md:block"
              src="/hiddenfilecleaner.png"
              alt={`${title} Icon`}
              priority
              width={512}
              height={512}
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
