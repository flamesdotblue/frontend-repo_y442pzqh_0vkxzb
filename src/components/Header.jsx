import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Servers', href: '#servers' },
  { label: 'Teams', href: '#teams' },
  { label: 'Blog', href: '#blog' },
  { label: 'Staff', href: '#staff' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
      scrolled ? 'bg-black/60 backdrop-blur-xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-lg shadow-emerald-900/40 ring-1 ring-emerald-400/40" />
            <div className="font-semibold text-white tracking-tight text-lg">
              KZG.gg
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#servers"
              className="ml-2 inline-flex items-center rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
            >
              Play Now
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-zinc-200 hover:bg-white/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-black/80 backdrop-blur-xl">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-zinc-200 hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#servers"
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500"
            >
              Play Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
