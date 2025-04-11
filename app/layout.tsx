import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from './components/Footer';
import './globals.css';
import marketing from './content/marketing.yaml';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: marketing.pageTitle,
  description: marketing.hero.description,
  metadataBase: new URL('https://hiddenfilecleaner.app'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
      </head>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
