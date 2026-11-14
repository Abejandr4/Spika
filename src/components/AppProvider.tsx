import { useMemo, useState, type ReactNode } from 'react';
import { AppContext, type AppState } from '../utils/appContext';
import {
  alerts as initialAlerts,
  initialConnection,
  initialLocationId,
  locations,
} from '../utils/mockData';
import type { ConnectionState, HealthAlert, LocationId } from '../utils/types';

/** Holds app-wide state: current location, connection and alerts. */
export default function AppProvider({ children }: { children: ReactNode }) {
  const [locationId, setLocationId] = useState<LocationId>(initialLocationId);
  const [connection, setConnection] = useState<ConnectionState>(initialConnection);
  const [alerts, setAlerts] = useState<HealthAlert[]>(initialAlerts);

  const value = useMemo<AppState>(() => {
    const location = locations.find((l) => l.id === locationId) ?? locations[0];
    return {
      locationId,
      location,
      setLocationId,
      connection,
      setConnection,
      alerts,
      openAlerts: alerts.filter((a) => !a.resolved),
      resolveAlert: (id) =>
        setAlerts((prev) => prev.map((a) => (a.id === id ? { ...a, resolved: true } : a))),
    };
  }, [locationId, connection, alerts]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
