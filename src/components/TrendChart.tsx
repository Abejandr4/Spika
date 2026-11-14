import { buildLinePath, valueToY } from '../utils/format';
import type { Status, TrendSeries } from '../utils/types';

interface TrendChartProps {
  series: TrendSeries;
  /** Line color follows the latest status */
  status?: Status;
  height?: number;
}

const VIEW_W = 300;

/** Simple line chart with a dashed "your normal" baseline. */
export default function TrendChart({ series, status = 'normal', height = 70 }: TrendChartProps) {
  const all = [...series.values, series.baseline];
  const min = Math.min(...all) - 4;
  const max = Math.max(...all) + 4;
  const path = buildLinePath(series.values, VIEW_W, height, min, max);
  const baseY = valueToY(series.baseline, height, min, max);

  return (
    <div className="trend">
      <svg
        width="100%"
        height={height}
        viewBox={`0 0 ${VIEW_W} ${height}`}
        preserveAspectRatio="none"
        role="img"
        aria-label={`${series.title}. Latest ${series.values[series.values.length - 1]} ${series.unit}. ${series.baselineLabel}.`}
      >
        <path d={`M0 ${baseY} L${VIEW_W} ${baseY}`} stroke="var(--color-line)" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
        <path
          d={path}
          fill="none"
          className={`trend__line trend__line--${status}`}
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="trend__axis">
        <span>{series.startLabel}</span>
        <span>{series.baselineLabel}</span>
        <span>{series.endLabel}</span>
      </div>
    </div>
  );
}
