"use client";

import type { DebugType, ProjectType } from "@/types/project";
import { useState, useEffect } from "react";
import { types } from "@/lib/constants";
import { saveProject, debugLog, submitProject } from "./actions";
import Upload from "@/components/project/Upload";
import Input from "@/components/ui/Input";
import Btn from "@/components/ui/Btn";
import { LuPartyPopper } from "react-icons/lu";
import Image from "next/image";

const labelStyles =
  "flex flex-col gap-y-1 font-jersey text-gray-300 text-2xl w-full";
const canSubmit = true; //TODO: check time
const emptyLog = { id: "", description: "", agent: "", createdAt: new Date() };

interface FormProps {
  existing?: ProjectType;
  rating?: boolean;
}

function Form({ existing, rating }: FormProps) {
  const [state, setState] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [logEntry, setLogEntry] = useState<DebugType>(emptyLog);
  const [project, setProject] = useState<ProjectType>(
    existing || {
      id: "",
      name: "",
      demo: "",
      repo: "",
      type: types[0],
      description: "",
      instructions: "",
      banner: "",
      bannerName: "",
      debug: [],
      team: "",
      teammates: [""],
      submitted: false,
      createdAt: new Date(),
    },
  );
  const asteriskStyles = `${rating && "hidden"} text-red-500 text-2xl`;

  useEffect(() => {
    if (existing) {
      setProject(existing);
    }
  }, [existing]);

  async function handleLog() {
    const newLog = {
      ...logEntry,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    };
    // setProject({
    //   ...project,
    //   debug: [...project.debug, newLog],
    // });
    setLogEntry(emptyLog);
    await debugLog(newLog, project.id);
    // await handleSave();
  }

  async function handleSubmit() {
    if (state === null) {
      alert(
        "Are you sure you want to submit your project? Please review all the information carefully and make sure everything's filled in properly, as you will no longer be able to edit the project after submitting.",
      ); //TODO: change to modal
      const updated = await saveProject(project);
      if (updated.success) {
        setState(2);
        setError(null);
        const res = await submitProject(project);
        const success = res?.success;
        if (success) {
          setState(3);
          setTimeout(() => {
            setState(null);
            window.location.reload();
          }, 2000);
        } else {
          setState(null);
          setError(res?.message || "Something went wrong, please try again");
        }
      }
    }
  }

  async function handleSave() {
    if (state === null) {
      setError(null);
      setState(0);
      const res = await saveProject(project);
      const success = res.success;
      if (success) {
        setState(1);
        setTimeout(() => {
          setState(null);
        }, 2000);
      } else {
        setState(null);
        setError(res.message!);
      }
    }
  }

  return (
    <div className="flex flex-col gap-y-7 border-2 border-gray-700 px-10 py-5 w-200">
      <div className="flex flex-wrap gap-3">
        {project.submitted && !rating && (
          <div
            className="bg-blue-800 text-white text-2xl font-jersey flex items-center gap-x-4 px-4 py-2 border-2
          border-gray-700 cursor-default"
            title="Great work, your project has been submitted successfully for the judges to rate! You cannot edit the project information anymore."
          >
            <LuPartyPopper size={25} /> Project submitted!
          </div>
        )}
        <label className={labelStyles}>
          <div>
            Project name{" "}
            <span title="Required" className={asteriskStyles}>
              *
            </span>
          </div>
          <Input
            placeholder="Minecraft"
            value={project.name}
            setValue={(name: string) => setProject({ ...project, name })}
            disabled={project.submitted}
          />
        </label>
        <label className={labelStyles}>
          <div>
            Project description{" "}
            <span title="Required" className={asteriskStyles}>
              *
            </span>
          </div>
          <Input
            placeholder="Minecraft is a very fun game"
            value={project.description}
            setValue={(description: string) =>
              setProject({ ...project, description })
            }
            disabled={project.submitted}
          />
        </label>
        <label className={labelStyles}>
          <div>
            Gameplay instructions{" "}
            <span title="Required" className={asteriskStyles}>
              *
            </span>
          </div>
          <Input
            placeholder="WASD to move, space to jump..."
            value={project.instructions}
            setValue={(instructions: string) =>
              setProject({ ...project, instructions })
            }
            disabled={project.submitted}
          />
        </label>
        <label className={labelStyles}>
          <div>
            Project banner{" "}
            <span title="Required" className={asteriskStyles}>
              *
            </span>
          </div>
          {rating ? (
            <Image
              src={project.banner}
              alt="Project banner"
              width={1000}
              height={1000}
              className="w-full"
            />
          ) : (
            <Upload
              setProject={setProject}
              existing={project}
              disabled={project.submitted}
            />
          )}
        </label>
        <label className={labelStyles}>
          <div>
            Demo URL{" "}
            <span title="Required" className={asteriskStyles}>
              *
            </span>
          </div>
          <Input
            placeholder="minecraft.net/download"
            value={project.demo}
            setValue={(demo: string) => setProject({ ...project, demo })}
            disabled={project.submitted}
          />
        </label>
        <label className={labelStyles}>
          <div>
            Source code{" "}
            <span title="Required" className={asteriskStyles}>
              *
            </span>
          </div>
          <Input
            placeholder="github.com/8BitJam/site"
            value={project.repo}
            setValue={(repo: string) => setProject({ ...project, repo })}
            disabled={project.submitted}
          />
        </label>
        <label className={labelStyles}>
          <div>
            Team name{" "}
            <span title="Required" className={asteriskStyles}>
              *
            </span>
          </div>
          <Input
            placeholder="Mojang"
            value={project.team}
            setValue={(team: string) => setProject({ ...project, team })}
            disabled={project.submitted}
          />
        </label>
        <div className={labelStyles}>
          <div>
            Team members ({project.teammates.length}){" "}
            <span title="Required" className={asteriskStyles}>
              *
            </span>
          </div>
          <div className="flex flex-col gap-y-3">
            {project.teammates.map((teammate, i) => {
              return (
                <Input
                  key={i}
                  placeholder="Me"
                  value={teammate}
                  setValue={(t: string) =>
                    setProject({
                      ...project,
                      teammates: [
                        ...project.teammates.slice(0, i),
                        t,
                        ...project.teammates.slice(i + 1),
                      ],
                    })
                  }
                  disabled={project.submitted}
                />
              );
            })}
            {!project.submitted && (
              <Btn
                text="Add member"
                onclick={() =>
                  setProject({
                    ...project,
                    teammates: [...project.teammates, ""],
                  })
                }
              />
            )}
          </div>
        </div>
        <div className={labelStyles}>
          AI usage log
          <div className="flex flex-col gap-y-3">
            <div className="flex gap-x-3">
              <div className="flex-3">Description</div>
              <div className="flex-1">Agent</div>
              <div className="flex-1">Time</div>
            </div>
            {project.debug.length > 0 ? (
              project.debug.map((item, i) => (
                <div key={i} className="flex gap-x-3">
                  <div className="flex-3">{item.description}</div>
                  <div className="flex-1">{item.agent}</div>
                  <div className="flex-1" title={item.createdAt.toISOString()}>
                    {item.createdAt.getHours().toString().padStart(2, "0")}:
                    {item.createdAt.getMinutes().toString().padStart(2, "0")}
                  </div>
                </div>
              ))
            ) : (
              <div className="py-2 text-xl text-center">No entries logged</div>
            )}
            {!project.submitted && (
              <div>
                <Input
                  placeholder="I used AI to debug..."
                  value={logEntry.description}
                  setValue={(description: string) =>
                    setLogEntry({ ...logEntry, description })
                  }
                />
                <Input
                  placeholder="Claude Code"
                  value={logEntry.agent}
                  setValue={(agent: string) =>
                    setLogEntry({ ...logEntry, agent })
                  }
                />
                <Btn text="Log entry" onclick={handleLog} />
              </div>
            )}
          </div>
        </div>
      </div>
      {project.submitted ? (
        <div
          className="text-gray-300 text-lg font-jersey"
          title={project.updatedAt?.toISOString()}
        >
          Submitted at: {project.updatedAt?.toLocaleDateString()}{" "}
          {project.updatedAt?.toLocaleTimeString()}
        </div>
      ) : (
        <>
          {error && <div className="text-red-500">{error}</div>}
          <div className="flex gap-x-3">
            {canSubmit && (
              <Btn
                text={
                  state === 2
                    ? "Submitting..."
                    : state === 3
                      ? "Submitted!"
                      : "Submit"
                }
                onclick={handleSubmit}
                primary
              />
            )}
            <Btn
              text={state === 0 ? "Saving..." : state === 1 ? "Saved!" : "Save"}
              onclick={handleSave}
              primary={!canSubmit}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Form;
