import Icon, { type IconName } from './Icon';
import { STATUS_LABEL } from '../utils/status';
import type { Status } from '../utils/types';

const STATUS_ICON: Record<Status, IconName> = {
  normal: 'check',
  caution: 'warning',
  warning: 'warning',
  advisory: 'info',
};

interface StatusBadgeProps {
  status: Status;
  /** Overrides the default label ("Normal", "Caution"…) */
  label?: string;
  size?: 'sm' | 'md';
}

export default function StatusBadge({ status, label, size = 'sm' }: StatusBadgeProps) {
  return (
    <span className={`badge badge--${status} badge--${size}`}>
      <Icon name={STATUS_ICON[status]} size={size === 'sm' ? 14 : 16} />
      {label ?? STATUS_LABEL[status]}
    </span>
  );
}
