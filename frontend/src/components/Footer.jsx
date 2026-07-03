import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07172c] py-12 text-white">
      <div className="page-container flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="text-center md:text-left">
          <Link to="/" className="text-2xl font-extrabold tracking-tight">NAVKAR</Link>
          <p className="mt-1 text-xs font-bold uppercase tracking-[.2em] text-[#fbbf24]">Tours & Travels</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-slate-300">
          <Link to="/cars" className="hover:text-white">Fleet</Link><Link to="/about" className="hover:text-white">About</Link><Link to="/owner" className="hover:text-white">Owner</Link>
          <a href="tel:+919898711155" className="inline-flex items-center gap-2 text-[#fbbf24]"><Phone className="h-4 w-4" />98987 11155</a>
        </nav>
        <div className="text-center text-sm text-slate-400 md:text-right"><p>© {new Date().getFullYear()} Navkar Tours & Travels.</p><p className="mt-1">Reliable journeys across Gujarat.</p></div>
      </div>
    </footer>
  );
}

export default Footer;
