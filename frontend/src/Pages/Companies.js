// CompanyList.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Line from "../Reusable/line";

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      const response = await fetch("https://codedaleclonebackend.vercel.app/api/companies");
      const data = await response.json();
      console.log(data);
      setCompanies(data);
    };

    fetchCompanies();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-7xl font-bold mb-6 mt-12"> Company Wise Questions</h1>
      <p className="text-2xl text-center  opacity-0.5 mb-4 w-[500px]">
        Get the all Year time questions of all the companies
      </p>
      <Line />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 m-2 max-w-3xl  mt-20">
        {companies.map((company) => (
          <Link
            key={company.companyName}
            className="h-full p-2 border rounded-lg"
            to={`/companies/${company.companyName}`}
          >
            <div className="flex h-full flex-col w-full items-center truncate">
              <img
                alt=""
                loading="lazy"
                className="rounded-lg object-contain h-32 w-32 p-6 dark:bg-foreground aspect-square"
                src={company.img}
              />
              <div className="text-wrap w-full text-center mb-3">
                <p className="text-lg text-xl font-semibold">
                  {company.companyName}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CompanyList;
