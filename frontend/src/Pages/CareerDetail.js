// CareerDetail.js
import React from "react";
import { useParams } from "react-router-dom";

const careerData = {
  "software-development": {
    title: "Software Development",
    roles: [
      {
        name: "Backend Developer",
        image:
          "https://gurucodes-data.pages.dev/img/career-paths/software/backend.png",
      },
      {
        name: "Frontend Developer",
        image:
          "https://gurucodes-data.pages.dev/img/career-paths/software/ui-design.png",
      },
      {
        name: "Full Stack Developer",
        image:
          "https://gurucodes-data.pages.dev/img/career-paths/software/full-stack.png",
      },
      {
        name: "Mobile App Developer (Android/iOS)",
        image:
          "https://gurucodes-data.pages.dev/img/career-paths/software/mobile.png",
      },
      {
        name: "Game Developer",
        image:
          "https://gurucodes-data.pages.dev/img/career-paths/software/game.png",
      },
      {
        name: "DevOps Engineer",
        image:
          "https://gurucodes-data.pages.dev/img/learn/roadmaps/devops/devops.png",
      },
    ],
    demand: "High",
    competition: "High",
    timeTaken: "6-12 months (depends on specific job role)",
    skills: [
      "JavaScript/TypeScript",
      "Node.js",
      "React.js",
      "Java",
      "Python",
      "SQL",
    ],
    tools: ["VS Code", "GitHub", "Docker", "Jenkins"],
    communities: ["Stack Overflow", "GitHub", "freeCodeCamp"],
    roadmap: [
      "Learn basic programming",
      "Build projects",
      "Master DSA",
      "Learn backend/frontend frameworks",
      "Work on real-world projects",
    ],
  },
  // Add more data for each path if needed
};

const CareerDetail = () => {
  const { path } = useParams();
  const details = careerData[path];
  let color = {
    High: "text-red-500",
    Medium: "text-yellow-500",
    Easy: "text-green-500",
  };
  const selectcolor = (clr) => {
    return color[clr];
  };

  if (!details) {
    return (
      <div className="text-center text-red-500">Career path not found ok.</div>
    );
  }

  return (
    <div className="container mx-auto p-6 items-center  space-y-8">
      <h1 className="text-4xl font-bold text-center mb-8">{details.title}</h1>

      <div className="flex flex-col space-y-4 items-center">
        <h2 className="text-2xl font-semibold text-center">
          Job Roles You Can Expect:
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 mx-auto max-w-3xl">
          {details.roles.map((role, index) => (
            <div
              key={index}
              className="flex  items-center border border-gray-300 p-4 rounded-lg bg-gray-50"
            >
              <img
                src={role.image}
                alt={role.name}
                className="h-[80px] w-[100px] border border-gray-300 mr-4 bg-gray-100 rounded object-cover"
              />
              <li className="text-lg font-medium text-gray-700">{role.name}</li>
            </div>
          ))}
        </ul>
        <ul className="grid grid-cols-2 gap-4 mb-8 max-w-3xl">
          <div className="flex flex-col items-center  p-4 rounded-lg ">
            <p className="  mr-4  rounded object-cover">Demand:</p>
            <p
              className={`text-lg font-medium bg-gray-200 rounded-lg p-2  ${selectcolor(
                details.demand
              )}`}
            >
              {details.demand}
            </p>
          </div>
          <div className="flex flex-col items-center   p-4 rounded-lg ">
            <p className="  mr-4  rounded object-cover">competition:</p>
            <p
              className={`text-lg font-medium bg-gray-200 rounded-lg p-2 ${selectcolor(
                details.competition
              )}`}
            >
              {details.competition}
            </p>
          </div>
        </ul>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-lg col-span-2">Time Taken:</p>
        <p className="font-semibold bg-gray-100 rounded-lg p-2">
          {details.timeTaken}
        </p>
      </div>

      <div className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold text-center">Skills Required:</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 mx-auto max-w-3xl">
          {details.skills.map((skill) => (
            <li
              key={skill}
              className="place-self-stretch text-lg text-gray-700 border border-gray-300 p-2 rounded-lg text-center"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold text-center">Tools Used:</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 mx-auto max-w-3xl">
          {details.tools.map((tool) => (
            <li
              key={tool}
              className="  text-lg text-gray-700 border border-gray-300 p-2 rounded-lg text-center"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold">Communities to Learn From:</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 mx-auto max-w-3xl">
          {details.communities.map((community) => (
            <li
              key={community}
              className="text-lg text-gray-700 border border-gray-300 p-2 rounded-lg"
            >
              {community}
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold text-center">Ideal Roadmap:</h2>
        <ul className="grid grid-cols-1  space-y-2 text-lg mx-auto max-w-3xl  text-gray-700">
          {details.roadmap.map((step) => (
            <li key={step} className="p-2  border border-gray-300 rounded-lg">
              {step}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CareerDetail;
