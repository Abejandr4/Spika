import { useApp } from '../utils/appContext';
import { locations } from '../utils/mockData';

export default function Locations() {
  const { locationId, setLocationId } = useApp();

  return (
    <div className="page">
      <h1 className="page-title">Location</h1>
      <p className="soft lead">
        Where are you? This changes the body, the background, what you measure, the color ranges and
        communication.
      </p>

      <div className="grid grid--3">
        {locations.map((loc) => {
          const active = loc.id === locationId;
          return (
            <button
              key={loc.id}
              type="button"
              className={`location-card${active ? ' is-active' : ''}`}
              aria-pressed={active}
              onClick={() => setLocationId(loc.id)}
            >
              <img className="location-card__img" src={loc.image} alt={loc.imageAlt} />
              <div className="location-card__head">
                <span className="location-card__name">{loc.name}</span>
                <span className={`tag tag--${loc.tag.toLowerCase()}`}>{loc.tag}</span>
              </div>
              <dl className="location-card__facts">
                <div>
                  <dt>Gravity</dt>
                  <dd>{loc.gravity}</dd>
                </div>
                <div>
                  <dt>Comm delay</dt>
                  <dd>{loc.commDelay}</dd>
                </div>
                <div>
                  <dt>Radiation</dt>
                  <dd>{loc.radiation}</dd>
                </div>
              </dl>
            </button>
          );
        })}
      </div>
    </div>
  );
}
