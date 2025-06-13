import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const ContactDetail = () => {
  return (
    <div className="text-white flex flex-col gap-5">
      <h1 className="font-extrabold text-5xl">Let's work Together</h1>
      <p>
        Let's collaborate to bring your vision to life. I'm passionate about
        turning ideas into reality, and I'm excited to work together on projects
        that challenge and inspire us both.
      </p>
      <div className="flex flex-col gap-4">
        <div className="flex gap-5 items-center">
          <div className="flex w-15 h-15 items-center justify-center rounded text-4xl text-blue-600 bg-gray-600">
            <BsTelephone />
          </div>
          <div>
            <span className="text-blue-600">Phone</span>
            <p>+1 (123) 456-7890</p>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex w-15 h-15 items-center justify-center rounded text-4xl text-blue-600 bg-gray-600">
            <MdOutlineEmail />
          </div>
          <div>
            <span className="text-blue-600">Email</span>
            <p>+1 (123) 456-7890</p>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex w-15 h-15 items-center justify-center rounded text-4xl text-blue-600 bg-gray-600">
            <FaLocationDot />
          </div>
          <div>
            <span className="text-blue-600">Address</span>
            <p>+1 (123) 456-7890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
