import React from "react";
import chatbot from "../assets/chatbot.jpg";
import { Link } from "react-router-dom";
const GenAIChatbot = () => {
  return (
    <div className="flex items-center justify-end ">
      <div className="w-[30vw] rounded-xl bg-black min-h-[500px]">
        <header className="h-[10%] bg-[#7149E6] font-bold p-4 rounded-t-xl tracking-wide text-[#FDFDFD] text-center text-3xl">
          Chatbot
        </header>
        <main className=" text-white">
          <div className="flex items-center justify-around mt-8 mx-6">
            <div className="rounded-md mt-auto p-1 w-[20%]">
              <img
                src={chatbot}
                alt="chatbot"
                className="w-10 h-10 rounded-md cursor-pointer"
              />
            </div>
            <div className="bg-[#6AAD79] w-[70%] p-4 rounded-t-lg cursor-pointer rounded-r-lg text-[#F0F7F2] text-2xl font-semibold">
              <h2>
                Hi, there <span class="wave">👋</span>
              </h2>
              <p>
                How can i help you <br /> today
              </p>
            </div>
          </div>
        </main>
        <div className="mt-[70%]">
          <input
            type="text"
            placeholder="Enter a message..."
            className=" bg-inherit rounded-b-xl border-t-[1px] p-4 w-full text-white text-lg font-semibold tracking-wider outline-none"
          />
        </div>
      </div>
      <Link
        to="/"
        className="flex items-center justify-center text-[#F5F0F4] bg-[#7B55E3] pb-2 rounded-full cursor-pointer mt-auto m-1 text-3xl w-12 h-12"
      >
        <span>x</span>
      </Link>
    </div>
  );
};

export default GenAIChatbot;
