import React, { useState } from "react";
import ExperienceCard from "./ExperienceCard";

const Education = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-extrabold text-5xl">
        My <span className="text-blue-600">Education</span>
      </h1>
      <p>
        Experienced Backend Engineer with over 5 years of expertise in designing
        and building scalable, high-performance applications using Java, Spring
        Boot, Node.js, and Microservices. Strong background in cloud computing
        (AWS, GCP), DevOps, security best practices, and CI/CD pipelines.
        Proficient in REST API development, event-driven architecture (Kafka),
        and containerization (Docker, Kubernetes). Adept at applying SOLID
        principles, TDD, and Agile methodologies. Experienced in industries such
        as Fintech, Oil & Gas, and Real Estate. Passionate about building
        efficient backend systems and mentoring teams to deliver high-quality
        solutions.
      </p>
      <div
        className={`flex-grow overflow-y-auto max-h-[300px] grid grid-cols-2 gap-4 ${
          isHovered ? "custom-scrollbar" : "no-scrollbar"
        } transition-all duration-500`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {EducationList.map((exp, index) => (
          <div key={index}>
            <ExperienceCard {...exp} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

const EducationList = [
  {
    title: "B.Tech in Maritime Management Technology",
    institution: "Federal University of Technology, Owerri",
    date: "2016 - 2021",
    description: [
      "Graduated with a 2nd Class Upper Division.",
      "Completed a final year project on 'Real-time Traffic Monitoring System using IoT'.",
      "Participated in various hackathons and coding competitions.",
    ],
  },
  {
    title: "Master’s in Information Technology",
    institution: "University of Lagos",
    date: "2024 - 2026",
    description: [
      "Gained expertise in designing distributed systems on AWS.",
      "Learned best practices for security, cost optimization, and performance.",
    ],
  },
];
