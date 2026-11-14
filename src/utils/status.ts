import type { Status } from './types';

/** Labels for the four status levels used across the app. */
export const STATUS_LABEL: Record<Status, string> = {
  normal: 'Normal',
  caution: 'Caution',
  warning: 'Warning',
  advisory: 'Advisory',
};

/** CSS variable names (see styles/theme.css) for each status. */
export const STATUS_COLOR_VAR: Record<Status, string> = {
  normal: 'var(--status-normal)',
  caution: 'var(--status-caution)',
  warning: 'var(--status-warning)',
  advisory: 'var(--status-advisory)',
};
