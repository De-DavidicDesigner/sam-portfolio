import {
  LuCloudCog,
  LuLayoutTemplate,
  LuServer,
  LuShieldCheck,
  LuUsers,
  LuWorkflow,
} from "react-icons/lu";

export const services = [
  {
    method: "POST",
    path: "/api-development",
    title: "Backend & API Engineering",
    description:
      "Robust REST APIs and services in Java/Spring Boot or Node.js — well-structured, documented, tested and built to scale with your traffic.",
    icon: LuServer,
  },
  {
    method: "PUT",
    path: "/architecture",
    title: "Distributed Systems",
    description:
      "Microservice and event-driven designs with Kafka or RabbitMQ that decouple workloads and keep critical paths fast.",
    icon: LuWorkflow,
  },
  {
    method: "POST",
    path: "/cloud",
    title: "Cloud & DevOps",
    description:
      "Containerised deployments on AWS or GCP with Docker, Kubernetes and CI/CD pipelines that make releases boring — in a good way.",
    icon: LuCloudCog,
  },
  {
    method: "PATCH",
    path: "/security",
    title: "Security & Performance",
    description:
      "Authentication, rate limiting and OWASP-driven hardening, plus profiling and tuning to remove bottlenecks before your users find them.",
    icon: LuShieldCheck,
  },
  {
    method: "POST",
    path: "/full-stack",
    title: "Full-Stack Web Apps",
    description:
      "End-to-end delivery when you need it: a solid backend paired with a clean, responsive frontend.",
    icon: LuLayoutTemplate,
  },
  {
    method: "GET",
    path: "/mentorship",
    title: "Technical Leadership",
    description:
      "Mentoring developers, introducing Agile practices and setting engineering standards that help teams ship quality work.",
    icon: LuUsers,
  },
];
