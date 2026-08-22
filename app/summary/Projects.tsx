"use client";

import type { ProjectType } from "./page";
import { useState, useMemo } from "react";

interface ProjectsProps {
  projects: ProjectType[];
  ratings: number[][];
  criteria: string[];
}

const columns = [
  "Name",
  "Impact",
  "Technicality",
  "Innovation",
  "Style",
  "Overall",
];

function Projects({ projects, ratings, criteria }: ProjectsProps) {
  const [sort, setSort] = useState<string | null>(null);
  const sorted = useMemo(() => {
    return projects
      .map((p, i) => {
        return { ...p, ratings: ratings[i] };
      })
      .sort((a, b) => {
        switch (sort) {
          case "Name":
            return a.name.localeCompare(b.name);
          case "Impact":
            return b.ratings[0] - a.ratings[0];
          case "Technicality":
            return b.ratings[1] - a.ratings[1];
          case "Innovation":
            return b.ratings[2] - a.ratings[2];
          case "Style":
            return b.ratings[3] - a.ratings[3];
          case "Overall":
            return b.ratings[4] - a.ratings[4];
          default:
            return 0;
        }
      });
  }, [projects, ratings, sort]);

  return (
    <div className="text-gray-300 mb-15">
      <div className="flex border-b-2 border-gray-700">
        {columns.map((c) => (
          <div
            key={c}
            onClick={() => setSort(c)}
            className="flex-1 first:flex-2 font-bold text-center py-2 hover:bg-gray-900 cursor-pointer"
          >
            {c}
          </div>
        ))}
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
