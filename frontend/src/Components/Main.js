import React from "react";

const Main = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center align-center min-h-screen">
        <h1 className="text-7xl mb-16  text-center ">
          Join the Coding Revolution
        </h1>
        <p className="text-xl mb-8 max-w-[600px] text-center">
          Where Code Meets Opportunity – Empowering You to Become a 10x Better
          Developer, Standing Above the Rest!
        </p>
        <button className="bg-black text-white p-2 rounded-lg ">
          Click Here --
        </button>
      </div>
      <div className="flex flex-col justify-center items-center align-center min-h-screen">
        <h1 className="text-7xl mb-8  text-center  font-bold bg-gradient-to-r from-purple-500  to-red-500 bg-clip-text text-transparent ">
          Coming soon.
        </h1>
        <p className="text-xl mb-8 max-w-[600px] text-center">
          Get notified when the site goes live.
        </p>
        <div>
          <p className="text-center mb-4">Socials</p>
          <button className="bg-black text-white p-2 mr-2">Insta</button>
          <button className="bg-black text-white p-2">YT</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
