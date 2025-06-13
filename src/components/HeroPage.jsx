import React from "react";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import self from "../assets/Sam.jpg";

const HeroPage = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(200);
  const [pause, setPause] = useState(false);
  
  useEffect(() => {
    const words = ["Software Engineer", "Christian", "Developer"];

    if (pause) return; // skip this frame if paused

    const currentWord = words[wordIndex];

    const handleTyping = () => {
      if (isDeleting) {
        setText((prev) => {
          const updated = currentWord.substring(0, prev.length - 1);
          if (updated === "") {
            setIsDeleting(false);
            setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            setPause(true);
            setTimeout(() => setPause(false), 1000); // pause before typing next word
          }
          return updated;
        });
        setTypingSpeed(200); // 1 second per letter during delete
      } else {
        setText((prev) => {
          const updated = currentWord.substring(0, prev.length + 1);
          if (updated === currentWord) {
            setPause(true);
            setTimeout(() => {
              setIsDeleting(true);
              setPause(false);
            }, 1000); // pause before deleting
          }
          return updated;
        });
        setTypingSpeed(500); // slower typing
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, pause, typingSpeed, wordIndex]);

  return (
    <div className="w-full h-screen px-20 bg-gray-900 flex flex-row items-center justify-center">
      <div className="container flex flex-col items-start justify-center">
        <h1 className="text-6xl font-bold text-white">Samuel Omolaja</h1>
        <p className="text-3xl font-bold text-gray-400 mt-4">I am a {text}</p>
        <p className="text-lg text-gray-400 mt-2">
          Welcome to my portfolio website!
        </p>
        <div className="flex space-x-20 mt-4">
          <a
            href="#"
            className="bg-blue-600 text-white px-4 py-2 rounded-3xl border-2 border-blue-600 hover:text-blue-600 hover:border-2 hover:bg-transparent transition duration-300"
          >
            Get in Touch
          </a>
          <div className="flex flex-row space-x-6">
            <a
              href=""
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-black/90 transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/samuel-omolaja-b2480089?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-black/90 transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/share/164zrgBUsK/"
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-black/90 transition duration-300"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
      <div className="container flex flex-col items-center justify-center">
        <img
          src={self}
          alt="Placeholder"
          className="rounded-full w-120 h-120 mt-4"
        />
      </div>
    </div>
  );
};

export default HeroPage;
