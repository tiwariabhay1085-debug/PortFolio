import { Award, BriefcaseBusiness, Sparkles, type LucideIcon } from "lucide-react";

export interface ExperienceEntry {
  title: string;
  date?: string;
  org?: string;
  description?: string;
  link?: string;
}

export interface ExperienceGroup {
  id: string;
  title: string;
  icon: LucideIcon;
  emptyText: string;
  entries: ExperienceEntry[];
}

export const experienceGroups: ExperienceGroup[] = [
  {
    id: "work",
    title: "Work and internships",
    icon: BriefcaseBusiness,
    emptyText: "No internship or work experience added yet.",
    entries: [],
  },
  {
    id: "achievements",
    title: "Achievements and certifications",
    icon: Award,
    emptyText: "No certifications or achievements added yet.",
    entries: [
      {
        title: "AI and web development learning path",
        date: "Ongoing",
        org: "Self-directed learning",
        description: "Continuously building projects around AI systems, modern web tools, and engineering workflows.",
      },
    ],
  },
  {
    id: "learning",
    title: "Learning highlights",
    icon: Sparkles,
    emptyText: "Learning notes will appear here as they are added.",
    entries: [],
  },
];
