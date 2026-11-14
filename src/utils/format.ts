/** 75 -> "01:15" */
export function formatSeconds(totalSeconds: number): string {
  const s = Math.max(0, Math.floor(totalSeconds));
  const mm = String(Math.floor(s / 60)).padStart(2, '0');
  const ss = String(s % 60).padStart(2, '0');
  return `${mm}:${ss}`;
}

/** Current local time as "HH:MM" */
export function nowHHMM(): string {
  const d = new Date();
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

/** Percentage clamped to 0–100 */
export function percent(value: number, max: number): number {
  if (max <= 0) return 0;
  return Math.min(100, Math.max(0, (value / max) * 100));
}

/**
 * Builds an SVG path "M x y L x y …" for a simple line chart.
 * The y axis is inverted (higher value = higher on screen).
 */
export function buildLinePath(
  values: number[],
  width: number,
  height: number,
  min: number,
  max: number,
  padding = 6,
): string {
  if (values.length === 0) return '';
  const range = max - min || 1;
  const stepX = values.length > 1 ? width / (values.length - 1) : 0;
  return values
    .map((v, i) => {
      const x = i * stepX;
      const y = padding + (1 - (v - min) / range) * (height - padding * 2);
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(' ');
}

/** y position of a single value using the same scale as buildLinePath */
export function valueToY(value: number, height: number, min: number, max: number, padding = 6): number {
  const range = max - min || 1;
  return padding + (1 - (value - min) / range) * (height - padding * 2);
}
