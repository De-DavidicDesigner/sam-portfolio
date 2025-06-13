import React from "react";
import ContactDetail from "../components/ContactDetail";
import SendMessage from "../components/SendMessage";

const Contact = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-10 bg-gray-900 h-screen px-20 py-10 items-center">
        <ContactDetail />
        <SendMessage />
      </div>
    </div>
  );
};

export default Contact;
