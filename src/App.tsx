import { Navigate, Route, Routes } from 'react-router-dom';
import AppShell from './components/AppShell';
import ComingSoon from './pages/ComingSoon';
import Emergency from './pages/Emergency';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Locations from './pages/Locations';
import MindFamily from './pages/MindFamily';
import MyBody from './pages/MyBody';
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/earth" element={<ComingSoon title="Earth Mission" backTo="/" />} />

      <Route element={<AppShell />}>
        <Route path="/home" element={<Home />} />
        <Route path="/body" element={<MyBody />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/mind" element={<MindFamily />} />

        {/* Designed, not built yet */}
        <Route path="/measure" element={<ComingSoon title="Measure" />} />
        <Route path="/routine" element={<ComingSoon title="My Daily Routine" />} />
        <Route path="/history" element={<ComingSoon title="My History" />} />
        <Route path="/settings" element={<ComingSoon title="Settings" />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
