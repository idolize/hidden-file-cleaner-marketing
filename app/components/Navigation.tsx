'use client';

import Link from 'next/link';
import Image from 'next/image';

interface NavigationProps {
  title: string;
}

export default function Navigation({ title }: NavigationProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src="/hiddenfilecleaner.png"
          alt="Hidden File Cleaner Icon"
          width={32}
          height={32}
          className="rounded-lg"
        />
        <h1 className="text-xl font-semibold tracking-tight"><Link href="/">{title}</Link></h1>
      </div>
      <div className="flex space-x-8">
        {['Features', 'Pricing', 'FAQ'].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className="text-sm text-[rgb(var(--gray-600))] hover:text-[rgb(var(--foreground-rgb))] transition-colors"
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
}
