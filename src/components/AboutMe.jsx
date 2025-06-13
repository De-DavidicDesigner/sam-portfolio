import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-extrabold text-5xl">
        About <span className="text-blue-600">Me</span>
      </h1>
      <p>
        Experienced Backend Engineer with over 5 years of expertise in designing
        I've built scalable, high performing applications in software and web
        development, captured compelling visual narratives through photography
        and video editing, and optimized content with SEO strategies that drive
        measurable results.
      </p>
      <div className="grid grid-cols-2 gap-7">
        {AboutMeList.map((list) => (
          <div key={list.id} className="flex gap-5">
            <p className="text-blue-600">{list.title}:</p>
            <p>{list.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;

const AboutMeList = [
  {
    id: 1,
    title: 'Name',
    content: 'Omolaja Samuel Olawale'
  },
  {
    id: 2,
    title: 'Gender',
    content: 'Male'
  },
  {
    id: 3,
    title: 'Status',
    content: 'In A Relationship'
  },
  {
    id: 4,
    title: 'City',
    content: 'Agege'
  },
  {
    id: 5,
    title: 'State',
    content: 'Lagos'
  },
  {
    id: 6,
    title: 'Nationality',
    content: 'Nigerian'
  },
  {
    id: 7,
    title: 'Experience',
    content: '5+ Years'
  },
  {
    id: 8,
    title: 'Remote',
    content: 'Available'
  },
  {
    id: 9,
    title: 'Phone',
    content: '(+234) 816 122 8946'
  },
  {
    id: 10,
    title: 'Email',
    content: 'samlajaja1292@gmail.com'
  },
  {
    id: 11,
    title: 'Language spoken',
    content: 'English and Yoruba'
  },
  {
    id: 12,
    title: 'DOB',
    content: '2nd December, 1992'
  },
]
