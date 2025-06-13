import { FaCode } from "react-icons/fa";
import { GoArrowDownRight, GoArrowRight } from "react-icons/go";
import ServiceCard from "../components/ServiceCard";
import ServiceModal from "../components/ServiceModal";
import { useState } from "react";

const Services = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    console.log(selectedItem);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  }

  return (
    <div className="bg-gray-900 min-h-screen px-20 py-15 text-white">
      <p className="font-extrabold text-5xl text-center p-5">
        My <span className="text-blue-600">Services</span>
      </p>
      <div className="grid grid-cols-3 gap-7">
        {List.map((item, index) => (
          <div key={index} className="">
            <ServiceCard {...item} onClickCard={() => handleOpenModal(item)} />
          </div>
        ))}
        {selectedItem && <ServiceModal {...selectedItem} onClose={handleCloseModal} />}
      </div>
    </div>
  );
};

export default Services;

const List = [
  {
    sign: <FaCode />,
    directionA: <GoArrowDownRight />,
    directionB: <GoArrowRight />,
    title: "Software Development",
    content:
      "I'm passionate about writing clean, efficient code and am always looking for ways to improve the performance and functionality of the applications I work on. I'm also familiar with using tools like Git, IntelliJ, and databases like MySQL to streamline development.",
  },
  {
    sign: <FaCode />,
    directionA: <GoArrowDownRight />,
    directionB: <GoArrowRight />,
    title: "Backend Java Development",
    content:
      "I have a strong foundation in HTML, CSS, and JavaScript, and I leverage frameworks like Bootstrap to create responsive and visually appealing web applications. I’m passionate about crafting user-friendly interfaces that enhance the overall user experience.",
  },
  {
    sign: <FaCode />,
    directionA: <GoArrowDownRight />,
    directionB: <GoArrowRight />,
    title: "Website Development",
    content:
      "I develop and implement effective SEO strategies that deliver results. That is because I have a strong understanding of search engine algorithms.",
  },
];
