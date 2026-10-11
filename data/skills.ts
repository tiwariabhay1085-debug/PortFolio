import {
  Atom, Bot, Braces, Code, Container, Database, FileCode, FlaskConical, Flame,
  GitBranch, GitPullRequest, Languages, Layers, LibraryBig, Leaf, NotebookPen, Network,
  Paintbrush, Route, Server, ShieldCheck, Sigma, Sparkles, Table, Table2, Terminal,
  Waypoints, Wind, type LucideIcon,
} from "lucide-react";

// Self-assessed labels. Edit each `level` to match your real experience.
export type Level = "Learning" | "Working knowledge" | "Comfortable";

export interface Skill {
  name: string;
  icon: LucideIcon;
  level: Level;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  wide?: boolean;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Layers,
    skills: [
      { name: "HTML5", icon: FileCode, level: "Comfortable" },
      { name: "CSS3", icon: Paintbrush, level: "Comfortable" },
      { name: "JavaScript", icon: Braces, level: "Comfortable" },
      { name: "React.js", icon: Atom, level: "Comfortable" },
      { name: "Next.js", icon: Layers, level: "Working knowledge" },
      { name: "Tailwind CSS", icon: Wind, level: "Working knowledge" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", icon: Server, level: "Comfortable" },
      { name: "Express.js", icon: Route, level: "Comfortable" },
      { name: "REST APIs", icon: Waypoints, level: "Comfortable" },
      { name: "Authentication and authorization", icon: ShieldCheck, level: "Working knowledge" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: Leaf, level: "Working knowledge" },
      // Edit based on your actual SQL experience.
      { name: "SQL", icon: Table2, level: "Learning" },
    ],
  },
  {
    title: "Tools",
    icon: Terminal,
    skills: [
      { name: "Git", icon: GitBranch, level: "Comfortable" },
      { name: "GitHub", icon: GitPullRequest, level: "Comfortable" },
      { name: "VS Code", icon: Code, level: "Comfortable" },
      { name: "Jupyter Notebook", icon: NotebookPen, level: "Working knowledge" },
      { name: "Linux", icon: Terminal, level: "Working knowledge" },
      // Marked as learning until you confirm otherwise.
      { name: "Docker", icon: Container, level: "Learning" },
    ],
  },
  {
    title: "Programming and AI",
    icon: Sparkles,
    wide: true,
    skills: [
      { name: "Python", icon: Code, level: "Comfortable" },
      { name: "NumPy", icon: Sigma, level: "Working knowledge" },
      { name: "Pandas", icon: Table, level: "Working knowledge" },
      { name: "Scikit-learn", icon: FlaskConical, level: "Working knowledge" },
      { name: "TensorFlow", icon: Network, level: "Working knowledge" },
      { name: "PyTorch", icon: Flame, level: "Working knowledge" },
      { name: "Natural Language Processing", icon: Languages, level: "Working knowledge" },
      { name: "Transformers and LLMs", icon: Sparkles, level: "Learning" },
      { name: "Retrieval-Augmented Generation (RAG)", icon: LibraryBig, level: "Learning" },
      { name: "Agentic AI and AI agents", icon: Bot, level: "Learning" },
    ],
  },
];
