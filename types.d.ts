declare module '*.mdx' {
  export const meta: {
    lastUpdated?: string;
  };
}

declare module '*.yaml' {
  const content: unknown;
  export default content;
}
