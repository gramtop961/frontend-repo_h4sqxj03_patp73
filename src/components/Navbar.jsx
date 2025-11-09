import { useState } from 'react';
import { Menu, X, Calendar, MapPin, Image as ImageIcon, Info } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: 'Exhibits', href: '#exhibits', icon: ImageIcon },
    { name: 'Events', href: '#events', icon: Calendar },
    { name: 'Visit', href: '#visit', icon: MapPin },
    { name: 'About', href: '#about', icon: Info },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-black text-white">Y</span>
            <span>Museum Yadnya</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-black/70 hover:text-black flex items-center gap-2">
                <item.icon className="h-4 w-4" />
                {item.name}
              </a>
            ))}
            <a href="#visit" className="ml-2 rounded-md bg-black px-4 py-2 text-white hover:bg-black/90">Get Tickets</a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-black/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-black/5">
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </a>
              ))}
              <a href="#visit" className="mt-2 rounded-md bg-black px-4 py-2 text-white text-center hover:bg-black/90">Get Tickets</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
