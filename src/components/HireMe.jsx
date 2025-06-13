import React from "react";
import { NavLink } from "react-router-dom";

const HireMe = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1>Why Hire Me?</h1>
      <p>
        I deliver efficient, high-quality results across software and web
        development, photography, video editing, and SEO by blending technical
        precision with creative vision for exceptional outcomes.
      </p>
      <div className="flex flex-col gap-5 mt-5">
        {List.map((item, index) => (
          <NavLink
            key={index}
            to={`/resume/${item.path}`}
            className={({ isActive }) =>
              isActive
                ? "px-10 p-3 bg-gray-800 rounded-lg text-center border-2 border-blue-700"
                : "px-10 p-3 bg-gray-800 rounded-lg text-center"
            }
            end
          >
            <p className="text-xl">{item.title}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default HireMe;

const List = [
  { title: "Experience", path: "experience" },
  { title: "Education", path: "education" },
  { title: "Skills", path: "skills" },
  { title: "About me", path: "about-me" },
];
