import { useState } from 'react';
import BodyMap from '../components/BodyMap';
import BodyPartPanel from '../components/BodyPartPanel';
import Card from '../components/Card';
import VitalTile from '../components/VitalTile';
import { bodyParts, initialSelectedBodyPartId, todayTasks, vitals } from '../utils/mockData';

export default function MyBody() {
  const [selectedId, setSelectedId] = useState<string | null>(initialSelectedBodyPartId);
  const [tasks, setTasks] = useState(todayTasks);
  const selected = bodyParts.find((p) => p.id === selectedId) ?? null;

  const toggleTask = (id: string) =>
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  return (
    <div className="page body-page">
      <div className="body-page__left">
        <h1 className="page-title">My Body</h1>

        <Card eyebrow="To do today" className="card--tight">
          <ul className="tasks">
            {tasks.map((t) => (
              <li key={t.id}>
                <label className={`task${t.done ? ' is-done' : ''}`}>
                  <input type="checkbox" checked={t.done} onChange={() => toggleTask(t.id)} />
                  {t.label}
                </label>
              </li>
            ))}
          </ul>
        </Card>

        <div className="vitals-grid">
          {vitals.map((v) => (
            <VitalTile key={v.id} vital={v} />
          ))}
        </div>
      </div>

      <BodyMap
        parts={bodyParts}
        selectedId={selectedId}
        onSelect={setSelectedId}
        caption="3D body · onboard clothes (3D model goes here)"
      />

      {selected && <BodyPartPanel part={selected} onClose={() => setSelectedId(null)} />}
    </div>
  );
}
