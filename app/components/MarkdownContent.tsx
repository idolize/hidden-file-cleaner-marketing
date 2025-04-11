import React from 'react';
import { micromark } from 'micromark';

interface MarkdownContentProps {
  as?: 'div' | 'span';
  content: string;
  className?: string;
}

/**
 * A component that renders Markdown content
 * This allows for basic formatting like bold text and lists
 */
export default function MarkdownContent({ content, as: Component = 'div', className = '' }: MarkdownContentProps) {
  const result = micromark(content);
  return <Component className={className} dangerouslySetInnerHTML={{ __html: result }} />;
}
