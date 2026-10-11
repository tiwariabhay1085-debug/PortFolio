// Central profile configuration. Edit the values below; every component reads from here.

export interface NavLink {
  label: string;
  href: string;
}

export const site = {
  name: "Abhay Tiwari",
  role: "Full-Stack Developer | AI/ML Enthusiast | Agentic AI Developer",
  title: "Abhay Tiwari | Full-Stack & AI/ML Developer",
  description:
    "Portfolio of Abhay Tiwari, a full-stack developer building MERN applications and exploring machine learning, NLP, LLMs, RAG, and agentic AI.",
  keywords: [
    "Abhay Tiwari",
    "Full-Stack Developer",
    "MERN Stack",
    "Machine Learning",
    "NLP",
    "LLM",
    "Agentic AI",
    "Portfolio",
  ],

  // TODO: replace with your deployed URL (used for SEO metadata).
  url: "https://your-site.vercel.app",

  // TODO: replace with your real email address.
  email: "your.email@example.com",

  // TODO: replace with your real profile URLs. These defaults open the site home pages.
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",

  // Put your resume at public/resume.pdf (same filename) and the button downloads it.
  resume: { path: "/resume.pdf", downloadName: "Abhay_Tiwari_Resume.pdf" },

  // Replace public/images/profile.svg with your photo, e.g. "/images/profile.jpg".
  profileImage: { src: "/images/profile.svg", alt: "Portrait of Abhay Tiwari", width: 480, height: 560 },

  // Set show: false to hide the badge.
  badge: { show: true, text: "Open to Opportunities" },

  heroRoles: [
    "Full-Stack Developer",
    "AI/ML Enthusiast",
    "NLP & LLM Developer",
    "Agentic AI Explorer",
  ],
  heroText:
    "I build web applications and explore intelligent systems that turn ideas into practical solutions.",

  // Optional: a form endpoint such as Formspree (https://formspree.io/f/xxxx).
  // Leave empty to use the mailto fallback. Nothing is claimed as "sent" without an endpoint.
  formEndpoint: "",
};

export const isPlaceholderEmail = site.email.endsWith("example.com");

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const footerLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  ...navLinks.slice(0, 5),
  { label: "Exploring", href: "#exploring" },
  navLinks[5],
];
