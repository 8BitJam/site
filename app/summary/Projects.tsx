"use client";

import type { ProjectType } from "./page";
import { useState, useMemo } from "react";

interface ProjectsProps {
  projects: ProjectType[];
  ratings: number[][];
  criteria: string[];
}

function Projects({ projects, ratings, criteria }: ProjectsProps) {
  const [sort, setSort] = useState<string | null>(null);
  const sorted = useMemo(() => {
    return projects.map((p, i) => {
      return { ...p, ratings: ratings[i] };
    });
  }, [projects, ratings]);

  return (
    <div className="text-gray-300 mb-15">
      <div className="flex border-b-2 border-gray-700">
        <div className="flex-2 font-bold text-center py-2 hover:bg-gray-900 cursor-pointer">
          Name
        </div>
        <div className="flex-1 font-bold text-center py-2 hover:bg-gray-900 cursor-pointer">
          Impact
        </div>
        <div className="flex-1 font-bold text-center py-2 hover:bg-gray-900 cursor-pointer">
          Technicality
        </div>
        <div className="flex-1 font-bold text-center py-2 hover:bg-gray-900 cursor-pointer">
          Innovation
        </div>
        <div className="flex-1 font-bold text-center py-2 hover:bg-gray-900 cursor-pointer">
          Style
        </div>
        <div className="flex-1 font-bold text-center py-2 hover:bg-gray-900 cursor-pointer">
          Overall
        </div>
      </div>
      {sorted.map((project, i) => (
        <div key={project.id} className="flex border-b border-gray-700">
          <div className="flex-2 text-center py-2">{project.name}</div>
          {criteria.map((c, index) => (
            <div key={c} className="flex-1 text-center py-2">
              {project.ratings[index]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Projects;
