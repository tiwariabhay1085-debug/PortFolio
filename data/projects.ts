// Edit this file to update the project cards and the "View Project" dialogs.
// Rules: leave repoUrl / demoUrl as "" until the link really exists. Empty values hide the buttons.
// Feature states: "done" = implemented, "building" = in progress, "planned" = not started.
// The defaults below are starting points. Change each state to match your real progress.

export type ProjectStatus = "Completed" | "In progress" | "Planned";
export type FeatureState = "done" | "building" | "planned";

export interface Feature {
  label: string;
  state: FeatureState;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  status: ProjectStatus;
  image: string;
  imageAlt: string;
  tech: string[];
  features: Feature[];
  repoUrl: string;
  demoUrl: string;
  screenshots: { src: string; alt: string }[];
}

export const projects: Project[] = [
  {
    slug: "medvision-ai",
    title: "MedVision AI",
    summary: "Explainable AI for medical image classification, with heatmaps that show what the model looked at.",
    description:
      "MedVision AI classifies medical images and explains each prediction. The goal is to pair modality-specific models with explainability heatmaps and short prediction reports, so a result comes with the reasoning behind it.",
    status: "In progress",
    image: "/images/medvision.svg",
    imageAlt: "Abstract medical scan with an explainability heatmap overlay",
    tech: ["Python", "Deep Learning", "CNNs", "Explainable AI", "Web interface"],
    features: [
      { label: "Medical image classification", state: "building" },
      { label: "Modality-specific model selection", state: "building" },
      { label: "Explainability heatmaps", state: "planned" },
      { label: "Prediction summaries and report generation", state: "planned" },
    ],
    repoUrl: "",
    demoUrl: "",
    screenshots: [],
  },
  {
    slug: "food-delivery-platform",
    title: "Online Food Delivery Platform",
    summary: "A full-stack MERN food ordering app with an admin dashboard. AI features are planned.",
    description:
      "A full-stack food delivery application built on the MERN stack. The core platform covers browsing food, signing in, and placing orders, with an admin dashboard to manage it. AI-powered recommendations and a chatbot are planned additions, listed separately below.",
    status: "In progress",
    image: "/images/food-delivery.svg",
    imageAlt: "Abstract food delivery app screens with a plate and order cards",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    features: [
      { label: "Food listing and category management", state: "building" },
      { label: "User authentication", state: "building" },
      { label: "Order management", state: "building" },
      { label: "Admin dashboard", state: "building" },
      { label: "AI-powered food recommendations (planned AI)", state: "planned" },
      { label: "Ordering chatbot (planned AI)", state: "planned" },
    ],
    repoUrl: "",
    demoUrl: "",
    screenshots: [],
  },
  {
    slug: "soc-multi-agent-assistant",
    title: "SOC Multi-Agent Assistant",
    summary: "An AI-assisted security analysis project combining ML detection with retrieval and agents.",
    description:
      "An in-progress cybersecurity project that uses machine learning for security dataset analysis, anomaly detection, and malware classification, plus retrieval over CVE and MITRE ATT&CK knowledge. AI agents built with LangGraph are meant to assist the analysis.",
    status: "In progress",
    image: "/images/soc-agent.svg",
    imageAlt: "Abstract network graph around a shield, representing security agents",
    tech: ["Python", "Machine Learning", "PyTorch", "RAG", "LLMs", "LangGraph"],
    features: [
      { label: "Security dataset analysis", state: "building" },
      { label: "Anomaly detection", state: "building" },
      { label: "Malware classification", state: "planned" },
      { label: "CVE and MITRE ATT&CK knowledge retrieval", state: "planned" },
      { label: "AI-agent-assisted security analysis", state: "planned" },
    ],
    repoUrl: "",
    demoUrl: "",
    screenshots: [],
  },
];
