import React from "react";
import { Heading } from "./Heading";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center">
      <Heading title="Welcome to ThirdEye Data" />
      <Link
        to="/genAIChatbot"
        className="px-6 py-2 text-lg font-medium rounded-md bg-blue-600 text-white"
      >
        Go To Chat Bot
      </Link>
    </div>
  );
};

export default Home;
