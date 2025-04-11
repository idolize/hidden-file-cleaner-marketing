import AnimatedSection from './AnimatedSection';
import ScreenshotImage from './ScreenshotImage';
import MarkdownContent from './MarkdownContent';
import { sectionStyles, cardStyles, textStyles, layoutStyles } from '../styles/shared';

interface Feature {
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  title: string;
  features: Feature[];
}

export default function FeaturesSection({ title, features }: FeaturesSectionProps) {
  return (
    <AnimatedSection id="features" className={sectionStyles.withAltBg}>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-30rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-60rem)]"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-3/4 hero-gradient-alt sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute top-[350px] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(var(--gradient-to),0.1)_0%,transparent_40%)]" />
        <div className="absolute left-1/2 top-[450px] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(var(--gradient-to),0.25)_0%,transparent_50%)]" />
      </div>
      <div className={layoutStyles.maxWidth}>
        <div className="mb-16">
          <div className="px-2 w-[200%] md:w-full max-w-[1600px] lg:px-4 xl:px-8 2xl:px-16">
            <ScreenshotImage name={title} className="max-w-full md:m-auto" />
          </div>
        </div>
        <h2 className={`${textStyles.displayMedium} text-center mb-16`}>Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className={cardStyles.featureCard}>
              <h3 className="text-xl font-semibold mb-4 text-center">{feature.title}</h3>
              <div className={textStyles.grayText}>
                <MarkdownContent content={feature.description} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
