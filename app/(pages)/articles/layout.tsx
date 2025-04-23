import Link from 'next/link';
import HeaderMain from '../../components/HeaderMain';
import ProseDocument from '../../components/ProseDocument';
import Image from 'next/image';
import marketing from '@/app/content/marketing.yaml';

export default function ArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <HeaderMain>
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
              <Link href="/">{marketing.title}</Link>
            </h1>
          </div>
        </nav>
      </HeaderMain>
      <ProseDocument className="mt-16">{children}</ProseDocument>
    </div>
  );
}
