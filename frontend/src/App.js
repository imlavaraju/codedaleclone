import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Companies from "./Pages/Companies";
import Company from "./Pages/Company";
import Roadmap from "./Pages/Roadmap";
import Navbar from "./Components/Navbar";
import CareerPath from "./Pages/CareerPath";
import CareerDetail from "./Pages/CareerDetail";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/companies/:companyName" element={<Company />} />
        <Route path="/careerpaths" element={<CareerPath />} />
        <Route path="/path/:path" element={<CareerDetail />} />
      </Routes>
    </div>
  );
};

export default App;
