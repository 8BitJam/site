"use client";

import type { DebugType, LogoType, ProjectType } from "@/types/project";
import { useState, useEffect } from "react";
// import { types } from "@/lib/constants";
import { saveProject, debugLog, submitProject } from "./actions";
import { LuPartyPopper } from "react-icons/lu";
import Upload from "@/components/project/Upload";
import Input from "@/components/ui/Input";
import Btn from "@/components/ui/Btn";
import Image from "next/image";
import Log from "@/components/project/Log";
import Textarea from "@/components/ui/Textarea";
import Tooltip from "@/components/ui/Tooltip";

const labelStyles =
  "flex flex-col gap-y-1 font-jersey text-gray-300 text-2xl w-full";
const canSubmit = false; //TODO: check time
const emptyLog = { id: "", description: "", agent: "", createdAt: new Date() };

interface FormProps {
  existing?: ProjectType;
  rating?: boolean;
}

function Form({ existing, rating }: FormProps) {
  const [state, setState] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [logEntry, setLogEntry] = useState<DebugType | null>(null);
  const [project, setProject] = useState<ProjectType>(
    existing || {
      id: "",
      name: "",
      demo: "",
      repo: "",
      // type: types[0],
      type: "",
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
    if (logEntry) {
      const newLog = {
        ...logEntry,
        id: crypto.randomUUID(),
        createdAt: new Date(),
      };
      // setProject({
      //   ...project,
      //   debug: [...project.debug, newLog],
      // });
      setLogEntry(null);
      const res = await saveProject(project);
      if (res && res.success) {
        await debugLog(newLog, res.id!);
        // await handleSave();
      }
    }
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
          <div className="flex items-center">
            Project description{" "}
            <span title="Required" className={asteriskStyles}>
              *
            </span>
            <Tooltip text="What is your game about? What does it focus on? What is different about it? How did you make it? Describe everything about your game here!" />
          </div>
          <Textarea
            placeholder="Minecraft is a very fun game"
            value={project.description}
            setValue={(description: string) =>
              setProject({ ...project, description })
            }
            disabled={project.submitted}
            styles="text-2xl!"
          />
        </label>
        <label className={labelStyles}>
          <div className="flex items-center">
            Gameplay instructions{" "}
            <span title="Required" className={asteriskStyles}>
              *
            </span>
            <Tooltip text="How are the sprites controlled? How to beat a level? What's the gameplay objective? Teach people how to play your game here!" />
          </div>
          <Textarea
            placeholder="WASD to move, space to jump..."
            value={project.instructions}
            setValue={(instructions: string) =>
              setProject({ ...project, instructions })
            }
            disabled={project.submitted}
            styles="text-2xl!"
          />
        </label>
        <label className={labelStyles}>
          <div className="flex items-center">
            Project banner{" "}
            <span title="Required" className={asteriskStyles}>
              *
            </span>
            <Tooltip text="Upload a screenshot or banner of your game here to showcase it! (no AI images allowed)" />
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
              setProject={
                setProject as React.Dispatch<React.SetStateAction<LogoType>>
              }
              existing={project}
              disabled={project.submitted}
            />
          )}
        </label>
        <label className={labelStyles}>
          <div className="flex items-center">
            Demo URL{" "}
            <span title="Required" className={asteriskStyles}>
              *
            </span>
            <Tooltip text="Deploy your game to the internet and put an online playable link for your project here" />
          </div>
          <Input
            placeholder="minecraft.net/download"
            value={project.demo}
            setValue={(demo: string) => setProject({ ...project, demo })}
            disabled={project.submitted}
          />
        </label>
        <label className={labelStyles}>
          <div className="flex items-center">
            Source code{" "}
            <span title="Required" className={asteriskStyles}>
              *
            </span>
            <Tooltip text="Put the link of your project's GitHub repository containing all the code here (everything has to be open source)" />
          </div>
          <Input
            placeholder="github.com/8BitJam/site"
            value={project.repo}
            setValue={(repo: string) => setProject({ ...project, repo })}
            disabled={project.submitted}
          />
        </label>
        <label className={labelStyles}>
          <div className="flex items-center">
            Technology{" "}
            <span title="Required" className={asteriskStyles}>
              *
            </span>
            <Tooltip text="What game engine, technology, framework, library, or programming languages does your game use?" />
          </div>
          <Input
            placeholder="Unity"
            value={project.type}
            setValue={(type: string) => setProject({ ...project, type })}
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
          <div className="flex items-center">
            AI usage log
            <Tooltip text="Please log an entry below documenting every time you used an LLM/AI to debug or help with your project in any way" />
          </div>
          <div className="flex flex-col gap-y-3 border-2 border-gray-700 px-5 py-3">
            <Log debug={project.debug} />
            {!project.submitted &&
              (logEntry ? (
                <div className="flex gap-x-3">
                  <Input
                    placeholder="I used AI to debug..."
                    value={logEntry.description}
                    setValue={(description: string) =>
                      setLogEntry({ ...logEntry, description })
                    }
                    styles="flex-1"
                  />
                  <Input
                    placeholder="Claude Code"
                    value={logEntry.agent}
                    setValue={(agent: string) =>
                      setLogEntry({ ...logEntry, agent })
                    }
                    styles="w-40"
                  />
                  <Btn text="Log entry" onclick={handleLog} primary />
                  <Btn text="Cancel" onclick={() => setLogEntry(null)} />
                </div>
              ) : (
                <Btn
                  text="Add entry"
                  onclick={() => setLogEntry(emptyLog)}
                  primary
                />
              ))}
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
