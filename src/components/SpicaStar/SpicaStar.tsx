import { useRef } from 'react';
import './SpicaStar.css';

export type SpicaMood = 'happy' | 'neutral' | 'concerned';

export interface SpicaStarProps {
  /** Rendered width and height in px */
  size?: number;
  mood?: SpicaMood;
  /** Optional speech bubble text, e.g. "Hi!" */
  speech?: string;
  /** Accessible name. Pass "" to mark it decorative. */
  label?: string;
  className?: string;
}

/** Colors of the mascot, kept as variables so the 3D version can reuse them. */
export const SPICA_COLORS = {
  body: '#9ED9D2',
  outline: '#2B2629',
  face: '#2A2340',
};

const MOUTH: Record<SpicaMood, string> = {
  happy: 'M44 59 Q50 64 56 59',
  neutral: 'M44 60 L56 60',
  concerned: 'M44 62 Q50 57 56 62',
};

/**
 * Spica, the star mascot.
 *
 * This is a 2D placeholder. To swap in Three.js later:
 *  1. Mount your renderer inside `stageRef.current` in a useEffect.
 *  2. Remove (or keep as a loading fallback) the <svg> below.
 * The wrapper size and the speech bubble stay the same, so the pages
 * that use <SpicaStar /> don't need to change.
 */
export default function SpicaStar({
  size = 120,
  mood = 'happy',
  speech,
  label = 'Spica',
  className = '',
}: SpicaStarProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const decorative = label === '';

  return (
    <div className={`spica ${className}`} style={{ width: size, height: size }}>
      <div ref={stageRef} className="spica__stage">
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          role={decorative ? undefined : 'img'}
          aria-label={decorative ? undefined : label}
          aria-hidden={decorative ? 'true' : undefined}
        >
          <path
            d="M50 6 C54 6 56 26 62 32 C68 38 92 36 93 41 C94 46 74 58 72 66 C70 74 80 92 76 95 C72 98 56 84 50 84 C44 84 28 98 24 95 C20 92 30 74 28 66 C26 58 6 46 7 41 C8 36 32 38 38 32 C44 26 46 6 50 6 Z"
            fill={SPICA_COLORS.body}
            stroke={SPICA_COLORS.outline}
            strokeWidth={2.5}
          />
          <circle cx="42" cy="50" r="3.2" fill={SPICA_COLORS.face} />
          <circle cx="58" cy="50" r="3.2" fill={SPICA_COLORS.face} />
          <path
            d={MOUTH[mood]}
            fill="none"
            stroke={SPICA_COLORS.face}
            strokeWidth={2.5}
            strokeLinecap="round"
          />
        </svg>
      </div>
      {speech && <div className="spica__bubble">{speech}</div>}
    </div>
  );
}
