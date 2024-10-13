// CompanyDetail.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const CompanyDetail = () => {
  const { companyName } = useParams();
  const [questions, setQuestions] = useState([]);
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/questions/${companyName}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setQuestions(data.questions);
        setImage(data.img);
        console.log(image);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, [companyName]);

  // Map of difficulty levels to their corresponding colors
  const difficultyColors = {
    Hard: "text-red-500", // Red for hard
    Medium: "text-orange-500", // Orange for medium
    Easy: "text-green-500", // Green for easy
    default: "text-gray-500", // Default color if none matches
  };

  // Get color class based on the difficulty
  const getDifficultyColor = (difficulty) => {
    return difficultyColors[difficulty] || difficultyColors.default;
  };

  return (
    <div className="flex flex-col w-full p-3 items-center">
      <img src={image} alt="" className="h-24 w-36" />
      <h1 className="text-2xl  font-semibold">{companyName}</h1>
      {questions.map((question) => (
        <div
          key={question.ID}
          className="flex max-w-3xl font-medium w-full m-1 justify-between rounded-lg border hover:bg-accent"
        >
          <Link
            className="flex justify-between p-3 mx-2 w-full"
            target="_blank"
            to={question.LeetcodeQuestionLink}
          >
            {question.Title}
            <div className={getDifficultyColor(question.Difficulty)}>
              {question.Difficulty}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CompanyDetail;
