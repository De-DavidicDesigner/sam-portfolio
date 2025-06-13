import java from "../assets/java.svg";
import springBoot from "../assets/spring.svg";
import docker from "../assets/docker.svg";
import git from "../assets/git.svg";
import gitHub from "../assets/github.svg";
import kafka from "../assets/kafka.svg";
import mySQL from "../assets/mysql.svg";
import nodeJS from "../assets/nodejs.svg";
import php from "../assets/php.svg";
import python from "../assets/python.svg";
import rabbitMQ from "../assets/rabbitmq.svg";
import redis from "../assets/redis.svg";
import javaScript from "../assets/javascript.svg";
// import typeScript from "../assets/typescript.svg";

import SkillsCard from "./SkillsCard";

const Skils = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-extrabold text-5xl">
        My <span className="text-blue-600">Skills</span>
      </h1>
      <p>
        I've built scalable, high performing applications in software and web
        development, captured compelling visual narratives through photography
        and video editing, and optimized content with SEO strategies that drive
        measurable results.
      </p>
    
      {overallList.map((item) => (
        <div key={item.id} className="flex flex-col gap-3">
          <p className="font-bold text-2xl">{item.title}</p>
          <div className="grid grid-cols-4 gap-6">
            <SkillsCard skills={item.skills} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skils;


const otherSkillsList = [
  {
    id: 1,
    title: "Git",
    logo: git,
  },
  {
    id: 2,
    title: "GitHub",
    logo: gitHub,
  },

  {
    id: 3,
    title: "rabbitMq",
    logo: rabbitMQ,
  },
];

const dataBaseSkills = [
  {
    id: 1,
    title: "MySQL",
    logo: mySQL,
  },
  {
    id: 2,
    title: "Redis",
    logo: redis,
  },
];

const progSkills = [
  {
    id: 1,
    title: "Java",
    logo: java,
  },
  {
    id: 2,
    title: "Spring Boot",
    logo: springBoot,
  },
  {
    id: 3,
    title: "NodeJS",
    logo: nodeJS,
  },
  {
    id: 4,
    title: "Python",
    logo: python,
  },
  {
    id: 5,
    title: "JavaScript",
    logo: javaScript,
  },
  {
    id: 6,
    title: "PHP",
    logo: php,
  },
];

const microSkills = [
  {
    id: 1,
    title: "Kafka",
    logo: kafka,
  },
];

const cloudSkills = [
  {
    id: 1,
    title: "Docker",
    logo: docker,
  },
];

const overallList = [
  {
    id: 1,
    title: "Programming Languages",
    skills: progSkills,
  },
  {
    id: 2,
    title: "Backend and Microservices",
    skills: microSkills,
  },
  {
    id: 3,
    title: "Databases",
    skills: dataBaseSkills,
  },
  {
    id: 4,
    title: "Clouds and DevOps",
    skills: cloudSkills,
  },
  {
    id: 5,
    title: "Other Skills",
    skills: otherSkillsList,
  },
];