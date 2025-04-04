'use client';

import { useState, useRef, useEffect } from 'react';
import ChevronDownIcon from '../icons/regular/chevron-down.svg';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState<number | undefined>(undefined);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        setHeight(entries[0].contentRect.height);
      });

      resizeObserver.observe(contentRef.current);
      return () => resizeObserver.disconnect();
    }
  }, []);

  return (
    <div className="flex w-full flex-col gap-0 rounded-md shadow-sm bg-[rgb(var(--background-rgb))]/70 backdrop-blur-xl">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ease-in-out border border-[rgb(var(--gray-200))] px-4 flex h-fit w-full items-center justify-between gap-1 break-words py-4 text-left transition-all duration-150 hover:bg-[rgb(var(--gray-100))] focus:bg-[rgb(var(--gray-100))] ${
          isOpen ? 'rounded-b-none border-b-transparent' : ''
        }`}
      >
        <p className="flex-grow break-words font-medium text-base sm:text-base md:text-base lg:text-lg">{question}</p>
        <ChevronDownIcon className={`flex-none w-5 h-5 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      <div
        className="overflow-hidden transition-[height] duration-150 ease-out"
        style={{ height: isOpen ? (height ? `${height}px` : 'auto') : '0' }}
      >
        <div ref={contentRef}>
          <div className="border border-t-0 border-[rgb(var(--gray-200))] rounded-b-md px-4 py-4">
            <div className="text-base leading-relaxed text-[rgb(var(--gray-600))]">
              <p>{answer}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
