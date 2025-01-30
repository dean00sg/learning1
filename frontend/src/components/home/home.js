import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center ">
      <div className="w-full  p-6 ">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">Welcome to Learning1</h1>
        <h1 className="text-gray-600 text-center ">
          This is the home page. Click the button below to navigate.
        </h1>
      </div>
    </div>
  );
};

export default Home;
