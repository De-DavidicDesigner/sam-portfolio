import { useState } from "react";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-extrabold text-5xl">
        My <span className="text-blue-600">Experience</span>
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
        {ExperienceList.map((exp, index) => (
          <div key={index}>
            <ExperienceCard {...exp} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

const ExperienceList = [
  {
    title: "Software Engineer",
    company: "eTranzact Plc. - Fintech",
    date: "Dec. 2023 - Present",
    description: [
      "Led the development of a Central Card Management System (virtual debit card in a multi-tenant environment), achieving 99.9% uptime.",
      "Built a Central Notification Service System using Kafka, reducing transaction delays by 60% through event-driven architecture.",
      "Improved API security and scalability by implementing authentication and rate-limiting strategies.",
      "Integrated AWS services (S3, Lambda, EC2) for seamless backend scalability and reliability.",
    ],
  },
  {
    title: "Software Engineer (Remote, UK)",
    company: "EBIS Tech - Oil & Gas",
    date: "August 2022 - December 2022",
    description: [
      "Developed a gas delivery nomination system, increasing operational efficiency by 40%.",
      "Implemented real-time data streaming for Power BI integration, reducing manual reporting time by 50%.",
      "Designed a robust database strategy for accurate gas volume calculations (99.9% accuracy).",
    ],
  },
  {
    title: "Enterprise Architect (Remote, Lagos)",
    company: "Payvessel - Fintech",
    date: "January 2023 - April 2023",
    description: [
      "Engineered a scalable system architecture, increasing system efficiency by 70%.",
      "Led CI/CD pipeline implementation, reducing deployment time by 50%.",
      "Enhanced backend security measures to prevent vulnerabilities and attacks.",
    ],
  },
  {
    title: "Backend Engineer (Remote, Enugu)",
    company: "Samtechnet - Telecom",
    date: "June 2018 - February 2020",
    description: [
      "Led a team of developers in building a SIM hosting server, improving uptime by 80%.",
      "Introduced Agile methodologies, increasing team productivity.",
      "Established a continuous integration and deployment (CI/CD) process.",
    ],
  },
];
