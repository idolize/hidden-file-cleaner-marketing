import AppleIcon from '@/app/icons/brands/apple.svg';

interface DownloadButtonProps {
  className?: string;
}

export default function DownloadButton({ className }: DownloadButtonProps) {
  return (
    <div className={`flex flex-col gap-2 m-auto ${className}`}>
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
  );
}
