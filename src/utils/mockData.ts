// ───────────────────────────────────────────────────────────────
//  PLACEHOLDER DATA
//  Every value the screens show lives here. Replace these exports
//  with real data (API calls, sensors, local storage…) later.
// ───────────────────────────────────────────────────────────────
import type {
  Astronaut,
  BodyPart,
  ConnectionState,
  EmergencyProtocol,
  Environment,
  FamilyMessage,
  HealthAlert,
  LocationId,
  MindData,
  MissionLocation,
  NavItem,
  Task,
  TrendSeries,
  Vital,
} from './types';

export const APP_NAME = 'Spica';
export const APP_TAGLINE = 'Measure. Understand. Act.';
export const APP_DISCLAIMER = 'Supports decisions. Does not diagnose. · NASA Space Apps Challenge 2026';
export const DEFAULT_LANGUAGE = 'EN';

export const astronaut: Astronaut = {
  name: 'Ana Ruiz',
  initials: 'AR',
  missionDay: 42,
  timeLabel: '14:32 GMT',
};

export const initialLocationId: LocationId = 'iss';
export const initialConnection: ConnectionState = 'connected';
export const pendingMessagesToSend = 0;

export const locations: MissionLocation[] = [
  {
    id: 'iss',
    name: 'On the ISS',
    tag: 'Main',
    gravity: 'Microgravity',
    commDelay: 'None',
    radiation: '~0.5 mSv/day',
    image: '/images/locations/iss.svg',
    imageAlt: 'Person in onboard clothes',
  },
  {
    id: 'spacewalk',
    name: 'Spacewalk',
    tag: 'Main',
    gravity: 'Microgravity',
    commDelay: 'None',
    radiation: 'Higher',
    image: '/images/locations/spacewalk.svg',
    imageAlt: 'Suit and helmet',
  },
  {
    id: 'earth',
    name: 'Back on Earth',
    tag: 'Main',
    gravity: '1 g',
    commDelay: 'None',
    radiation: 'Earth level',
    image: '/images/locations/earth.svg',
    imageAlt: 'Person standing',
  },
  {
    id: 'moon',
    name: 'Lunar Surface',
    tag: 'Preview',
    gravity: '1/6 g',
    commDelay: 'A few seconds',
    radiation: '~1.4 mSv/day',
    image: '/images/locations/moon.svg',
    imageAlt: 'Suit on grey ground',
  },
  {
    id: 'mars',
    name: 'Mars Transit',
    tag: 'Preview',
    gravity: 'Microgravity',
    commDelay: '4–24 min, or none',
    radiation: '~1.8 mSv/day',
    image: '/images/locations/mars.svg',
    imageAlt: 'Person in deep space',
  },
];

export const locationWindowImage = {
  src: '/images/iss-window.svg',
  alt: 'View from the ISS window',
};

export const navItems: NavItem[] = [
  { label: 'Home', path: '/home', ready: true },
  { label: 'My Body', path: '/body', ready: true },
  { label: 'My Daily Routine', path: '/routine', ready: false },
  { label: 'Emergencies', path: '/emergency', ready: true },
  { label: 'Mind & Family', path: '/mind', ready: true },
  { label: 'My History', path: '/history', ready: false },
  { label: 'Settings', path: '/settings', ready: false },
];

export const alerts: HealthAlert[] = [
  {
    id: 'bp-high',
    status: 'caution',
    title: 'Blood pressure 138/84',
    message: 'Above your normal values (+14 systolic). Re-check in 5 minutes before taking action.',
    actionLabel: 'Re-check now',
    actionPath: '/measure',
    resolved: false,
  },
];

export const environment: Environment = {
  radiationAccumulatedMSv: 98.9,
  radiationCareerLimitMSv: 600,
  cabinCO2mmHg: 2.4,
  isSampleData: true,
};

export const systolicTrend: TrendSeries = {
  title: 'Trends · systolic pressure, 7 days',
  values: [118, 119, 120, 121, 124, 129, 132],
  baseline: 124,
  baselineLabel: 'Your normal: 124',
  startLabel: 'Mon',
  endLabel: 'Today',
  unit: 'mmHg',
};

export const spicaTip = 'Time for a glass of water?';

