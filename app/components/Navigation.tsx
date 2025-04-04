'use client';

import { Dialog, DialogPanel, DialogBackdrop, DialogTitle } from '@headlessui/react';
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
      <div className="hidden md:flex">
        {navigationItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={(_e) => {
              scrollToSection(item.toLowerCase());
            }}
            className="text-sm text-[rgb(var(--gray-600))] hover:text-[rgb(var(--foreground-rgb))] transition-colors py-2 px-4"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button type="button" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
        <BarsIcon className="w-6 h-6 text-[rgb(var(--gray-600))]" />
      </button>

      {/* Mobile Menu Dialog */}
      <Dialog
        transition
        as="div"
        className="fixed inset-0 z-50 md:hidden transition duration-300 ease-out data-[closed]:opacity-0"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />

        <DialogPanel className="fixed inset-y-0 right-0 w-full max-w-xs bg-[rgb(var(--background-rgb))] p-6 shadow-xl">
          <div className="flex items-center justify-between mb-8">
            <DialogTitle className="text-xl font-semibold">{title}</DialogTitle>
            <button type="button" onClick={() => setMobileMenuOpen(false)} className="text-[rgb(var(--gray-600))]">
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            {navigationItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.toLowerCase());
                }}
                className="text-lg text-[rgb(var(--gray-600))] hover:text-[rgb(var(--foreground-rgb))] transition-colors text-left py-2"
              >
                {item}
              </a>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </nav>
  );
}
