declare module '*.mdx' {
  export const meta: {
    lastUpdated?: string;
  };
}

declare module '*.yaml' {
  const content: unknown;
  export default content;
}

declare module '@/app/content/marketing.yaml' {
  import { Marketing } from './app/content/types';
  const content: Marketing;
  export default content;
}
