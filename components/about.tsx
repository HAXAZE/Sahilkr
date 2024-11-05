"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        Hi, I'm <span className="font-medium">Sahil Kumar</span>, a passionate software developer in my final year of B.E. in Computer Science and Engineering at Chandigarh University. I have honed my skills in languages such as 
        <span className="font-medium"> C/C++, Java, Python, JavaScript, TypeScript, and SQL</span>. My core stack includes 
        <span className="font-medium"> React, Next.js, Node.js, and PostgreSQL</span>. I am always eager to learn new technologies and am currently seeking a{" "}
        <span className="font-medium">full-time position</span> as a software developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing football, traveling, and exploring ethical hacking tricks. I also love spending time with my dog and indulging in video games and movies. Currently, I am learning about{" "}
        <span className="font-medium">history, psychology, and how to play the guitar</span>.
      </p>

      {/* <p>
        Feel free to connect with me on{" "}
        <a href="https://github.com/HAXAZE" className="font-medium">GitHub</a> or{" "}
        <a href="https://linkedin.com/in/Haxaze" className="font-medium">LinkedIn</a>. You can also reach me at <span className="font-medium">28skofficial01@gmail.com</span> or <span className="font-medium">+917061356923</span>.
      </p> */}
    </motion.section>
  );
}
