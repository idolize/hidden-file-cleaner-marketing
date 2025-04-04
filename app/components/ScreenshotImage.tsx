import { getImageProps } from 'next/image';

interface ScreenshotImageProps {
  name: string;
  className?: string;
}

// https://nextjs.org/docs/pages/api-reference/components/image#theme-detection-picture
export default function ScreenshotImage({ name, className }: ScreenshotImageProps) {
  const common = { alt: `Screenshot of ${name}`, width: 968, height: 470 };
  const {
    props: { src: dark },
  } = getImageProps({ ...common, src: '/screenshot_darkmode.png' });
  const {
    props: { src: light, ...rest },
  } = getImageProps({ ...common, src: '/screenshot_lightmode.png' });
  console.log(light, dark, rest);

  return (
    <picture className={className}>
      <source media="(prefers-color-scheme: dark)" srcSet={dark} />
      <source media="(prefers-color-scheme: light)" srcSet={light} />
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img {...rest} className={className} />
    </picture>
  );
}
