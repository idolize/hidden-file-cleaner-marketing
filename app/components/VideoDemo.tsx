'use client';

import { useState } from 'react';
import { Dialog, DialogPanel, DialogTitle, CloseButton } from '@headlessui/react';
import PlayIcon from '@/app/icons/solid/play.svg';
import XMarkIcon from '@/app/icons/solid/xmark.svg';

export default function VideoDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-3 rounded-full border-2 border-[rgb(var(--blue-600))] hover:border-[rgb(var(--blue-700))] hover:bg-[rgb(var(--blue-700))] hover:text-white font-semibold px-8 py-4 shadow-lg text-lg transition focus:outline-none focus:ring-2 focus:ring-[rgb(var(--blue-600))] focus:ring-offset-2"
        aria-label="Watch demo video"
      >
        <span className="flex items-center justify-center rounded-full w-10 h-10 transition">
          <PlayIcon className="w-6 h-6" />
        </span>
        <span className="font-semibold">Watch Demo Video</span>
      </button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/40 dark:bg-black/80 transition-opacity" aria-hidden="true" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 p-0 text-left align-middle shadow-2xl transition-all">
            <div className="flex flex-col">
              <div className="flex justify-between items-center px-6 py-4">
                <DialogTitle>
                  <span className="invisible">Hidden File Cleaner – Demo Video</span>
                </DialogTitle>
                <CloseButton
                  aria-label="Close"
                  className="absolute top-5 right-5 text-[rgb(var(--gray-600))] hover:text-[rgb(var(--foreground-rgb))]"
                >
                  <XMarkIcon className="w-5 h-5" />
                </CloseButton>
              </div>
              <div className="aspect-video w-full bg-black">
                <iframe
                  className="w-full h-full rounded-b-2xl"
                  src="https://www.youtube.com/embed/OX5a6N-6ijE?si=tL3l1_n4B4BWmnBA&vq=hd720&quality=high"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
