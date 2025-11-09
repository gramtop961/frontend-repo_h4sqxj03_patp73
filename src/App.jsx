import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExhibitsGrid from './components/ExhibitsGrid';
import VisitInfo from './components/VisitInfo';

function Footer() {
  return (
    <footer className="border-t border-black/5 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-black/60">© {new Date().getFullYear()} Museum Yadnya. All rights reserved.</p>
        <div className="text-sm text-black/60">
          Crafted with care — honoring culture and community.
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />
      <ExhibitsGrid />
      <VisitInfo />
      <Footer />
    </div>
  );
}
