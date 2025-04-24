'use client';

import DownloadModal from './DownloadModal';
import AppleIcon from '@/app/icons/brands/apple.svg';

interface DownloadButtonProps {
  hideSubtext?: boolean;
  className?: string;
}

export default function DownloadButton({ className, hideSubtext }: DownloadButtonProps) {
  return (
    <DownloadModal>
      {(openModal) => (
        <div className={`flex flex-col gap-2 m-auto ${className}`}>
          <button
            onClick={openModal}
            className="bg-gradient flex flex-row gap-2 items-center text-left text-white px-16 lg:px-8 py-4 rounded-full text-sm min-[345px]:text-lg font-medium hover:opacity-90 transition-opacity"
          >
            <AppleIcon className="w-5 h-5" />
            <span className="line-clamp-1">Download Now</span>
          </button>
          {!hideSubtext && (
            <div className="flex flex-row gap-2 items-center justify-center text-xs text-[rgb(var(--gray-600))]">
              <span>7 Day Free Trial</span>
              <span>•</span>
              <span>macOS 14+</span>
            </div>
          )}
        </div>
      )}
    </DownloadModal>
  );
}
