import Link from 'next/link';
import ArrowLeftIcon from '@/app/icons/regular/arrow-left.svg';

export default function ProseDocument({
  title,
  children,
  meta,
}: {
  title: string;
  children: React.ReactNode;
  meta?: { lastUpdated?: string };
}) {
  return (
    <div className="min-h-screen mb-16">
      {/* Header */}
      <header className="bg-[rgb(var(--section-alt))] border-b border-[rgb(var(--gray-200))] py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-4">
            <Link
              href="/"
              className="text-sm text-[rgb(var(--gray-600))] hover:text-[rgb(var(--foreground-rgb))] transition-colors flex items-center"
            >
              <ArrowLeftIcon className="h-3 w-3 mr-1.5" />
              Back to Home
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-[rgb(var(--foreground-rgb))]">{title}</h1>
          {meta?.lastUpdated && <p className="mt-2 text-[rgb(var(--gray-600))]">Last updated: {meta.lastUpdated}</p>}
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-6 py-12 max-w-3xl">
        <article className="prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white dark:prose-invert">
          {children}
        </article>
      </div>
    </div>
  );
}
