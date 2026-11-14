import { Link } from 'react-router-dom';
import Icon from './Icon';
import StatusBadge from './StatusBadge';
import type { BodyPart } from '../utils/types';

interface BodyPartPanelProps {
  part: BodyPart;
  onClose: () => void;
  measurePath?: string;
}

export default function BodyPartPanel({ part, onClose, measurePath = '/measure' }: BodyPartPanelProps) {
  return (
    <aside className={`card body-panel body-panel--${part.status}`} aria-label={part.label}>
      <div className="body-panel__head">
        <h2 className="body-panel__title">
          {part.number} · {part.label}
        </h2>
        <button type="button" className="icon-btn icon-btn--outline" aria-label="Close" onClick={onClose}>
          <Icon name="close" size={18} />
        </button>
      </div>
      <div>
        <StatusBadge status={part.status} size="md" />
      </div>
      <p className="body-panel__summary">{part.summary}</p>

      <div>
        <div className="eyebrow">What it does</div>
        <p className="body-panel__text">{part.whatItDoes}</p>
      </div>
      <div>
        <div className="eyebrow">What space does to it</div>
        <p className="body-panel__text">{part.spaceEffect}</p>
      </div>
      <div>
        <div className="eyebrow">How to care for it</div>
        <p className="body-panel__text">{part.care}</p>
      </div>

      <div className="spacer" />
      <Link to={measurePath} className="btn btn--primary btn--block btn--lg">
        Measure now
      </Link>
    </aside>
  );
}
