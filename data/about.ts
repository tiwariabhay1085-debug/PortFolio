import { BrainCircuit, Code2, Rocket, type LucideIcon } from "lucide-react";

export interface InterestItem {
  icon: LucideIcon;
  title: string;
  text: string;
}

export const aboutParagraphs = [
  "I am a developer who enjoys turning ideas into useful digital products, especially in the intersection of full-stack engineering and practical AI.",
  "My work focuses on building clean, reliable interfaces and writing the backend logic that keeps those experiences fast and maintainable.",
  "I am especially interested in LLMs, retrieval systems, and agentic workflows that create real value from data and user context.",
];

export const interests: InterestItem[] = [
  { icon: Code2, title: "Product engineering", text: "Designing and shipping features that are useful, testable, and easy to evolve." },
  { icon: BrainCircuit, title: "AI systems", text: "Exploring how LLMs, retrieval, and workflows can support smarter user experiences." },
  { icon: Rocket, title: "Iteration", text: "Moving from prototype to production by learning quickly and improving through feedback." },
];

export const stats = [
  { label: "Projects", value: "5+" },
  { label: "Focus areas", value: "4" },
  { label: "Learning", value: "Always" },
];
