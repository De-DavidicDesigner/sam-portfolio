import React from "react";

const SendMessage = () => {
  return (
    <div className="bg-gray-800 rounded-2xl p-10 text-white flex flex-col gap-5">
      <p className="text-3xl font-bold text-center">
        Contact <span className="text-blue-600">Me!</span>
      </p>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <input type="text" placeholder="Full Name" className="bg-gray-900 p-3 rounded w-full" />
          <input type="email" placeholder="Email Address" className="bg-gray-900 p-3 rounded w-full" />
        </div>
        <div className="flex gap-5">
          <input type="number" placeholder="Phone Number" className="bg-gray-900 p-3 rounded w-full" />
          <input type="text" placeholder="Email Subject" className="bg-gray-900 p-3 rounded w-full" />
        </div>
        <div>
          <textarea placeholder="Your Message" rows="5" cols="50" className="bg-gray-900 p-3 rounded w-full"></textarea>
        </div>
      </div>
    </div>
  );
};

export default SendMessage;
