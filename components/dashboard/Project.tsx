"use client";

import type { Project as ProjectType } from "@/lib/generated/prisma/client";
import Link from "next/link";
import Image from "next/image";

function Project({ project }: { project: ProjectType }) {
  return (
    <Link
      href={`/rate?id=${project.id}`}
      className="p-5 border-2 border-gray-700 hover:bg-gray-900 w-110 flex flex-col gap-y-3 items-start"
    >
      <Image
        src={project.banner}
        alt="Project banner"
        width={400}
        height={400}
        className="w-full"
      />
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
        {project.description.slice(0, 50) +
          (project.description.length > 50 && "...")}
      </div>
    </Link>
  );
}

export default Project;
