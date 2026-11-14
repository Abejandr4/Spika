import { createContext, useContext } from 'react';
import type { ConnectionState, HealthAlert, LocationId, MissionLocation } from './types';

export interface AppState {
  locationId: LocationId;
  location: MissionLocation;
  setLocationId: (id: LocationId) => void;
  connection: ConnectionState;
  setConnection: (c: ConnectionState) => void;
  alerts: HealthAlert[];
  openAlerts: HealthAlert[];
  resolveAlert: (id: string) => void;
}

export const AppContext = createContext<AppState | null>(null);

export function useApp(): AppState {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside <AppProvider>');
  return ctx;
}
