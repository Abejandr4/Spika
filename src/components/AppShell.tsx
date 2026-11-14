import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import TopBar from './TopBar';
import SideNav from './SideNav';

/**
 * false = menu slides over the page when the burger is pressed (drawer).
 * true  = menu is permanently docked on the left.
 */
const MENU_DOCKED: boolean = false;

/** Top bar + menu around every in-app page. */
export default function AppShell() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the drawer whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close with Escape while the drawer is open
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const docked = MENU_DOCKED;

  return (
    <div className="shell">
      <TopBar menuOpen={menuOpen} onMenuClick={() => setMenuOpen((o) => !o)} />
      <div className="shell__body">
        {docked && <SideNav />}
        <main className="shell__main">
          <Outlet />
        </main>

        {!docked && menuOpen && (
          <div className="drawer">
            <div className="drawer__panel">
              <SideNav onNavigate={() => setMenuOpen(false)} />
            </div>
            <button
              type="button"
              className="drawer__scrim"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
