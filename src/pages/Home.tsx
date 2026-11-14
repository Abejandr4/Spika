import { useState } from 'react';
import { Link } from 'react-router-dom';
import AlertModal from '../components/AlertModal';
import Card from '../components/Card';
import Icon from '../components/Icon';
import SpicaStar from '../components/SpicaStar';
import TrendChart from '../components/TrendChart';
import { useApp } from '../utils/appContext';
import { percent } from '../utils/format';
import {
  environment,
  locationWindowImage,
  pendingMessagesToSend,
  spicaTip,
  systolicTrend,
  vitals,
} from '../utils/mockData';

export default function Home() {
  const { location, connection, openAlerts } = useApp();
  // Alerts the user closed this session. They stay in openAlerts (badge) until resolved.
  const [dismissedIds, setDismissedIds] = useState<string[]>([]);
  const popupAlert = openAlerts.find((a) => !dismissedIds.includes(a.id));

  const connected = connection === 'connected';
  const radiationPct = percent(environment.radiationAccumulatedMSv, environment.radiationCareerLimitMSv);
  const bpStatus = vitals.find((v) => v.id === 'bp')?.status ?? 'normal';

  return (
    <div className="page home">
      <div className="home__grid">
        <Card eyebrow="Location" className="home__location">
          <img className="home__window" src={locationWindowImage.src} alt={locationWindowImage.alt} />
          <div className="h3">{location.name}</div>
          <div className="chips">
            <span className="chip chip--sand">{location.gravity}</span>
            <span className="chip chip--sand">{location.radiation}</span>
            <span className="chip chip--sand">Delay: {location.commDelay.toLowerCase()}</span>
          </div>
          <Link to="/locations" className="text-link">
            Change location →
          </Link>
        </Card>

        <Card eyebrow="Communication">
          <div className="home__comm">
            <Icon
              name={connected ? 'signal' : 'noSignal'}
              size={22}
              color={connected ? 'var(--status-normal)' : 'var(--status-caution)'}
            />
            {connected ? 'Connected' : 'No signal'}
          </div>
          <p className="muted">
            {pendingMessagesToSend === 0
              ? 'Nothing waiting to send.'
              : `${pendingMessagesToSend} items waiting to send.`}
          </p>
        </Card>

        <Card eyebrow="Radiation & Environment">
          <div className="stats">
            <div>
              <div className="stat__value num">{environment.radiationAccumulatedMSv}</div>
              <div className="muted small">mSv accumulated</div>
            </div>
            <div>
              <div className="stat__value num">{environment.cabinCO2mmHg}</div>
              <div className="muted small">mmHg cabin CO₂</div>
            </div>
          </div>
          <div
            className="progress"
            role="progressbar"
            aria-valuenow={Math.round(radiationPct)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Radiation career limit used"
          >
            <div className="progress__fill" style={{ width: `${radiationPct}%` }} />
          </div>
          <div className="muted small">
            {Math.round(radiationPct)}% of the {environment.radiationCareerLimitMSv} mSv career limit
            {environment.isSampleData && ' · sample data'}
          </div>
        </Card>

        <Card eyebrow={systolicTrend.title} className="span-2">
          <TrendChart series={systolicTrend} status={bpStatus} />
        </Card>

        <Card className="span-2">
          <div className="spica-tip">
            <SpicaStar size={72} />
            <div>
              <div className="spica-tip__name">Spica</div>
              <div className="soft">{spicaTip}</div>
            </div>
          </div>
        </Card>
      </div>

      {popupAlert && (
        <AlertModal
          alert={popupAlert}
          onDismiss={() => setDismissedIds((ids) => [...ids, popupAlert.id])}
        />
      )}
    </div>
  );
}
