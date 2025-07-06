import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // install: npm install lucide-react
import logo from "../assets/poster1.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Book a car", path: "/cars" },
    { name: "About", path: "/about" },
    { name: "Owner", path: "/owner" },
    // { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-[#111] shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Navkar Logo" className="w-16 h-16 object-contain" />
          <span className="text-2xl  text-blue-600">Navkar Tours & Travels</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 text-2xl font-semibold"
                  : "text-gray-700 text-2xl dark:text-gray-200 hover:text-blue-500"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 dark:text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-[#1a1a1a] shadow-lg px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "block text-blue-600 font-semibold"
                  : "block text-gray-700 dark:text-gray-200 hover:text-blue-500"
              }
              onClick={() => setMenuOpen(false)} // Close menu on click
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
