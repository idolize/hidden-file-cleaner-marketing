import marketing from '@/app/content/marketing.yaml';

/* eslint-disable @next/next/no-img-element */
interface SocialPreviewImageProps {
  iconSrc: string;
  screenshotSrc: string;
  height: number;
  padding?: number;
  iconSize?: number;
  titleSize?: number;
  headingSize?: number;
  descriptionSize?: number;
}

export default function SocialPreviewImage({
  iconSrc,
  screenshotSrc,
  height,
  padding = 70,
  iconSize = 96,
  titleSize = 32,
  headingSize = 64,
}: SocialPreviewImageProps) {
  return (
    <div
      style={{
        background: 'linear-gradient(to right, rgb(15, 23, 42), rgb(12, 74, 110))',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Left side - Text content */}
      <div
        style={{
          width: '45%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: `${padding}px`,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Main heading */}
        <h1
          style={{
            fontSize: `${headingSize}px`,
            textAlign: 'left',
            fontWeight: 800,
            color: 'white',
            margin: 0,
            lineHeight: 1.3,
            letterSpacing: '-0.02em',
            marginBottom: `${Math.round(padding * 0.4)}px`,
          }}
        >
          {marketing.embed.tagline}
        </h1>

        {/* App icon and name */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: `${padding / 2}px`,
          }}
        >
          <img
            src={`data:image/png;base64,${iconSrc}`}
            alt="Hidden File Cleaner Icon"
            width={iconSize}
            height={iconSize}
            style={{
              borderRadius: `${Math.round(iconSize / 4)}px`,
              marginRight: `${Math.round(iconSize / 4)}px`,
            }}
          />
          <h2
            style={{
              fontSize: `${titleSize}px`,
              fontWeight: 800,
              color: 'white',
              margin: 0,
              opacity: 0.9,
            }}
          >
            {marketing.title}
          </h2>
        </div>
      </div>

      {/* Right side - App preview */}
      <div
        style={{
          width: '80%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <img
          src={`data:image/png;base64,${screenshotSrc}`}
          alt="Hidden File Cleaner Screenshot"
          style={{
            position: 'absolute',
            right: '-5%',
            top: '50%',
            transform: 'translateY(-50%)',
            borderRadius: '12px',
            boxShadow: '0 0 100px rgba(0,0,0,0.5)',
          }}
        />
      </div>

      {/* Decorative gradient orb */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '30%',
          width: `${height}px`,
          height: `${height}px`,
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(40px)',
          borderRadius: '50%',
        }}
      />
    </div>
  );
}
