import React from "react";

export default function Header({ toggleDarkMode, darkMode }) {
  return (
    <header className="border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Codedale</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
            🏠 Home
          </a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
            📚 Roadmaps
          </a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
            💼 Companies
          </a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
            🎓 Career Paths
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle dark mode"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200">
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}
