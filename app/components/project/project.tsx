"use client";
import { SampleProject } from "@/app/constants/project_details";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

const Project = ({
  title,
  description,
  skills,
  img_url,
  url,
  index,
}: SampleProject) => {
  const router = useRouter();
  return (
    <motion.div
      // href={url}
      initial={{ opacity: 0.0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1 * index,
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="col-span-1 bg-base-200 p-4 relative overflow-hidden rounded-md border border-base-300 group cursor-pointer"
      onClick={() => router.push(`/project/${url}`)}
    >
      <div className="space-y-3">
        <span className="space-y-2">
          <div className="flex justify-between items-center flex-wrap gap-5">
            <h3 className="text-[19px]">{title}</h3>
            <div className="badge badge-outline badge-primary">Web App</div>
          </div>
          <p className="text-[14px] leading-relaxed">{description}</p>
        </span>
        <div className="flex flex-wrap gap-2 min-h-[44px]">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-neutral text-neutral-content px-2 text-[12px] h-fit"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="relative w-full h-full flex justify-end group-hover:scale-105 group-hover:-rotate-12 transition-all ease-out group-hover:drop-shadow-lg group-hover:-translate-y-[2px]">
        <div className="w-[250px] h-[250px] sm:w-[200px] sm:h-[200px] lg:w-[200px] lg:h-[200px]">
          <Image
            className="absolute -right-4 -bottom-0"
            draggable={false}
            src={`/${img_url}`}
            width={300}
            height={300}
            alt={`${title}`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
