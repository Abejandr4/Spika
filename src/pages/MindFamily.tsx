import { useState, type FormEvent } from 'react';
import Card from '../components/Card';
import Icon from '../components/Icon';
import { useApp } from '../utils/appContext';
import { nowHHMM } from '../utils/format';
import { familyMessages, mindData } from '../utils/mockData';
import type { FamilyMessage } from '../utils/types';

const MOOD_SCALE = [1, 2, 3, 4, 5];

export default function MindFamily() {
  const { connection } = useApp();
  const [mood, setMood] = useState<number | null>(mindData.todayMood);
  const [messages, setMessages] = useState<FamilyMessage[]>(familyMessages);
  const [draft, setDraft] = useState('');

  const send = (e: FormEvent) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setMessages((prev) => [
      ...prev,
      {
        id: `local-${Date.now()}`,
        from: 'You',
        fromMe: true,
        text,
        time: `Today ${nowHHMM()}`,
        state: connection === 'connected' ? 'Sent' : 'Queued',
      },
    ]);
    setDraft('');
  };

  return (
    <div className="page mind">
      <div className="mind__left">
        <h1 className="page-title">Mind &amp; Family</h1>

        <Card eyebrow="Mood check-in · private">
          <p className="mind__question" id="mood-q">
            How do you feel today?
          </p>
          <div className="mood" role="radiogroup" aria-labelledby="mood-q">
            {MOOD_SCALE.map((n) => (
              <button
                key={n}
                type="button"
                role="radio"
                aria-checked={mood === n}
                aria-label={`Mood ${n}`}
                className={`mood__btn${mood === n ? ' is-active' : ''}`}
                onClick={() => setMood(n)}
              >
                {n}
              </button>
            ))}
          </div>
          <div className="mood__scale muted small">
            <span>Very low</span>
            <span>Very good</span>
          </div>
        </Card>

        <Card eyebrow={mindData.questionnaireName}>
          <p className="card__text">
            {mindData.questionnaireDue} · {mindData.questionnaireDuration}.
          </p>
        </Card>

        <Card eyebrow="Next family call">
          <div className="h3">{mindData.nextFamilyCall}</div>
          <p className="muted small">{mindData.nextFamilyCallNote}</p>
        </Card>
      </div>

      <Card ariaLabel="Family messages" className="chat">
        <div className="chat__head">
          <div className="eyebrow">Family messages</div>
          <div className="spacer" />
          <span className="chat__private muted small">
            <Icon name="lock" size={14} />
            Private · not visible to the medical team
          </span>
        </div>

        <div className="chat__list">
          {messages.map((m) => (
            <div key={m.id} className={`bubble${m.fromMe ? ' bubble--me' : ''}`}>
              <div className="bubble__from">{m.from}</div>
              <div className="bubble__text">{m.text}</div>
              <div className="bubble__meta num">
                {m.time} · <span className={`bubble__state bubble__state--${m.state.toLowerCase()}`}>{m.state}</span>
              </div>
            </div>
          ))}
        </div>

        <form className="chat__form" onSubmit={send}>
          <label className="sr-only" htmlFor="chat-input">
            Message
          </label>
          <input
            id="chat-input"
            type="text"
            className="input"
            placeholder="Write a message home…"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
          />
          <button type="submit" className="icon-btn icon-btn--primary icon-btn--lg" aria-label="Send">
            <Icon name="send" size={20} />
          </button>
        </form>
        <div className="muted small">
          Messages go to approved contacts only and send when there is a connection.
        </div>
      </Card>
    </div>
  );
}
