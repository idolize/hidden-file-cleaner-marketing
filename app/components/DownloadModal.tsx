'use client';

import { Dialog, DialogPanel, DialogBackdrop, DialogTitle, CloseButton } from '@headlessui/react';
import Link from 'next/link';
import { useState, useEffect, useCallback, ReactNode } from 'react';
import { UAParser } from 'ua-parser-js';

import DownloadIcon from '@/app/icons/solid/download.svg';
import XMarkIcon from '@/app/icons/solid/xmark.svg';

const parser = new UAParser();

interface DownloadModalProps {
  children: (openModal: () => void) => ReactNode;
}

export default function DownloadModal({ children }: DownloadModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMac, setIsMac] = useState(true);

  useEffect(() => {
    // Check if user is on macOS
    const result = parser.getResult();
    setIsMac(result.os.name === 'macOS');
  }, []);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
      {children(handleOpen)}

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        transition
        className="relative z-50 transition duration-300 ease-out data-[closed]:opacity-0"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/50" />

        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 bg-[rgb(var(--background-rgb))] border border-[rgb(var(--gray-200))] p-12 rounded-lg relative">
            <div className="flex justify-between items-start">
              <DialogTitle className="text-xl font-bold text-[rgb(var(--foreground-rgb))]">
                Download Hidden File Cleaner
              </DialogTitle>
              <CloseButton
                aria-label="Close"
                className="absolute top-5 right-5 text-[rgb(var(--gray-600))] hover:text-[rgb(var(--foreground-rgb))]"
              >
                <XMarkIcon className="w-5 h-5" />
              </CloseButton>
            </div>

            <p className="text-sm text-[rgb(var(--gray-600))]">
              Compatible with macOS 14 Sonoma and all later versions.
            </p>

            {!isMac && (
              <div className="bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-900 rounded-md p-4 text-yellow-800 dark:text-yellow-200">
                <p className="text-sm">
                  <strong>NOTE:</strong> Hidden File Cleaner only works on macOS desktop computers.
                </p>
              </div>
            )}

            <div className="space-y-6">
              <a
                href="https://updates.hiddenfilecleaner.app/latest.dmg"
                download
                className="bg-gradient flex flex-row gap-3 items-center justify-center text-white px-8 py-4 rounded-full text-sm min-[415px]:text-lg font-medium hover:opacity-90 transition-opacity w-full"
              >
                <DownloadIcon className="w-4 h-4" />
                <span className="line-clamp-1">Download (Universal)</span>
              </a>

              <div className="space-y-4">
                <h3 className="font-semibold text-[rgb(var(--foreground-rgb))]">Installation Instructions:</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-[rgb(var(--foreground-rgb))]">
                  <li>Open the downloaded .dmg file</li>
                  <li>Drag the Hidden File Cleaner app to the Applications folder</li>
                  <li>Launch the app from your Applications folder</li>
                </ol>

                <p className="text-sm text-[rgb(var(--gray-600))]">
                  By downloading, you agree to our{' '}
                  <Link
                    target="_blank"
                    href="/eula"
                    className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    End User License Agreement
                  </Link>
                </p>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
