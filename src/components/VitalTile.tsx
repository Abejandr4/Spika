import Icon from './Icon';
import StatusBadge from './StatusBadge';
import type { Vital } from '../utils/types';

const TREND_LABEL = { up: '↑ rising', down: '↓ falling', stable: '→ stable' } as const;

export default function VitalTile({ vital }: { vital: Vital }) {
  return (
    <div className={`vital${vital.staleFor ? ' vital--stale' : ''}`}>
      <div className="vital__label">{vital.label}</div>
      <div className="vital__value num">
        {vital.value} <span className="vital__unit">{vital.unit}</span>
      </div>
      <div>
        <StatusBadge status={vital.status} />
      </div>
      {vital.staleFor ? (
        <div className="vital__stale">
          <Icon name="clock" size={12} /> Old reading · {vital.staleFor}
        </div>
      ) : (
        <div className="vital__time">
          {vital.time}
          {vital.trend && ` · ${TREND_LABEL[vital.trend]}`}
        </div>
      )}
    </div>
  );
}
