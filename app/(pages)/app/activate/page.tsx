'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

import ProseDocument from '@/app/components/ProseDocument';
import RedirectHome from '@/app/components/RedirectHome';

function ActivateBody() {
  const searchParams = useSearchParams();
  const key = searchParams.get('key');
  const email = searchParams.get('email');
  const hasInfo = !!key && !!email;
  const message = hasInfo
    ? 'To activate your license, ensure Hidden File Cleaner is installed and then click the button below...'
    : 'No license info found. Redirecting home...';

  return (
    <div>
      <p className="mb-12">{message}</p>

      {hasInfo ? (
        <div>
          <hr />
          <small>License key:</small>
          <pre className="mt-1">{key}</pre>
          <small>Email:</small>
          <pre className="mt-1">{email}</pre>

          <p className="mt-14">
            <a
              className="bg-gradient no-underline flex flex-row gap-3 items-center justify-center text-white px-8 py-4 rounded-full text-sm min-[415px]:text-lg font-medium hover:opacity-90 transition-opacity"
              href={`hiddenfilecleaner://activate?key=${encodeURIComponent(key)}&email=${encodeURIComponent(email)}`}
            >
              Activate License in App
            </a>
          </p>
        </div>
      ) : (
        <RedirectHome />
      )}
    </div>
  );
}

export default function Activate() {
  return (
    <ProseDocument title="Activate Hidden File Cleaner">
      {/* Suspense is used for SSR rendering fallback */}
      <Suspense fallback={<p className="text-center opacity-50">Loading...</p>}>
        <ActivateBody />
      </Suspense>
    </ProseDocument>
  );
}
