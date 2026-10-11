export interface EducationEntry {
  institution: string;
  degree: string;
  branch: string;
  graduation: string;
  score: string;
  coursework: string[];
}

export const education: EducationEntry[] = [
  {
    institution: "Institute of Technology",
    degree: "B.Tech in Computer Science & Engineering",
    branch: "Computer Science and Engineering",
    graduation: "2024",
    score: "CGPA: 8.7 / 10",
    coursework: [
      "Data Structures and Algorithms",
      "Operating Systems",
      "Database Management Systems",
      "Computer Networks",
      "Machine Learning",
      "Web Technologies",
    ],
  },
];