export const todayTasks: Task[] = [
  { id: 't1', label: 'Blood pressure · re-check 14:40', done: false },
  { id: 't2', label: 'Sleep log', done: false },
  { id: 't3', label: 'Morning vitals', done: true },
];

export const vitals: Vital[] = [
  { id: 'bp', label: 'Blood pressure', value: '138/84', unit: 'mmHg', status: 'caution', time: '08:10', trend: 'up' },
  { id: 'hr', label: 'Heart rate', value: '72', unit: 'bpm', status: 'normal', time: '08:10' },
  { id: 'spo2', label: 'Oxygen', value: '98', unit: '%', status: 'normal', time: '08:10' },
  { id: 'temp', label: 'Temperature', value: '36.7', unit: '°C', status: 'normal', time: '08:10' },
  { id: 'mood', label: 'Mood', value: '4', unit: '/ 5', status: 'normal', time: 'Yesterday' },
  { id: 'weight', label: 'Weight', value: '61.2', unit: 'kg', status: 'normal', time: '9 days ago', staleFor: '9 days' },
];

export const bodyParts: BodyPart[] = [
  {
    id: 'brain', number: 1, label: 'Brain & mood', status: 'normal', x: 50, y: 9,
    summary: 'Mood and sleep are within your usual range.',
    whatItDoes: 'Controls thinking, sleep, mood and balance.',
    spaceEffect: 'Isolation, confinement and a shifted day cycle can affect sleep and mood.',
    care: 'Keep a regular sleep window, daily check-ins and calls home.',
  },
  {
    id: 'eyes', number: 2, label: 'Eyes', status: 'normal', x: 44, y: 13,
    summary: 'No vision changes reported.',
    whatItDoes: 'Let you see; the optic nerve carries images to the brain.',
    spaceEffect: 'Fluid shift toward the head can press on the back of the eye (SANS).',
    care: 'Report blurry vision early and do the scheduled eye checks.',
  },
  {
    id: 'ears', number: 3, label: 'Ears', status: 'normal', x: 57, y: 13,
    summary: 'Hearing and balance are normal.',
    whatItDoes: 'Hearing and the inner-ear balance system.',
    spaceEffect: 'Constant station noise and microgravity confuse the balance sense.',
    care: 'Wear hearing protection in loud modules.',
  },
  {
    id: 'heart', number: 4, label: 'Heart', status: 'caution', x: 46, y: 31,
    summary: 'Your blood pressure has been above your normal values for 2 days.',
    whatItDoes: 'Pumps blood and oxygen to every part of your body.',
    spaceEffect: 'Without gravity, fluids shift toward the head and the heart works differently.',
    care: 'Daily exercise, enough water, regular sleep.',
  },
  {
    id: 'lungs', number: 5, label: 'Lungs', status: 'normal', x: 56, y: 29,
    summary: 'Oxygen saturation is normal.',
    whatItDoes: 'Bring oxygen in and take carbon dioxide out.',
    spaceEffect: 'Cabin CO₂ and dust can irritate the airways.',
    care: 'Watch for headaches or shortness of breath; check cabin CO₂.',
  },
  {
    id: 'bones', number: 6, label: 'Bones', status: 'normal', x: 35, y: 60,
    summary: 'Bone loss is on track with your exercise plan.',
    whatItDoes: 'Hold you up and protect your organs.',
    spaceEffect: 'Without load, bones can lose about 1% of density per month.',
    care: 'Resistance exercise every day, calcium and vitamin D.',
  },
  {
    id: 'muscles', number: 7, label: 'Muscles', status: 'normal', x: 64, y: 46,
    summary: 'Strength is stable.',
    whatItDoes: 'Move your body and keep posture.',
    spaceEffect: 'Leg and back muscles shrink quickly without gravity.',
    care: 'Follow your daily exercise plan.',
  },
  {
    id: 'kidneys', number: 8, label: 'Kidneys', status: 'normal', x: 50, y: 44,
    summary: 'Hydration looks fine.',
    whatItDoes: 'Filter the blood and balance fluids.',
    spaceEffect: 'Bone calcium in the blood raises kidney-stone risk.',
    care: 'Drink enough water through the day.',
  },
  {
    id: 'skin', number: 9, label: 'Skin', status: 'normal', x: 30, y: 38,
    summary: 'No rashes reported.',
    whatItDoes: 'Protects the body and helps control temperature.',
    spaceEffect: 'Dry air and slow healing can cause rashes and irritation.',
    care: 'Moisturise and report wounds that heal slowly.',
  },
  {
    id: 'immune', number: 10, label: 'Immune', status: 'normal', x: 53, y: 52,
    summary: 'No signs of infection.',
    whatItDoes: 'Fights infections.',
    spaceEffect: 'Stress and radiation can weaken immunity and wake up dormant viruses.',
    care: 'Sleep, nutrition, hand hygiene.',
  },
];

