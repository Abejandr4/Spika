import { Link } from 'react-router-dom';
import Card from '../components/Card';
import SpicaStar from '../components/SpicaStar';

interface ComingSoonProps {
  title: string;
  backTo?: string;
}

/** Placeholder for screens that are designed but not built yet. */
export default function ComingSoon({ title, backTo = '/home' }: ComingSoonProps) {
  return (
    <div className="page coming-soon">
      <Card className="coming-soon__card">
        <SpicaStar size={96} mood="neutral" />
        <h1 className="page-title">{title}</h1>
        <p className="soft">This screen is coming soon.</p>
        <Link to={backTo} className="btn btn--primary">
          Go back
        </Link>
      </Card>
    </div>
  );
}
