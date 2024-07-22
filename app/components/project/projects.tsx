import React from "react";
import Project from "./project";
import { samples } from "@/app/constants/project_details";

const Projects = () => {
  return (
    <div className="pt-[109px]" id="projects">
      <h2 className="text-[27px] font-semibold">Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2  mt-[20px] gap-5">
        {samples.map((sample, index) => (
          <Project
            key={index}
            title={sample.title}
            description={sample.description}
            skills={sample.skills}
            img_url={sample.img_url}
            url={sample.url}
            index={sample.index}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