export const initialSelectedBodyPartId = 'heart';

export const emergencyProtocols: EmergencyProtocol[] = [
  {
    id: 'anaphylaxis',
    title: 'Severe allergic reaction',
    steps: [
      { id: 's1', short: 'Check breathing and swelling', instruction: 'Check breathing and look for swelling of the face, lips or throat.', detail: 'If breathing is hard or the throat feels tight, go straight to the next steps.' },
      { id: 's2', short: 'Stop the trigger', instruction: 'Stop contact with the trigger.', detail: 'Stop eating, remove the substance or move away from it.' },
      { id: 's3', short: 'Find the auto-injector', instruction: 'Find the auto-injector in the medical kit.', detail: 'Remove the safety cap just before use.' },
      { id: 's4', short: 'Inject into the outer thigh', instruction: 'Inject the auto-injector into the outer thigh and hold it in place.', detail: 'It works through clothing. Keep holding until the timer ends.', timerSeconds: 10 },
      { id: 's5', short: 'Call the crew medical officer', instruction: 'Call the crew medical officer.', detail: 'Tell them the time of the injection.' },
      { id: 's6', short: 'Watch breathing for 15 min', instruction: 'Watch breathing for 15 minutes.', detail: 'Stay with the person. Keep them still.', timerSeconds: 900 },
      { id: 's7', short: 'Second dose if no better', instruction: 'Give a second dose if there is no improvement.', detail: 'Use the other thigh.' },
      { id: 's8', short: 'Rest and record', instruction: 'Rest and record what happened.', detail: 'Your report sends itself when the link returns.' },
    ],
  },
];

export const activeEmergency = {
  protocolId: 'anaphylaxis',
  /** zero-based index of the step shown first */
  startStepIndex: 3,
  reportStartedAt: '14:21',
};

export const mindData: MindData = {
  todayMood: 4,
  questionnaireName: 'PHQ-9 questionnaire',
  questionnaireDue: 'Due in 3 days',
  questionnaireDuration: 'takes about 3 minutes',
  nextFamilyCall: 'Sat · 18:00 GMT',
  nextFamilyCallNote: 'Private video call, scheduled by your flight medical team.',
};

export const familyMessages: FamilyMessage[] = [
  { id: 'm1', from: 'Lucía (daughter)', fromMe: false, text: 'Mom! I saw the station pass over us last night. We waved!', time: 'Thu 21:10', state: 'Read' },
  { id: 'm2', from: 'You', fromMe: true, text: 'I saw Earth from the window today. Sending you a huge hug.', time: 'Fri 07:45', state: 'Read' },
  { id: 'm3', from: 'You', fromMe: true, text: 'Tell Grandma the photo is for her.', time: 'Fri 14:02', state: 'Queued' },
];

export const landingContent = {
  intro:
    'A health co-pilot for astronauts who are not doctors, and for people on Earth who live far from one. It works without a connection.',
  greeting: 'Hi!',
  infoCards: [
    { title: 'The problem', body: 'On the way to Mars, a message can take up to 24 minutes to reach Earth. There is no doctor on board.' },
    { title: 'How it works', body: '1 Measure with a guide · 2 Understand the color · 3 Act with clear steps, even with no signal.' },
    { title: 'Impact on Earth', body: 'The same app helps adults with asthma or COPD in remote places monitor their breathing.' },
  ],
  missions: [
    { id: 'space', title: 'Space Mission', body: 'For astronauts on the ISS, on a spacewalk and back on Earth.', path: '/home', tone: 'lilac' as const },
    { id: 'earth', title: 'Earth Mission', body: 'Mobile app for adults with asthma or COPD far from a clinic.', path: '/earth', tone: 'sage' as const },
  ],
};
