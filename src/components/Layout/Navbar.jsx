import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHomeClick = (e) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      document
        .getElementById("about-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const linkClass = ({ isActive }) => {
    const isHome = window.location.pathname === "/";

    return `rounded-lg px-4 py-2 font-bold transition-colors ${
      isActive && !isHome
        ? "bg-white/25 rounded text-white shadow-sm"
        : "text-white bg-transparent hover:bg-white/25"
    }`;
  };

  return (
    <div className="navbar-container fixed left-0 right-0 top-0 z-50 flex h-15 items-center justify-between px-4 py-4 text-white md:px-6">
      <button
        type="button"
        onClick={toggleMenu}
        className="logo flex items-center text-2xl font-bold"
      >
        <img
          src="NASAlogo.png"
          alt="NASA Logo"
          className="mr-2 inline-block h-8 w-auto md:h-8"
        />
        <h2 className="m-2 inline-block text-sm font-bold playfair-display md:m-2 md:text-xl">
          NASA Space Explorer
        </h2>
      </button>

      <div
        className={`nav-links absolute right-4 top-16 flex flex-col gap-2 rounded-lg bg-black/80 p-4 shadow-lg md:static md:flex md:flex-row md:gap-0 md:space-x-4 md:bg-transparent md:p-0 md:shadow-none ${
          isMenuOpen ? "flex" : "hidden"
        }`}
      >
        <NavLink to="/" className={linkClass} onClick={handleHomeClick}>
          Home
        </NavLink>
        <NavLink to="/explore" className={linkClass} onClick={closeMenu}>
          Mars Rover
        </NavLink>
        <NavLink to="/apod" className={linkClass} onClick={closeMenu}>
          APOD
        </NavLink>
        <NavLink to="/favs" className={linkClass} onClick={closeMenu}>
          Favourites
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
