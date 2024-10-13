import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Sync the theme with the document
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="sticky top-0 bg-white dark:bg-gray-800 p-4 ">
      <div className="container mx-auto flex justify-between items-center lg:max-w-[75%]">
        {/* Company Name */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white border rounded-lg px-2 py-1 focus:outline-none"
          >
            ☰
          </button>
          <span className="text-xl font-semibold text-gray-800 dark:text-white">
            codedale Clone
          </span>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              to="/roadmap"
              className="text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white"
            >
              Roadmap
            </Link>
            <Link
              to="/careerpaths"
              className="text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white"
            >
              Career Paths
            </Link>
            <Link
              to="/companies"
              className="text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white"
            >
              Companies
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white border focus:outline-none"
          >
            O
          </button>

          {/* Sign In Button */}
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-black-600 focus:outline-none">
            Sign In
          </button>
        </div>
      </div>

      {/* Overlay and Mobile Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={closeMenu}
        >
          {/* Sidebar */}
          <div
            className="fixed inset-y-0 left-0 w-3/4 bg-white dark:bg-gray-800 p-4 shadow-lg transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent closing on sidebar click
          >
            {/* Close Button */}
            <button
              onClick={closeMenu}
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white focus:outline-none"
            >
              ✕
            </button>

            {/* Sidebar Links */}
            <Link
              to="/home"
              className="block py-2 text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/roadmap"
              className="block py-2 text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white"
              onClick={closeMenu}
            >
              Roadmap
            </Link>
            <Link
              to="/career-paths"
              className="block py-2 text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white"
              onClick={closeMenu}
            >
              Career Paths
            </Link>
            <Link
              to="/companies"
              className="block py-2 text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white"
              onClick={closeMenu}
            >
              Companies
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
