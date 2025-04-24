'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

import ProseDocument from '@/app/components/ProseDocument';
import RedirectHome from '@/app/components/RedirectHome';
import DownloadModal from '../../../components/DownloadModal';

function ActivateBody() {
  const searchParams = useSearchParams();
  const key = searchParams.get('key');
  const email = searchParams.get('email');
  const hasInfo = !!key && !!email;

  return (
    <div>
      {hasInfo ? (
        <DownloadModal>
          {(openModal) => (
            <p className="mb-12">
              To activate your license,{' '}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  openModal();
                }}
              >
                ensure Hidden File Cleaner is installed
              </a>{' '}
              and then click the button below...
            </p>
          )}
        </DownloadModal>
      ) : (
        <p className="mb-12">No license info found. Redirecting home...</p>
      )}

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
