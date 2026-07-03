import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "../assets/poster1.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const solid = scrolled || pathname !== "/" || menuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Fleet", path: "/cars" },
    { name: "About Us", path: "/about" },
    { name: "Owner", path: "/owner" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        solid 
          ? "bg-white/95 backdrop-blur-xl shadow-sm py-3 border-b border-slate-200" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <img src={logo} alt="Navkar Logo" className="w-12 h-12 md:w-14 md:h-14 object-contain transition-transform group-hover:rotate-12" />
            <div className="absolute -inset-1 bg-[#C5A059] rounded-full blur opacity-10 group-hover:opacity-20 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className={`text-xl md:text-2xl font-black tracking-tighter leading-none transition-colors ${solid ? "text-[#0b1f3a]" : "text-white"}`}>
              NAVKAR
            </span>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#d97706] uppercase leading-none">
              Tours & Travels
            </span>
          </div>

        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `px-5 py-2 text-sm font-bold uppercase tracking-widest transition-all rounded-full ${
                  isActive
                    ? "bg-[#f59e0b] text-[#172033] shadow-sm"
                    : solid 
                      ? "text-slate-600 hover:text-[#b45309]" 
                      : "text-white/80 hover:text-white hover:bg-white/10"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+919898711155"
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-xl hover:scale-105 ${
              solid 
                ? "bg-[#0b1f3a] text-white" 
                : "bg-white text-[#0b1f3a]"
            }`}
          >
            <Phone className="w-4 h-4 text-[#f59e0b]" />
            98987 11155
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded-xl transition-colors ${solid ? "text-[#0b1f3a]" : "text-white"}`}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-200 animate-slide-down">
          <div className="flex flex-col p-6 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-6 py-4 text-lg font-black uppercase tracking-wider rounded-2xl transition-all ${
                    isActive
                      ? "bg-[#f59e0b] text-[#172033]"
                      : "text-slate-700 hover:bg-slate-100"
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <a
              href="tel:+919898711155"
              className="mt-4 flex items-center justify-center gap-3 bg-[#0b1f3a] text-white p-5 rounded-2xl font-black text-lg shadow-xl"
            >
              <Phone className="w-6 h-6 text-[#f59e0b]" />
              Book via Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}


export default Navbar;

