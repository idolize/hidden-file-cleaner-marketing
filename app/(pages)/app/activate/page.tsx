import ProseDocument from '@/app/components/ProseDocument';
import RedirectHome from '../../../components/RedirectHome';

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Activate({ searchParams }: { searchParams: SearchParams }) {
  const { key, email } = await searchParams;
  const hasInfo = !!key && !!email;

  const message = hasInfo
    ? 'To activate your license, ensure Hidden File Cleaner is installed and then click the button below...'
    : 'Redirecting home...';

  return (
    <ProseDocument title="Activate Hidden File Cleaner">
      <p className="mb-12">{message}</p>

      {hasInfo ? (
        <div>
          <small>License key:</small>
          <pre className="mt-1">{key}</pre>
          <small>Email:</small>
          <pre className="mt-1">{email}</pre>

          <p className="mt-14">
            <a
              className="bg-gradient no-underline flex flex-row gap-3 items-center justify-center text-white px-8 py-4 rounded-full text-sm min-[415px]:text-lg font-medium hover:opacity-90 transition-opacity"
              href={`hiddenfilecleaner://activate?key=${encodeURIComponent(key as string)}&email=${encodeURIComponent(email as string)}`}
            >
              Activate License in App
            </a>
          </p>
        </div>
      ) : (
        <RedirectHome />
      )}
    </ProseDocument>
  );
}
