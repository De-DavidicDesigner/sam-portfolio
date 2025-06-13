import { IoMdClose } from "react-icons/io";

const ServiceModal = ({ title, content, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="flex flex-col top-32 rounded-md backdrop-blur-md border-blue-800/20 left-20 md:left-36 lg:left-52 absolute w-[60%] p-16 pb-16 gap-5 bg-gray-800/20">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 cursor-pointer bg-gray-200  p-2 duration-500 text-black hover:bg-gray-500 hover:text-white"
        >
          <IoMdClose />
        </button>
        <h2 className="font-bold text-3xl text-blue-600">{title}</h2>
        <p className="text-lg">{content}</p>
      </div>
    </div>
  );
};

export default ServiceModal;
