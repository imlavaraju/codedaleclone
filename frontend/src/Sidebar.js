import React from "react";

export default function Sidebar({
  roadmapContent,
  selectedSection,
  setSelectedSection,
}) {
  return (
    <aside className="md:w-1/4">
      <h2 className="text-xl font-semibold mb-4">Contents</h2>
      <nav>
        <ul className="space-y-2">
          {roadmapContent.map((section, index) => (
            <li key={index}>
              <button
                onClick={() => setSelectedSection(section.title)}
                className={`w-full text-left p-2 rounded transition duration-200 ${
                  selectedSection === section.title
                    ? "bg-gray-200 dark:bg-gray-700"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
