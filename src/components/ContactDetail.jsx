import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

import { Link } from 'react-router-dom';


const ContactDetail = () => {
  return (
    <div className="text-white flex flex-col gap-5">
      <h1 className="font-extrabold text-5xl">Let's work Together</h1>
      <p>
        Let's collaborate to bring your vision to life. I'm passionate about
        turning ideas into reality, and I'm excited to work together on projects
        that challenge and inspire us both.
      </p>
      <div className="grid grid-cols-2 gap-4">
      {contactList.map((contact, index) => (
        <Link to={contact.link} key={index} className="flex gap-5 items-center">
          <div className="flex w-15 h-15 items-center justify-center rounded text-4xl text-blue-600 bg-gray-600">
            {contact.icon}
          </div>
          <div>
            <span className="text-blue-600">{contact.title}</span>
            <p>{contact.detail}</p>
          </div>
        </Link>
      ))}
      </div>
    </div>
  );
};

export default ContactDetail;


const contactList = [
  {
    id: 1,
    icon: <BsTelephone />,
    title: "Phone",
    detail: "08161228946",
  },
  {
    id: 2,
    icon: <MdOutlineEmail />,
    title: "Email",
    detail: "samlaja1292@gmail.com",
  },
  {
    id: 3,
    icon: <FaLocationDot />,
    title: "Address",
    detail: "Agege Lagos, Nigeria",
  },
  {
    id: 4,
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    detail: "08161228946",
    link: "https://wa.me/2348161228946",
  }
]