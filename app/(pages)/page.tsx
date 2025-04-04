import Image from 'next/image';
import marketing from '../content/marketing.json';
import Navigation from '../components/Navigation';
import AnimatedSection from '../components/AnimatedSection';
import BuyButton from '../components/BuyButton';
import CheckmarkIcon from '../icons/light/check.svg';
import AppleIcon from '../icons/brands/apple.svg';
import ScreenshotImage from '../components/ScreenshotImage';

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
      <AnimatedSection className="pt-32 pb-24 px-6 max-w-7xl mx-auto relative">
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
        <div className="flex flex-col text-center md:text-left md:flex-row items-center md:gap-8 lg:gap-16 z-10">
          <div className="flex flex-col md:w-2/3 lg:w-1/2 space-y-8">
            <h2 className="display-large">{marketing.tagline}</h2>
            <p className="body-large text-[rgb(var(--gray-600))]">{marketing.hero.description}</p>
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
              alt={`${marketing.title} Icon`}
              priority
              width={512}
              height={512}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection
        id="features"
        className="section-padding px-6 relative overflow-hidden bg-[rgb(var(--section-alt))]"
      >
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
        <div className="max-w-7xl mx-auto relative">
          <div className="mb-16">
            <div className="px-2 w-[200%] md:w-full max-w-[1600px] lg:px-4 xl:px-8 2xl:px-16">
              <ScreenshotImage name={marketing.title} className="max-w-full md:m-auto" />
            </div>
          </div>
          <h2 className="display-medium text-center mb-16">Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketing.features.map((feature, index) => (
              <div
                key={index}
                className="bg-[rgb(var(--background-rgb))]/70 p-8 rounded-2xl shadow-md hover:shadow-lg backdrop-blur-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4 text-center">{feature.title}</h3>
                <p className="text-[rgb(var(--gray-600))]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Pricing Section */}
      <AnimatedSection id="pricing" className="section-padding px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="display-medium mb-6">{marketing.pricing.title}</h2>
          <p className="body-large text-[rgb(var(--gray-600))] mb-12 max-w-2xl mx-auto">
            {marketing.pricing.description}
          </p>
          <div className="bg-[rgb(var(--background-rgb))] rounded-3xl shadow-lg p-12 max-w-lg mx-auto border border-[rgb(var(--gray-200))]">
            <div className="text-5xl font-bold mb-8">
              ${marketing.pricing.price}
              <span className="text-lg text-[rgb(var(--gray-600))] ml-1">/license</span>
            </div>
            <ul className="space-y-4 mb-12">
              {marketing.pricing.features.map((feature, index) => (
                <li key={index} className="flex items-center justify-center text-lg">
                  <CheckmarkIcon className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <BuyButton />
            <p className="text-sm text-[rgb(var(--gray-600))]">{marketing.pricing.volumePricing}</p>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection id="faq" className="section-padding px-6 bg-[rgb(var(--section-alt))]">
        <div className="max-w-7xl mx-auto">
          <h2 className="display-medium text-center mb-16">{marketing.faq.title}</h2>
          <div className="max-w-3xl mx-auto">
            {marketing.faq.questions.length === 0 ? (
              <p className="text-center text-[rgb(var(--gray-600))] body-large">FAQ content coming soon...</p>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
