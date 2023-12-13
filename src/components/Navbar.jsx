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
    <div className="mb-5 shadow-lg p-4">
      <div className="flex items-center justify-between">
        {routes.map(({ id, title, link }) => {
          return (
            <Link to={link} key={id}>
              {title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
