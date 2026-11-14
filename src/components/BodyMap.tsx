import type { BodyPart } from '../utils/types';

interface BodyMapProps {
  parts: BodyPart[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  /** Caption shown above the figure */
  caption?: string;
}

/**
 * Clickable body figure. The SVG silhouette is a placeholder:
 * replace `.bodymap__figure` with a 3D model (Spline / Three.js)
 * and keep the hotspot buttons positioned on top.
 */
export default function BodyMap({ parts, selectedId, onSelect, caption }: BodyMapProps) {
  return (
    <div className="bodymap card">
      {caption && <div className="bodymap__caption">{caption}</div>}
      <div className="bodymap__stage">
        <svg
          className="bodymap__figure"
          viewBox="0 0 100 200"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <circle cx="50" cy="20" r="13" fill="var(--color-sand)" stroke="#B7ABA6" />
          <path
            d="M30 40 Q50 34 70 40 L74 100 L64 100 L62 190 L52 190 L50 120 L48 190 L38 190 L36 100 L26 100 Z"
            fill="var(--color-sand)"
            stroke="#B7ABA6"
          />
        </svg>
        {parts.map((p) => (
          <button
            key={p.id}
            type="button"
            className={`hotspot hotspot--${p.status}${selectedId === p.id ? ' is-selected' : ''}`}
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            aria-label={`${p.label}, ${p.status}`}
            aria-pressed={selectedId === p.id}
            onClick={() => onSelect(p.id)}
          >
            {p.number}
          </button>
        ))}
      </div>
    </div>
  );
}
