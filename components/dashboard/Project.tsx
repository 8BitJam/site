"use client";

import type { Project as ProjectType } from "@/lib/generated/prisma/client";
import Link from "next/link";
import Image from "next/image";

interface ProjectProps {
  project: ProjectType;
  judged?: boolean;
}

function Project({ project, judged }: ProjectProps) {
  return (
    <Link
      href={judged ? "" : `/rate?id=${project.id}`}
      className={`p-5 border-2 border-gray-700 hover:bg-gray-900 relative w-110 flex flex-col gap-y-3 items-start ${judged && "bg-gray-900/50"}`}
    >
      {judged && (
        <div className="absolute bg-blue-800 -top-4 -left-5 px-2 py-1 font-jersey text-white text-2xl">
          Judged
        </div>
      )}
      <div className="w-full h-[222.75px] flex items-center justify-center bg-gray-900/50 overflow-hidden">
        <Image
          src={project.banner}
          alt="Project banner"
          width={400}
          height={400}
          className="w-full"
        />
      </div>
      <div className="flex gap-x-10 items-center text-xl font-jersey">
        <h2 className="text-4xl font-bold text-white">{project.name}</h2>
        <div className="flex gap-x-3">
          <div
            className="hover:underline"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://" + project.demo, "blank");
            }}
          >
            Demo
          </div>
          <div
            className="hover:underline"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://" + project.repo, "blank");
            }}
          >
            Repo
          </div>
        </div>
        <div className="text-base" title={project.updatedAt.toISOString()}>
          Submitted {project.updatedAt.getHours() % 12}:
          {project.updatedAt.getMinutes().toString().padStart(2, "0")} PM
        </div>
      </div>
      <div className="text-gray-300 text-sm">
        {project.description.slice(0, 150) +
          (project.description.length > 150 ? "..." : "")}
      </div>
    </Link>
  );
}

export default Project;
