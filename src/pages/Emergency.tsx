import { useEffect, useState } from 'react';
import Icon from '../components/Icon';
import { useApp } from '../utils/appContext';
import { formatSeconds } from '../utils/format';
import { activeEmergency, emergencyProtocols } from '../utils/mockData';

export default function Emergency() {
  const { connection } = useApp();
  const protocol =
    emergencyProtocols.find((p) => p.id === activeEmergency.protocolId) ?? emergencyProtocols[0];
  const total = protocol.steps.length;

  const [stepIndex, setStepIndex] = useState(activeEmergency.startStepIndex);
  const step = protocol.steps[stepIndex];

  const [remaining, setRemaining] = useState(step.timerSeconds ?? 0);
  const [running, setRunning] = useState(false);

  // Reset the timer whenever the step changes
  useEffect(() => {
    setRemaining(step.timerSeconds ?? 0);
    setRunning(false);
  }, [step]);

  // Count down while running
  useEffect(() => {
    if (!running) return;
    if (remaining <= 0) {
      setRunning(false);
      return;
    }
    const id = window.setTimeout(() => setRemaining((r) => r - 1), 1000);
    return () => window.clearTimeout(id);
  }, [running, remaining]);

  const goBack = () => setStepIndex((i) => Math.max(0, i - 1));
  const goNext = () => setStepIndex((i) => Math.min(total - 1, i + 1));
  const isLast = stepIndex === total - 1;

  return (
    <div className="page emergency">
      {connection === 'no-signal' && (
        <div role="status" className="banner banner--caution">
          <Icon name="noSignal" size={20} />
          No signal with Earth · Act now, don't wait for a reply. Your report will send itself when the
          link returns.
        </div>
      )}

      <div className="emergency__body">
        <div className="card emergency__steps">
          <div className="eyebrow">{protocol.title}</div>
          <ol className="steps">
            {protocol.steps.map((s, i) => {
              const state = i < stepIndex ? 'done' : i === stepIndex ? 'current' : 'todo';
              return (
                <li key={s.id}>
                  <button
                    type="button"
                    className={`step step--${state}`}
                    aria-current={state === 'current' ? 'step' : undefined}
                    onClick={() => setStepIndex(i)}
                  >
                    <span className="step__dot">
                      {state === 'done' ? <Icon name="check" size={14} /> : i + 1}
                    </span>
                    {s.short}
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="card emergency__main">
          <div className="emergency__meta">
            <span className="badge badge--warning badge--md">
              <Icon name="warning" />
              Emergency guide
            </span>
            <span className="muted num">
              Step {stepIndex + 1} of {total}
            </span>
          </div>

          <h1 className="emergency__instruction">{step.instruction}</h1>
          <p className="emergency__detail">{step.detail}</p>

          {step.timerSeconds !== undefined && (
            <div className="emergency__timer">
              <span className="emergency__clock num" aria-live="polite">
                {formatSeconds(remaining)}
              </span>
              <button
                type="button"
                className="btn btn--warning btn--lg"
                onClick={() => {
                  if (remaining <= 0) setRemaining(step.timerSeconds ?? 0);
                  setRunning((r) => !r);
                }}
              >
                {running ? 'Pause timer' : remaining <= 0 ? 'Restart timer' : 'Start timer'}
              </button>
            </div>
          )}

          <div className="spacer" />

          <div className="emergency__nav">
            <button type="button" className="btn btn--ghost btn--lg" onClick={goBack} disabled={stepIndex === 0}>
              Back
            </button>
            <button type="button" className="btn btn--dark btn--lg btn--grow" onClick={goNext} disabled={isLast}>
              {isLast ? 'Guide complete' : 'Done · next step'}
            </button>
          </div>
        </div>
      </div>

      <div className="emergency__log muted">
        <Icon name="clock" />
        Incident report recording · {stepIndex} steps logged since {activeEmergency.reportStartedAt} ·{' '}
        <button type="button" className="text-link">
          Add comments
        </button>
      </div>
    </div>
  );
}
