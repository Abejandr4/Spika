// Shared data shapes. When you connect real data, keep these shapes
// (or extend them) so the components keep working unchanged.

export type Status = 'normal' | 'caution' | 'warning' | 'advisory';

export type ConnectionState = 'connected' | 'no-signal';

export type LocationId = 'iss' | 'spacewalk' | 'earth' | 'moon' | 'mars';

export interface Astronaut {
  name: string;
  initials: string;
  missionDay: number;
  /** Mission clock label, e.g. "14:32 GMT" */
  timeLabel: string;
}

export interface MissionLocation {
  id: LocationId;
  name: string;
  /** "Main" = fully supported, "Preview" = concept */
  tag: 'Main' | 'Preview';
  gravity: string;
  commDelay: string;
  radiation: string;
  /** Path inside /public, e.g. "/images/locations/iss.svg" */
  image: string;
  imageAlt: string;
}

export interface HealthAlert {
  id: string;
  status: Status;
  title: string;
  message: string;
  actionLabel: string;
  actionPath: string;
  resolved: boolean;
}

export interface Vital {
  id: string;
  label: string;
  value: string;
  unit: string;
  status: Status;
  time: string;
  trend?: 'up' | 'down' | 'stable';
  /** Set when the reading is old, e.g. "9 days" */
  staleFor?: string;
}

export interface Task {
  id: string;
  label: string;
  done: boolean;
}

export interface BodyPart {
  id: string;
  number: number;
  label: string;
  status: Status;
  /** Hotspot position over the body figure, in % of the figure box */
  x: number;
  y: number;
  summary: string;
  whatItDoes: string;
  spaceEffect: string;
  care: string;
}

export interface Environment {
  radiationAccumulatedMSv: number;
  radiationCareerLimitMSv: number;
  cabinCO2mmHg: number;
  isSampleData: boolean;
}

export interface TrendSeries {
  title: string;
  values: number[];
  baseline: number;
  baselineLabel: string;
  startLabel: string;
  endLabel: string;
  unit: string;
}

export interface EmergencyStep {
  id: string;
  short: string;
  instruction: string;
  detail: string;
  timerSeconds?: number;
}

export interface EmergencyProtocol {
  id: string;
  title: string;
  steps: EmergencyStep[];
}

export interface FamilyMessage {
  id: string;
  from: string;
  fromMe: boolean;
  text: string;
  time: string;
  state: 'Read' | 'Sent' | 'Queued';
}

export interface MindData {
  todayMood: number | null;
  questionnaireName: string;
  questionnaireDue: string;
  questionnaireDuration: string;
  nextFamilyCall: string;
  nextFamilyCallNote: string;
}

export interface NavItem {
  label: string;
  path: string;
  /** false = shown in the menu but routes to a "coming soon" page */
  ready: boolean;
}
