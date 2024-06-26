import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black p-4 fixed w-full z-9999">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-white text-lg font-semibold">
          Your Logo
        </NavLink>

        {/* Navbar Links */}
        <div className="hidden md:block">
          <NavLink
            exact
            to="/"
            activeClassName="text-white"
            className="text-gray-300 hover:text-white px-3 py-2"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            activeClassName="text-white"
            className="text-gray-300 hover:text-white px-3 py-2"
          >
            About
          </NavLink>
          
          <NavLink
            to="/work"
            activeClassName="text-white"
            className="text-gray-300 hover:text-white px-3 py-2"
          >
            Work
          </NavLink>
          
          <NavLink
            to="/contact"
            activeClassName="text-white"
            className="text-gray-300 hover:text-white px-3 py-2"
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <NavLink
            exact
            to="/"
            activeClassName="text-white"
            className="block text-gray-300 hover:text-white px-4 py-2"
            onClick={toggleMobileMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-white"
            className="block text-gray-300 hover:text-white px-4 py-2"
            onClick={toggleMobileMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            activeClassName="text-white"
            className="block text-gray-300 hover:text-white px-4 py-2"
            onClick={toggleMobileMenu}
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="text-white"
            className="block text-gray-300 hover:text-white px-4 py-2"
            onClick={toggleMobileMenu}
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
