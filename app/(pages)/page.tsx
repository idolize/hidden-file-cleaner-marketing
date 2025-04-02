'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CheckIcon from '@/app/icons/solid/check.svg'
import marketing from '@/content/marketing.json';

export default function Home() {
  const sections = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    sections.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index: number) => {
    sections.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  const setSectionRef = (index: number) => (el: HTMLDivElement | null) => {
    sections.current[index] = el;
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl z-50 border-b border-[rgb(var(--gray-200))]">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-xl font-semibold tracking-tight"><Link href="/">{marketing.title}</Link></h1>
          <div className="flex space-x-8">
            {['Features', 'Pricing', 'FAQ'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(index + 1)}
                className="text-sm text-[rgb(var(--gray-600))] hover:text-[rgb(var(--foreground-rgb))] transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        ref={setSectionRef(0)}
        className="pt-32 pb-24 px-6 max-w-7xl mx-auto opacity-0 translate-y-8 transition-all duration-700"
      >
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="display-large text-gradient pb-1">
              {marketing.tagline}
            </h2>
            <p className="body-large text-[rgb(var(--gray-600))]">
              {marketing.hero.description}
            </p>
            <button className="bg-gradient text-white px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity">
              Download Now
            </button>
          </div>
          <div className="lg:w-1/2">
              <Image
                src="/screenshot.png"
                alt="Hidden File Cleaner Screenshot"
                width={774}
                height={581}
                className=""
                priority
              />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        ref={setSectionRef(1)}
        className="section-padding px-6 bg-[rgb(var(--gray-50))] opacity-0 translate-y-8 transition-all duration-700"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="display-medium text-center mb-16">Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketing.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-[rgb(var(--gray-600))]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        ref={setSectionRef(2)}
        className="section-padding px-6 opacity-0 translate-y-8 transition-all duration-700"
      >
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
                  <CheckIcon className="w-5 h-5 text-[rgb(var(--blue-600))] mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="bg-gradient text-white px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity w-full mb-6">
              Purchase Now
            </button>
            <p className="text-sm text-[rgb(var(--gray-600))]">
              {marketing.pricing.volumePricing}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        ref={setSectionRef(3)}
        className="section-padding px-6 bg-[rgb(var(--gray-50))] opacity-0 translate-y-8 transition-all duration-700"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="display-medium text-center mb-16">
            {marketing.faq.title}
          </h2>
          <div className="max-w-3xl mx-auto">
            {marketing.faq.questions.length === 0 ? (
              <p className="text-center text-[rgb(var(--gray-600))] body-large">
                FAQ content coming soon...
              </p>
            ) : (
              // FAQ content will be added here
              <div></div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
