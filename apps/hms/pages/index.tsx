import { Welcome } from '../components/Welcome/Welcome';
import { Dashboard } from '../components/Dashboard/Dashboard';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <Dashboard />
    </>
  );
}
