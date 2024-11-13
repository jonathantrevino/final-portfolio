import {
  ProjectType,
  SampleProject,
  projects,
  samples,
} from "@/app/constants/project_details";
import type { Metadata } from "next";
import { ExternalLink, Code, MoveLeft } from "lucide-react";
import Image from "next/image";
import Project from "@/app/components/project/project";
import Link from "next/link";
import SkillBadge from "@/app/components/skillBadge";

type Params = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Params): Promise<Metadata> {
  const projectData: ProjectType | undefined = projects.find(
    (project) => project.title.toLowerCase() === id,
  );

  if (!projectData) {
    return {
      title: "Jonathan Trevino - Project Not Found",
      description: "Project Not Found",
    };
  }
  return {
    title: `Jonathan Trevino - ${projectData?.title}`,
    description: projectData?.description,
  };
}

export default function Page({ params: { id } }: Params) {
  const projectData: ProjectType | undefined = projects.find(
    (project) => project.title.toLowerCase() === id,
  );
  const extraProjectData: SampleProject | undefined = samples.find(
    (project) => project.title.toLowerCase() !== id,
  );

  console.log(extraProjectData);
  console.log(projectData)

  if (!projectData)
    return (
      <div className="min-h-[calc(100vh-605px)] max-w-[1440px] mx-auto flex flex-col justify-center items-center">
        <div className="font-medium text-[39px]">Project Not Found</div>
        <Link
          href="/"
          className="link link-underline flex gap-2 items-center text-gray-500"
        >
          Go Back Home
        </Link>
      </div>
    );
  return (
    <>
      <section className="flex lg:flex-row flex-col-reverse gap-5 px-[40px] mt-[74px] max-w-[1440px] mx-auto">
        <div className="flex-[0.5] space-y-5">
          <div className="space-y-3 mb-[44px]">
            <div>
              <h1 className="text-[39px] font-medium">{projectData.title}</h1>
              <p>{projectData.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 min-h-[44px]">
              {projectData.skills.map((skill, index) => (
                <SkillBadge key={index} image_url={null} title={skill.title} />
              ))}
            </div>
            <div className="flex gap-3">
              {projectData.url && (
                <a
                  href={projectData.url}
                  target="_blank"
                  className="btn btn-primary btn-sm"
                >
                  <ExternalLink size={16} />
                  View Live
                </a>
              )}
              <a
                href={projectData.github_url}
                target="_blank"
                className="btn btn-neutral btn-sm"
              >
                <Code size={16} />
                View Code
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-[27px]">Overview</h2>
            <p>{projectData.overview}</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-[27px]">Features</h2>
            <p>{projectData.features}</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-[27px]">Challenges</h2>
            <p>{projectData.challenges}</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-[27px]">Results</h2>
            <p>{projectData.results}</p>
          </div>
        </div>
        <div className="flex-[0.5] relative space-y-3">
          <Image
            src={projectData.img_url}
            className="border  border-base-300 shadow-sm shadow-black/5"
            width={935}
            height={935}
            alt={projectData.title}
          />
        </div>
      </section>
      <div className=" max-w-[1440px] mx-auto px-[40px] mt-[40px]">
        <h3 className="text-[23px]">Explore My Other Projects</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2  mt-[20px] gap-5">
          {Array.isArray(extraProjectData)
            ? extraProjectData.map((sample, index) => (
              <Project
                key={index}
                title={sample.title}
                description={sample.description}
                skills={sample.skills}
                img_url={sample.img_url}
                url={sample.url}
                index={sample.index}
              />
            ))
            : extraProjectData && (
              <Project
                title={extraProjectData.title}
                description={extraProjectData.description}
                skills={extraProjectData.skills}
                img_url={extraProjectData.img_url}
                url={extraProjectData.url}
                index={extraProjectData.index}
              />
            )}
        </div>
      </div>
    </>
  );
}
