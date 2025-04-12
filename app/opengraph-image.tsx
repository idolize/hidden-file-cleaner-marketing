import { ImageResponse } from 'next/og';
import marketing from './content/marketing.yaml';
import SocialPreviewImage from './components/SocialPreviewImage';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

// Image metadata
export const alt = marketing.pageTitle;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Image generation
// https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#generate-images-using-code-js-ts-tsx
export default async function Image() {
  // Load the app icon, screenshot, and fonts
  const [iconData, screenshotData, interRegular, interBold] = await Promise.all([
    readFile(join(process.cwd(), 'public', 'hiddenfilecleaner.png')),
    readFile(join(process.cwd(), 'public', 'screenshot_lightmode_nofade.png')),
    readFile(join(process.cwd(), 'public', 'Inter-Regular.woff')),
    readFile(join(process.cwd(), 'public', 'Inter-Bold.woff')),
  ]);
  const iconSrc = Buffer.from(iconData).toString('base64');
  const screenshotSrc = Buffer.from(screenshotData).toString('base64');

  return new ImageResponse(
    (
      <SocialPreviewImage
        iconSrc={iconSrc}
        screenshotSrc={screenshotSrc}
        height={size.height}
        padding={72}
        iconSize={120}
        titleSize={34}
        headingSize={70}
        descriptionSize={24}
      />
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: interRegular,
          weight: 400,
          style: 'normal',
        },
        {
          name: 'Inter',
          data: interBold,
          weight: 800,
          style: 'normal',
        },
      ],
    }
  );
}
