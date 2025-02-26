import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { ProjectCard } from "@/components/ProjectCard";
import { projectData } from "@/data/projects"; // Assuming project data is stored here

export default function SpotlightPreview() {
  return (
    <div>
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative ">
      {/* Spotlight Effect */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      {/* Text Section */}
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 text-center">
        <h1 className="text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Spotlight <br /> is the new trend.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg mx-auto">
          Spotlight effect is a great way to draw attention to a specific part of the page.
          Here, we are drawing attention to the text and project section.
        </p>
      </div>

      {/* Project Cards Section */}
     
    </div>
    <div className="grid  bg-black/[0.96]  grid-cols-1 md:grid-cols-1 gap-6 w-full  px-4  justify-center items-center">
        {projectData.map((project: { title: any; githubLink: any; liveLink: any; imageUrl: any; }, index: any) => (
          <ProjectCard
            key={index}
            title={project.title}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
