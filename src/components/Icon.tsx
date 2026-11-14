import type { ReactNode } from 'react';

export type IconName =
  | 'menu'
  | 'signal'
  | 'noSignal'
  | 'info'
  | 'warning'
  | 'check'
  | 'clock'
  | 'lock'
  | 'send'
  | 'close'
  | 'arrowRight'
  | 'arrowUp';

const PATHS: Record<IconName, ReactNode> = {
  menu: (
    <>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </>
  ),
  signal: (
    <>
      <path d="M4 18v-2" />
      <path d="M9 18v-6" />
      <path d="M14 18v-10" />
      <path d="M19 18v-14" />
    </>
  ),
  noSignal: (
    <>
      <path d="M4 18v-2" />
      <path d="M9 18v-6" />
      <path d="M3 3l18 18" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6" />
      <path d="M12 16v.5" />
    </>
  ),
  warning: (
    <>
      <path d="M12 3l10 18H2z" />
      <path d="M12 10v5" />
      <path d="M12 18v.5" />
    </>
  ),
  check: <path d="M5 12l5 5 9-10" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </>
  ),
  send: <path d="M4 12l16-8-6 16-3-7z" />,
  close: (
    <>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </>
  ),
  arrowUp: (
    <>
      <path d="M12 19V5" />
      <path d="M6 11l6-6 6 6" />
    </>
  ),
};

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
}

/** Stroke icons, decorative by default (aria-hidden). */
export default function Icon({ name, size = 16, color = 'currentColor', className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
