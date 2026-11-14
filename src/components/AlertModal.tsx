import { Link } from 'react-router-dom';
import Icon from './Icon';
import { STATUS_LABEL } from '../utils/status';
import type { HealthAlert } from '../utils/types';

interface AlertModalProps {
  alert: HealthAlert;
  onDismiss: () => void;
}

export default function AlertModal({ alert, onDismiss }: AlertModalProps) {
  return (
    <div className="modal-backdrop">
      <div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby={`alert-${alert.id}-title`}
        className={`modal modal--${alert.status}`}
      >
        <div>
          <span className={`badge badge--${alert.status} badge--md`}>
            <Icon name="warning" />
            {STATUS_LABEL[alert.status]} · new alert
          </span>
        </div>
        <h2 id={`alert-${alert.id}-title`} className="modal__title">
          {alert.title}
        </h2>
        <p className="modal__text">{alert.message}</p>
        <div className="modal__actions">
          <Link to={alert.actionPath} className={`btn btn--${alert.status}`}>
            {alert.actionLabel}
          </Link>
          <button type="button" className="btn btn--ghost" onClick={onDismiss}>
            Dismiss
          </button>
        </div>
        <div className="muted small">It stays in Alerts until it is resolved.</div>
      </div>
    </div>
  );
}
