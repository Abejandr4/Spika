import type { CSSProperties, ReactNode } from 'react';

interface CardProps {
  /** Small uppercase label at the top of the card */
  eyebrow?: ReactNode;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  as?: 'section' | 'div' | 'aside' | 'article';
  ariaLabel?: string;
}

export default function Card({ eyebrow, children, className = '', style, as = 'section', ariaLabel }: CardProps) {
  const Tag = as;
  return (
    <Tag className={`card ${className}`} style={style} aria-label={ariaLabel}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      {children}
    </Tag>
  );
}
