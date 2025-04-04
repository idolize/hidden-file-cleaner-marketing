// Shared styles for components

// Section styles
export const sectionStyles = {
  base: 'section-padding px-6',
  withAltBg: 'section-padding px-6 relative overflow-hidden bg-[rgb(var(--section-alt))]',
};

// Gradient styles
export const gradientStyles = {
  heroGradient: 'hero-gradient',
  heroGradientAlt: 'hero-gradient-alt',
};

// Card styles
export const cardStyles = {
  featureCard:
    'bg-[rgb(var(--background-rgb))]/70 p-8 rounded-2xl shadow-md hover:shadow-lg backdrop-blur-xl transition-shadow',
  pricingCard:
    'bg-[rgb(var(--background-rgb))] rounded-3xl shadow-lg p-12 max-w-lg mx-auto border border-[rgb(var(--gray-200))]',
};

// Text styles
export const textStyles = {
  displayLarge: 'display-large',
  displayMedium: 'display-medium',
  bodyLarge: 'body-large',
  grayText: 'text-[rgb(var(--gray-600))]',
};

// Layout styles
export const layoutStyles = {
  maxWidth: 'max-w-7xl mx-auto',
  maxWidthNarrow: 'max-w-3xl mx-auto',
  maxWidthWide: 'max-w-[1600px]',
};
