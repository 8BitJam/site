"use client";

import type { Project as ProjectType } from "@/lib/generated/prisma/client";
import { useState } from "react";
import Project from "./Project";
import { FaCheck } from "react-icons/fa";

interface JudgeProps {
  pending: ProjectType[] | null;
  judged: ProjectType[] | null;
}

function Judge({ pending, judged }: JudgeProps) {
  const [showJudged, setShowJudged] = useState<boolean>(true);

  return (
    <>
      {judged && judged.length > 0 && (
        <label className="mb-5 flex gap-x-3 items-center cursor-pointer font-bold">
          <input
            type="checkbox"
            checked={!showJudged}
            onChange={(e) => setShowJudged(!e.target.checked)}
            className="hidden"
          />
          <div className="w-4 h-4 border-2 border-gray-700 flex items-center justify-center">
            {!showJudged && <FaCheck size={15} className="absolute" />}
          </div>
          Hide judged projects
        </label>
      )}
      <div className="flex gap-5 flex-wrap justify-center mb-5 w-full">
        {pending && pending.length > 0
          ? pending.map((project) => (
              <Project key={project.id} project={project} />
            ))
          : (!showJudged || !judged || judged.length === 0) && (
              <div className="py-20">
                {judged && judged.length > 0
                  ? "You've finished judging all the submitted projects, great work!"
                  : "Participant projects will show up here once submission starts"}
              </div>
            )}
        {judged &&
          showJudged &&
          judged.length > 0 &&
          judged.map((project) => (
            <Project key={project.id} project={project} judged />
          ))}
      </div>
    </>
  );
}

export default Judge;
