'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function RedirectHome() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace('/');
    }, 2000);
    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div>
      <Link href="/" replace>
        Go Home
      </Link>
    </div>
  );
}
