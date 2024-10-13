import React from "react";
import Line from "../Reusable/line";

const data = [
  {
    name: "Data-Analyst",
    image:
      "https://gurucodes-data.pages.dev/img/learn/roadmaps/data-analyst/data-analyst-roadmap.png",
  },
  {
    name: "Python",
    image:
      "https://gurucodes-data.pages.dev/img/learn/roadmaps/data-analyst/python.png",
  },
];

const Roadmap = () => {
  return (
    <div className=" conatiner flex flex-col items-center ">
      <h1 className="text-7xl mt-8 mb-4">Roadmap</h1>
      <p className="text-xl text-center w-[400px] mb-4 mt-8">
        Follow guided learning paths that help you explore topics, gain relevant
        skills
      </p>
      <Line />

      {/* Place `ul` outside of `.map()` */}
      <ul className="grid grid-cols-2 gap-10  mx-auto max-w-3xl">
        {data.map((each, index) => (
          <div
            key={index}
            className="flex  items-center border border-gray-300 p-4 rounded-lg bg-gray-50"
          >
            <img
              src={each.image}
              alt={each.name}
              className="h-[100px] w-[100px]  mr-4  rounded object-cover"
            />
            <li className="text-lg font-medium text-gray-700">{each.name}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Roadmap;
