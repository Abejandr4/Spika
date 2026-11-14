import { Link } from 'react-router-dom';
import Card from '../components/Card';
import SpicaStar from '../components/SpicaStar';
import {
  APP_DISCLAIMER,
  APP_NAME,
  APP_TAGLINE,
  DEFAULT_LANGUAGE,
  landingContent,
} from '../utils/mockData';

export default function Landing() {
  return (
    <div className="landing">
      <div className="landing__top">
        <span className="landing__brand">{APP_NAME}</span>
        <div className="spacer" />
        <button type="button" className="pill pill--btn">
          Language · {DEFAULT_LANGUAGE}
        </button>
      </div>

      <div className="landing__hero">
        <div className="landing__copy">
          <h1 className="landing__title">{APP_NAME}</h1>
          <p className="landing__tagline">{APP_TAGLINE}</p>
          <p className="landing__intro">{landingContent.intro}</p>
        </div>
        <div className="landing__mascot">
          <SpicaStar size={180} speech={landingContent.greeting} />
        </div>
      </div>

      <div className="grid grid--3">
        {landingContent.infoCards.map((c) => (
          <Card key={c.title} eyebrow={c.title}>
            <p className="card__text">{c.body}</p>
          </Card>
        ))}
      </div>

      <div className="grid grid--2">
        {landingContent.missions.map((m) => (
          <Link key={m.id} to={m.path} className={`mission-card mission-card--${m.tone}`}>
            <span className="mission-card__title">{m.title}</span>
            <span className="mission-card__body">{m.body}</span>
            <span className="btn btn--primary mission-card__cta">Start →</span>
          </Link>
        ))}
      </div>

      <p className="muted small">{APP_DISCLAIMER}</p>
    </div>
  );
}
