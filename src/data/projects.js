// Case studies of systems built in production roles.
// `flow` is rendered as a small request pipeline diagram on each card.
export const projects = [
  {
    name: "Central Card Management System",
    org: "eTranzact",
    summary:
      "Multi-tenant platform for issuing and managing virtual debit cards across partner institutions, with tenant isolation and strict security controls.",
    impact: { value: "99.9%", label: "uptime" },
    flow: ["Partner API", "Gateway", "Card Service", "Ledger DB"],
    stack: ["Java", "Spring Boot", "AWS", "REST"],
  },
  {
    name: "Central Notification Service",
    org: "eTranzact",
    summary:
      "Event-driven service that fans out transaction alerts across channels, decoupling notifications from the payment path.",
    impact: { value: "−60%", label: "transaction delays" },
    flow: ["Payments", "Kafka", "Notifier", "SMS / Email"],
    stack: ["Kafka", "Java", "Microservices"],
  },
  {
    name: "Gas Delivery Nomination System",
    org: "EBIS Tech",
    summary:
      "Nomination workflow for gas deliveries with accurate volume calculations and real-time data streaming into Power BI dashboards.",
    impact: { value: "+40%", label: "operational efficiency" },
    flow: ["Nominations", "API", "Stream", "Power BI"],
    stack: ["Data Streaming", "Database Design", "Power BI"],
  },
  {
    name: "High-Throughput Fintech APIs",
    org: "Fintech",
    summary:
      "Developed and maintained transaction APIs with authentication, rate limiting and serverless functions for burst workloads.",
    impact: { value: "100k+", label: "daily transactions" },
    flow: ["Clients", "Rate Limiter", "API", "Lambda"],
    stack: ["REST", "AWS Lambda", "Rate Limiting"],
  },
];
