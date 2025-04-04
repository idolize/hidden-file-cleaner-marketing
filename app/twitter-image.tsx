import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import SocialPreviewImage from './components/SocialPreviewImage';

// Image metadata
export const alt = 'Hidden File Cleaner - Remove macOS metadata clutter in a single click';
export const size = {
  width: 1200,
  height: 600, // Twitter prefers 2:1 ratio
};
export const contentType = 'image/png';

// Image generation
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
        padding={62}
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
