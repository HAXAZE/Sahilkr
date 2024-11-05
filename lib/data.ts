import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaGithub } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Chandigarh University",
    location: "Mohali, Punjab, India",
    description: "Pursuing Bachelor of Engineering in Computer Science and Engineering, with coursework in OOPS, DBMS, Data Structures and Algorithms, Operating Systems, and Computer Networks.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2021 - Jun 2025",
  },
  {
    title: "Full Stack Developer Intern",
    location: "BlueStock Fintech",
    description: "Designed a responsive frontend with React.js and Tailwind CSS, achieving 95% loading speeds in under 2 seconds. Developed the backend using Django, providing IPO services to over 1,000 users and managing secure record-keeping of over 5,000 IPO records with PostgreSQL.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2024 - Aug 2024",
  },
  {
    title: "Python Developer Intern",
    location: "KoiReader Technologies",
    description: "Trained machine learning models with Python and OpenCV, achieving 95% accuracy on 1,000+ images. Built a high-performance video processing pipeline, automating workflows to reduce processing time by 50%.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2023 - Jun 2024",
  },
  {
    title: "Freelance Full-Stack Developer",
    location: "Remote",
    description: "Working as a freelance full-stack developer with a tech stack including React, Next.js, TypeScript, Tailwind, Prisma, and MongoDB. Open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "June 2024 - present",
  },
] as const;


export const projectsData = [
  {
    title: "Meety",
    description: " A WebRTC and WebSocket based Online Meeting platform integrated with Screen Sharing, Chat and WhiteBoard Features",
    tags: ["WebRTC", "Socket.IO", "CSS", "Node.js", "HTML"],
    imageUrl: corpcommentImg,
    githubUrl: "https://github.com/HAXAZE/Meety",
    liveUrl: "https://meety-6q8l.onrender.com/", // Add live link here
  },
  {
    title: "FoodieBear",
    description: "Food ordering website with an admin panel for menu updates and a client panel for placing orders.",
    tags: ["React", "JavaScript", "MongoDB", "CSS"],
    imageUrl: rmtdevImg,
    githubUrl: "https://github.com/HAXAZE/FoodieBear",
    liveUrl: "https://foodie-bear.vercel.app/", // Add live link here
  },
  {
    title: "Zcrum",
    description: "A Jira Type Project Management Web App for project progress Tracking with features of Assignee and sprint. ",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    githubUrl: "https://github.com/HAXAZE/Zcrum",
    liveUrl: "https://zcrumit.vercel.app/", // Add live link here
  },
] as const;

export const skillsData = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Git", 
  "Tailwind", "Prisma", "MongoDB", "Redux", "GraphQL", "Apollo", "Express", 
  "PostgreSQL", "Python", "Django", "Framer Motion"
] as const;
