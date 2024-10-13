// CareerPaths.js
import React from "react";
import { Link } from "react-router-dom";
import Line from "../Reusable/line";

const careerPaths = [
  {
    name: "Software Development",
    path: "software-development",
    img: "https://gurucodes-data.pages.dev/img/career-paths/app-development.png",
  },
  {
    name: "Data Science & Analytics",
    path: "data-science-analytics",
    img: "https://gurucodes-data.pages.dev/img/learn/roadmaps/data-analyst/data-analyst-roadmap.png",
  },
  {
    name: "Cloud Computing",
    path: "cloud-computing",
    img: "https://gurucodes-data.pages.dev/img/career-paths/server.png",
  },
  {
    name: "Artificial Intelligence & Machine Learning",
    path: "ai-ml",
    img: "https://gurucodes-data.pages.dev/img/career-paths/artificial-intelligence.png",
  },
  {
    name: "Digital Marketing & Growth Hacking",
    path: "digital-marketing",
    img: "https://gurucodes-data.pages.dev/img/career-paths/social-media.png",
  },
  {
    name: "Finance & Investment",
    path: "finance-investment",
    img: "https://gurucodes-data.pages.dev/img/career-paths/investing.png",
  },
  {
    name: "Consulting",
    path: "consulting",
    img: "https://gurucodes-data.pages.dev/img/career-paths/consultation.png",
  },
  {
    name: "Marketing (Traditional and Digital)",
    path: "marketing",
    img: "https://gurucodes-data.pages.dev/img/career-paths/shopping-online.png",
  },
];

const CareerPaths = () => (
  <div className="container flex flex-col items-center ">
    <h1 className="text-7xl mt-8 mb-4">Career Paths</h1>
    <p className="text-xl mb-4 mt-8">Discover Your Perfect Career Path</p>
    <Line />
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 m-2 max-w-3xl  mt-20">
      {careerPaths.map((career) => (
        <Link to={`/path/${career.path}`} className="career-link">
          <div className="flex flex-row p-4 justify-center items-center h-[120px] border border-gray-300 rounded-lg">
            <img src={career.img} className="h-[100px] w-[100px]  mr-4" />
            <li key={career.path} className="w-[60%]">
              {career.name}
            </li>
          </div>
        </Link>
      ))}
    </ul>
  </div>
);

export default CareerPaths;
