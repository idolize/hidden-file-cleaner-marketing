'use client';

import { Dialog, DialogPanel } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import BarsIcon from '../icons/regular/bars.svg';
import XMarkIcon from '../icons/solid/xmark.svg';

interface NavigationProps {
  title: string;
}

export default function Navigation({ title }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navigationItems = ['Features', 'Pricing', 'FAQ'];

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
        <h1 className="text-xl font-semibold tracking-tight">
          <Link href="/">{title}</Link>
        </h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        {navigationItems.map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className="text-sm text-[rgb(var(--gray-600))] hover:text-[rgb(var(--foreground-rgb))] transition-colors"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button type="button" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
        <BarsIcon className="w-6 h-6 text-[rgb(var(--gray-600))]" />
      </button>

      {/* Mobile Menu Dialog */}
      <Dialog as="div" className="fixed inset-0 z-50 md:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />

        <DialogPanel className="fixed inset-y-0 right-0 w-full max-w-xs bg-white p-6 shadow-xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold">{title}</h2>
            <button type="button" onClick={() => setMobileMenuOpen(false)} className="text-[rgb(var(--gray-600))]">
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            {navigationItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-lg text-[rgb(var(--gray-600))] hover:text-[rgb(var(--foreground-rgb))] transition-colors text-left"
              >
                {item}
              </button>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </nav>
  );
}
