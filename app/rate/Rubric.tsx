"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Btn from "@/components/ui/Btn";
import Textarea from "@/components/ui/Textarea";
import { submitRating } from "./actions";

const criteria = ["Impact", "Technicality", "Innovation", "Style", "Overall"];
const submitError =
  "Please make sure you've rated each category and provided at least 30 words of feedback for this project!";

function Rubric({ projectId }: { projectId: string }) {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [ratings, setRatings] = useState<number[]>([0, 0, 0, 0, 0]);
  const [feedback, setFeedback] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const feedbackLength = feedback.trim().replace(/\s+/g, " ").split(" ").length;

  async function handleSubmit() {
    setError(null);
    if (ratings.every((r) => r > 0) && feedbackLength >= 30) {
      setSubmitting(true);
      const res = await submitRating(ratings, feedback, projectId);
      if (!res) setError(submitError);
      setSubmitting(false);
    } else {
      setError(submitError);
    }
  }

  return (
    <>
      <div className="flex flex-col gap-y-5 border-2 border-gray-700 p-10 w-200">
        <h3 className="text-blue-600 font-bold font-jersey text-3xl">
          Rating Rubric
        </h3>
        <div className="flex gap-x-15">
          <div className="flex flex-col gap-y-5">
            {criteria.map((c, index) => (
              <div
                key={index}
                className="text-gray-300 text-lg font-bold flex flex-col gap-y-1"
              >
                {c} {ratings[index] > 0 && `(${ratings[index]}/10)`}
                <div className="flex gap-x-2">
                  {Array(10)
                    .fill(0)
                    .map((n, i) => (
                      <div
                        key={i}
                        className="group relative flex flex-col items-center"
                      >
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-[calc(100%+7px)] bg-gray-700 px-2 py-0.5 text-sm font-normal pointer-events-none">
                          {`${n + i + 1}/10`}
                        </div>
                        <FaStar
                          size={27}
                          className={`cursor-pointer text-gray-400 ${i < ratings[index] && "text-blue-700!"}`}
                          onClick={() =>
                            setRatings([
                              ...ratings.slice(0, index),
                              ratings[index] === i + 1 ? 0 : i + 1,
                              ...ratings.slice(index + 1),
                            ])
                          }
                        />
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-gray-300 text-lg font-bold flex flex-col gap-y-3 w-full">
            Feedback
            <Textarea
              placeholder="Justify your ratings and provide constructive feedback here in at least 30 words"
              value={feedback}
              setValue={(f: string) => setFeedback(f)}
            />
            <div
              className={`text-xs font-normal ${
                feedbackLength >= 30 ? "text-green-600" : ""
              }`}
            >
              {feedback.trim().length === 0 ? "0" : feedbackLength}
              /30
            </div>
          </div>
        </div>
      </div>
      {error && <div className="text-red-500 text-center">{error}</div>}
      <Btn
        text={submitting ? "Submitting..." : "Submit Ratings"}
        onclick={handleSubmit}
        primary
      />
    </>
  );
}

export default Rubric;
