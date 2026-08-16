"use client";

import type { DebugType, ProjectType } from "@/types/project";
import { useState, useEffect } from "react";
import { types } from "@/lib/constants";
import { saveProject, debugLog } from "./actions";
import Upload from "@/components/project/Upload";
import Input from "@/components/ui/Input";
import Btn from "@/components/ui/Btn";

const labelStyles =
  "flex flex-col gap-y-1 font-jersey text-gray-300 text-2xl w-full";
const canSubmit = false;
const emptyLog = { id: "", description: "", agent: "", createdAt: new Date() };

function Form({ existing }: { existing?: ProjectType }) {
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
      debug: [],
      team: "",
      teammates: [""],
      submitted: false,
      createdAt: new Date(),
    },
  );

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

  function handleSubmit() {
    alert(
      "Are you sure you want to submit your project? Please review all the information carefully and make sure everything's filled in properly, as you will no longer be able to edit the project after submitting.",
    );
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
    <div className="flex flex-col gap-y-7 border-2 border-gray-700 px-10 py-5 w-100">
      <div className="flex flex-col gap-y-3">
        <label className={labelStyles}>
          Project name
          <Input
            placeholder="Minecraft"
            value={project.name}
            setValue={(name: string) => setProject({ ...project, name })}
          />
        </label>
        <label className={labelStyles}>
          Project description
          <Input
            placeholder="Minecraft is a very fun game"
            value={project.description}
            setValue={(description: string) =>
              setProject({ ...project, description })
            }
          />
        </label>
        <label className={labelStyles}>
          Gameplay instructions
          <Input
            placeholder="WASD to move, space to jump..."
            value={project.instructions}
            setValue={(instructions: string) =>
              setProject({ ...project, instructions })
            }
          />
        </label>
        <label className={labelStyles}>
          Project banner
          <Upload
            setProject={setProject}
            existing={project.banner || undefined}
          />
        </label>
        <label className={labelStyles}>
          Demo URL
          <Input
            placeholder="minecraft.net/download"
            value={project.demo}
            setValue={(demo: string) => setProject({ ...project, demo })}
          />
        </label>
        <label className={labelStyles}>
          Source code
          <Input
            placeholder="https://github.com/8BitJam/site"
            value={project.repo}
            setValue={(repo: string) => setProject({ ...project, repo })}
          />
        </label>
        <label className={labelStyles}>
          Team name
          <Input
            placeholder="Mojang"
            value={project.team}
            setValue={(team: string) => setProject({ ...project, team })}
          />
        </label>
        <div className={labelStyles}>
          Team members ({project.teammates.length})
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
                />
              );
            })}
            <Btn
              text="Add member"
              onclick={() =>
                setProject({
                  ...project,
                  teammates: [...project.teammates, ""],
                })
              }
            />
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
            {project.debug.map((item, i) => (
              <div key={i} className="flex gap-x-3">
                <div className="flex-3">{item.description}</div>
                <div className="flex-1">{item.agent}</div>
                <div className="flex-1" title={item.createdAt.toISOString()}>
                  {item.createdAt.getHours().toString().padStart(2, "0")}:
                  {item.createdAt.getMinutes().toString().padStart(2, "0")}
                </div>
              </div>
            ))}
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
          </div>
        </div>
      </div>
      {error && <div className="text-red-500">{error}</div>}
      <div className="flex gap-x-3">
        {canSubmit && <Btn text="Submit" onclick={handleSubmit} primary />}
        <Btn
          text={state === null ? "Save" : state === 0 ? "Loading..." : "Saved!"}
          onclick={handleSave}
          primary={!canSubmit}
        />
      </div>
    </div>
  );
}

export default Form;
