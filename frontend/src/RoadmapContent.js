import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ContentSection from "./ContentSection";

const roadmapContent = [
  {
    title: "Getting Started: The Foundations",
    content:
      "Introduction: Why Data Analysis is One of the Hottest Jobs in 2024...\n\nIt's 2024, and data has officially taken over the world...",
  },
  {
    title: "The Next Step: Mastering Data Tools",
    content: "Content for Mastering Data Tools...",
  },
  {
    title: "Visual Storytelling: Data Visualization",
    content: "Content for Data Visualization...",
  },
  {
    title: "Diving Deeper: Advanced Data Analysis",
    content: "Content for Advanced Data Analysis...",
  },
  {
    title: "Soft Skills: Business Understanding and Communication",
    content: "Content for Soft Skills...",
  },
  {
    title: "The Final Step: Building a Portfolio and Applying for Jobs",
    content: "Content for Building a Portfolio...",
  },
];

export default function RoadmapContent() {
  const [selectedSection, setSelectedSection] = useState(
    roadmapContent[0].title
  );

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <Sidebar
        roadmapContent={roadmapContent}
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      />
      <ContentSection
        selectedSection={selectedSection}
        roadmapContent={roadmapContent}
      />
    </div>
  );
}
