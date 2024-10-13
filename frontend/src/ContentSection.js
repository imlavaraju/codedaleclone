import React from "react";

export default function ContentSection({ selectedSection, roadmapContent }) {
  const section = roadmapContent.find(
    (section) => section.title === selectedSection
  );

  return (
    <article className="md:w-3/4">
      <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
      <div className="prose dark:prose-invert max-w-none">
        {section.content.split("\n\n").map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}nani
          </p>
        ))}
      </div>
    </article>
  );
}
