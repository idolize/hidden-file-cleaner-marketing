'use client';

import { useEffect } from 'react';

export default function BuyButton() {
  useEffect(() => {
    // We need to ensure the button is rendered before the script is loaded
    const script = document.createElement('script');
    script.src = 'https://app.lemonsqueezy.com/js/lemon.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <a
      href="https://store.hiddenfilecleaner.app/buy/5c463630-16b6-41d6-88f2-c6e209f0ec99"
      className="lemonsqueezy-button block bg-gradient text-white px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity w-full mb-6"
    >
      Purchase Now
    </a>
  );
}
