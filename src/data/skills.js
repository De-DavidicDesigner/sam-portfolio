import { FaShieldAlt } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import {
  SiAmazonwebservices,
  SiApachekafka,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithubactions,
  SiGooglecloud,
  SiJavascript,
  SiJenkins,
  SiJira,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiOpenjdk,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiRabbitmq,
  SiReact,
  SiRedis,
  SiSpringboot,
  SiTypescript,
} from "react-icons/si";

export const skillGroups = [
  {
    key: "languages",
    title: "Languages & Frameworks",
    items: [
      { name: "Java", icon: SiOpenjdk },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Python", icon: SiPython },
      { name: "PHP", icon: SiPhp },
    ],
  },
  {
    key: "distributed",
    title: "APIs & Messaging",
    items: [
      { name: "REST APIs", icon: TbApi },
      { name: "Kafka", icon: SiApachekafka },
      { name: "RabbitMQ", icon: SiRabbitmq },
      { name: "API Security", icon: FaShieldAlt },
    ],
  },
  {
    key: "data",
    title: "Databases",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
    ],
  },
  {
    key: "cloud",
    title: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: SiAmazonwebservices },
      { name: "Google Cloud", icon: SiGooglecloud },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Jenkins", icon: SiJenkins },
      { name: "GitHub Actions", icon: SiGithubactions },
    ],
  },
  {
    key: "tools",
    title: "Frontend & Tooling",
    items: [
      { name: "React", icon: SiReact },
      { name: "Git", icon: SiGit },
      { name: "Jira", icon: SiJira },
    ],
  },
];

export const practices = [
  "Microservices",
  "Event-driven architecture",
  "SOLID principles",
  "Test-driven development",
  "OWASP security",
  "Rate limiting",
  "Performance tuning",
  "API gateways",
  "Agile / Scrum",
];
