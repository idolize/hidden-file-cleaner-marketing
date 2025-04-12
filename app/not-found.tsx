import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="display-large text-[rgb(var(--foreground-rgb))] mb-4">Page Not Found</h1>
        <p className="body-large text-[rgb(var(--foreground-rgb))] mb-8 max-w-2xl mx-auto">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back to the
          home page.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
