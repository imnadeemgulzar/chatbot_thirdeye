import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const routes = [
    { id: 1, title: "Abstract Summary", link: "/abstractSummary" },
    { id: 2, title: "Object Detection", link: "objectDetection" },
    { id: 3, title: "Blur Detection", link: "blurDetection" },
    { id: 4, title: "Analytics", link: "analytics" },
    { id: 5, title: "Settings", link: "settings" },
    { id: 6, title: "GenAI Chatbot", link: "genAIChatbot" },
  ];
  return (
    <div className="mb-5 shadow-xl px-8 py-3">
      <div className="flex items-center justify-between">
        {routes.map(({ id, title, link }) => {
          return (
            <Link
              to={link}
              key={id}
              className="text-gray-700 font-semibold hover:bg-slate-200 hover:text-blue-500 px-4 py-1 rounded-sm"
              activeClassName="text-blue-500 bg-slate-200"
            >
              {title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
