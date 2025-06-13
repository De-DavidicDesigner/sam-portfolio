import { useState } from "react";
import ServiceModal from "./ServiceModal";

const ServiceCard = ({ sign, directionA, directionB, title, content, onClickCard }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMainHovered, setIsMainHovered] = useState(false);
 

  return (
    <div
      className={`flex flex-col gap-5 bg-gray-800 rounded-lg p-10 h-grow ${
        isMainHovered
          ? "border-blue-600 border-2 scale-105"
          : "border-gray-900 border-2"
      } transform transition duration-800`}
      onMouseEnter={() => setIsMainHovered(true)}
      onMouseLeave={() => setIsMainHovered(false)}
    >
      <div className="flex justify-between text-2xl">
        <p
          className={`w-9 h-9 flex justify-center items-center text-4xl rounded-full ${
            isMainHovered ? "text-blue-600" : ""
          }`}
        >
          {sign}
        </p>
        <p
          className={`w-9 h-9 flex justify-center items-center rounded-full transition-colors duration-500 transform ${
            isMainHovered ? "bg-blue-600 text-blue-600" : "bg-white"
          } text-gray-900`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={onClickCard}
        >
          {/* {isHovered ? directionB : directionA} */}
          <span
            className={`absolute transform-opacity duration-900 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          >
            {directionA}
          </span>
          <span
            className={`absolute transform-opacity duration-900 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            {directionB}
          </span>
        </p>
      </div>
      <h1
        className={`font-bold text-3xl ${isMainHovered ? "text-blue-600" : ""}`}
      >
        {title}
      </h1>
      <p>{content.substring(0, 100)} . . .</p>
      {/* {<ServiceModal title={title} content={content} />} */}
    </div>
  );
};

export default ServiceCard;
