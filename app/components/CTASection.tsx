import DownloadButton from './DownloadButton';
import { sectionStyles, textStyles, layoutStyles } from '../styles/shared';

interface CTASectionProps {
  description: string;
}

export default function CTASection({ description }: CTASectionProps) {
  return (
    <section className={`${sectionStyles.base} pt-3! bg-[rgb(var(--section-alt))]`}>
      <div className={`${layoutStyles.maxWidth} flex justify-center`}>
        <div
          className={`text-center w-full flex flex-col items-center border border-[rgb(var(--gray-200))] rounded-md p-5 md:p-12 max-w-3xl`}
        >
          <p className={`${textStyles.bodyLarge} mb-8 max-w-2xl mx-auto`}>{description}</p>
          <DownloadButton hideSubtext />
        </div>
      </div>
    </section>
  );
}
