import React from "react";

const ExperienceCard = ({date, title, company, description}) => {
  return (
    // <div className="grid grid-cols-2 gap-4">
    
        <div className="bg-gray-800 p-5 rounded-lg flex flex-col gap-2">
          <span className="text-md font-thin text-blue-600"><i>{date}</i></span>
          <h2 className="font-bold text-3xl">{title}</h2>
          <div className="flex gap-2 items-center mb-2">
            <div className="w-3 h-3 rounded-full bg-blue-700"></div>
            <h3>{company}</h3>
          </div>
          <p>
            <ul className="list-disc list-inside flex flex-col gap-2">
              {description.map((desc, index) => (
                <li key={index} className="text-lg">{desc}</li>
              ))}
            </ul>
          </p>
        </div>
    
    // </div>
  );
};

export default ExperienceCard;
