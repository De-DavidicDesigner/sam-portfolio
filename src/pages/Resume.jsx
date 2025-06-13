import React from "react";
import HireMe from "../components/HireMe";
import { Outlet } from "react-router-dom";

const Resume = () => {
  return (
    <div className="flex gap-10 min-h-[120vh] bg-gray-900 text-white px-20 py-10">
      <aside className="w-[30%]">
        <HireMe />
      </aside>
      <main className="w-[70%]">
        <Outlet />
      </main>
    </div>
  );
};

export default Resume;
