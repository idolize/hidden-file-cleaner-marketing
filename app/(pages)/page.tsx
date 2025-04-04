import Image from 'next/image';
import marketing from '../../content/marketing.json';
import Navigation from '../components/Navigation';
import AnimatedSection from '../components/AnimatedSection';
import BuyButton from '../components/BuyButton';
import CheckmarkIcon from '../icons/light/check.svg';
import AppleIcon from '../icons/brands/apple.svg';

export const metadata = {
  title: 'Hidden File Cleaner - Remove macOS metadata clutter in a single click',
  description:
    'A native Mac app that effortlessly cleans annoying metadata files from external drives, making your storage experience seamless across all devices.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl z-50 border-b border-[rgb(var(--gray-200))]">
        <Navigation title={marketing.title} />
      </header>

      {/* Hero Section */}
      <AnimatedSection className="pt-32 pb-24 px-6 max-w-7xl mx-auto relative">
        <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex flex-col lg:w-1/2 space-y-8">
            <h2 className="display-large text-gradient">{marketing.tagline}</h2>
            <p className="body-large text-[rgb(var(--gray-600))]">{marketing.hero.description}</p>
            <a
              download
              href="https://updates.hiddenfilecleaner.app/latest.dmg"
              className="bg-gradient flex flex-col m-auto lg:ml-0 shrink items-center text-white px-16 lg:px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
            >
              <div className="flex flex-row gap-2 items-center md:m-auto">
                <AppleIcon className="w-4 h-4" />
                <span>Download Now</span>
              </div>
              <span className="text-xs text-white font-normal">macOS 14+</span>
            </a>
          </div>
          <div className="lg:w-1/2">
            <Image
              className="hidden md:block"
              src="/hiddenfilecleaner.png"
              alt="Hidden File Cleaner Icon"
              priority
              width={512}
              height={512}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection id="features" className="section-padding px-6 relative overflow-hidden bg-slate-50">
        <div className="absolute inset-0">
          <div className="absolute top-[350px] w-[800px] h-[800px] bg-[radial-gradient(circle,theme(colors.blue.100)_0%,transparent_40%)]" />
          <div className="absolute left-1/2 top-[450px] w-[800px] h-[800px] bg-[radial-gradient(circle,theme(colors.blue.200)_0%,transparent_50%)]" />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="mb-16">
            <div className="px-2 w-[200%] lg:w-full max-w-[1600px] lg:px-4 xl:px-8 2xl:px-16">
              <Image
                src="/screenshot_lightmode.png"
                alt="Hidden File Cleaner Screenshot"
                width={968}
                height={470}
                className="max-w-full lg:m-auto"
              />
            </div>
          </div>
          <h2 className="display-medium text-center mb-16">Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketing.features.map((feature, index) => (
              <div
                key={index}
                className="bg-[hsla(0,0%,98%,.7)] p-8 rounded-2xl shadow-md hover:shadow-lg backdrop-blur-xl transition-shadow"
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
          <div className="bg-white rounded-3xl shadow-lg p-12 max-w-lg mx-auto border border-[rgb(var(--gray-200))]">
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
      <AnimatedSection id="faq" className="section-padding px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="display-medium text-center mb-16">{marketing.faq.title}</h2>
          <div className="max-w-3xl mx-auto">
            {marketing.faq.questions.length === 0 ? (
              <p className="text-center text-[rgb(var(--gray-600))] body-large">FAQ content coming soon...</p>
            ) : (
              // FAQ content will be added here
              <div></div>
            )}
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
