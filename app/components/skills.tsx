"use client";
import React from "react";
import { skills_images } from "../constants/project_details";
import Image from "next/image";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="pt-[109px]" id="skills">
      <h2 className="text-[27px] font-semibold">Skills</h2>
      <div className="relative flex justify-center flex-wrap sm:grid sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-10 mt-[20px] gap-2">
        {skills_images.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 * (index * 0.2), duration: 0.2 }}
            className="sm:w-full sm:h-full w-[100px] h-[100px] aspect-square group relative bg-base-200 hover:scale-105 transition-all"
          >
            <Image
              className="rounded-md transition-all ease-in-out group-hover:scale-125 group-hover:z-10"
              src={skill.url}
              alt={skill.title}
              fill
            />
            <div className="group-hover:scale-100 scale-50 group-hover:opacity-100 group-hover:bg-base-100 rounded-md px-2 opacity-0 absolute bottom-2 -right-1 block shadow-lg border border-base-300 group-hover:z-20 text-sm transition-all">
              {skill.title}
            </div>
          </motion.div>
        ))}
      </div>{" "}
    </div>
  );
};

export default Skills;
