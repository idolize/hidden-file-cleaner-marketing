import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import AppleIcon from '../icons/brands/apple.svg';
import { sectionStyles, textStyles, layoutStyles } from '../styles/shared';

interface HeroSectionProps {
  title: string;
  tagline: string;
  description: string;
}

export default function HeroSection({ title, tagline, description }: HeroSectionProps) {
  return (
    <AnimatedSection className={`${sectionStyles.base} pt-32 pb-24 relative`}>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] hero-gradient sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className={`${layoutStyles.maxWidth} relative`}>
        <div className="flex flex-col text-center md:text-left md:flex-row items-center md:gap-8 lg:gap-16 z-10">
          <div className="flex flex-col md:w-2/3 lg:w-1/2 space-y-8">
            <h2 className={textStyles.displayLarge}>{tagline}</h2>
            <p className={`${textStyles.bodyLarge} ${textStyles.grayText}`}>{description}</p>
            <div className="flex flex-col gap-2 m-auto md:ml-0">
              <a
                download
                href="https://updates.hiddenfilecleaner.app/latest.dmg"
                className="bg-gradient flex flex-row gap-2 items-center text-white px-16 lg:px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
              >
                <AppleIcon className="w-5 h-5" />
                <span>Download Now</span>
              </a>
              <div className="flex flex-row gap-2 items-center justify-center text-xs text-[rgb(var(--gray-600))]">
                <span>7 Day Free Trial</span>
                <span>•</span>
                <span>macOS 14+</span>
              </div>
            </div>
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
