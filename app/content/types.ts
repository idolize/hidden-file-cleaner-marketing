export interface Feature {
  title: string;
  description: string;
}

export interface FAQQuestion {
  question: string;
  answer: string;
}

export interface Pricing {
  title: string;
  description: string;
  price: number;
  currency: string;
  features: string[];
  volumePricing: string;
}

export interface FAQ {
  title: string;
  questions: FAQQuestion[];
}

export interface Marketing {
  title: string;
  tagline: string;
  hero: {
    description: string;
  };
  embed: {
    tagline: string;
  };
  features: Feature[];
  pricing: Pricing;
  faq: FAQ;
  cta: {
    description: string;
  };
}
