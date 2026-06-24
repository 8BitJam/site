import type { Metadata } from "next";
import Hero from "@/components/layout/Hero";

export const metadata: Metadata = {
  title: "Rules | 8-Bit Jam",
  description:
    "Read the eligibility, policies, and rules for participating in 8-Bit Jam!",
  authors: [{ name: "8-Bit Jam", url: "https://8bitjam.win" }],
  openGraph: {
    title: "Rules | 8-Bit Jam",
    description:
      "Read the eligibility, policies, and rules for participating in 8-Bit Jam!",
    url: "https://8bitjam.win/rules",
    siteName: "8-Bit Jam",
    images: [
      {
        url: "/logo.png",
        width: 50,
        height: 50,
      },
    ],
    type: "website",
  },
};

const listStyles =
  "w-[90%] sm:w-[75%] lg:w-[60%] text-zinc-300 list-disc mx-auto leading-7";

function Page() {
  return (
    <div className="max-w-400 w-full px-5 md:px-15 lg:px-40 mx-auto">
      <Hero
        title="RULES"
        description="Read the eligibility, policies, and rules for participating in 8-Bit Jam!"
      />
      <div className="flex flex-col gap-y-5 lg:gap-y-10 pb-15">
        <h2 className="font-jersey text-blue-600 font-bold text-center text-4xl">
          GENERAL
        </h2>
        <ul className={listStyles}>
          <li>Bringing your own food is permitted and encouraged</li>
          <li>
            Medicine can be brought but will need to be mentioned in the
            registration form
          </li>
          <li>
            Participants are required to remain inside the venue for the
            duration of the event for security reasons{" "}
          </li>
          <li>No excessive noise or horseplay</li>
          <li>No photography without the organizers’ permission</li>
          <li>Drugs, alcohol, and nicotine products are prohibited</li>
          <li>
            Weapons, firearms and anything that could physically harm others are
            prohibited
          </li>
          <li>
            Harassment of hackathon participants in any form for any reason is
            prohibited
          </li>
          <li>Sexual language and imagery are prohibited</li>
          <li>
            Tempering with the network, other participants’ devices, or other
            hardware is prohibited
          </li>
          <li>
            Violation of these rules will result in point deduction or
            disqualification based on severity at the discretion of the
            hackathon organizers
          </li>
        </ul>
        <h2 className="font-jersey text-blue-600 font-bold text-center text-4xl">
          ELIGIBILITY
        </h2>
        <ul className={listStyles}>
          <li>Current student from Northern Virginia</li>
          <li>Everyone between the ages of 13-18 is welcome to participate</li>
          <li>No experience in coding, game dev, or design is needed</li>
          <li>Parental approval for attendance is required</li>
        </ul>
        <h2 className="font-jersey text-blue-600 font-bold text-center text-4xl">
          AI USAGE
        </h2>
        <ul className={listStyles}>
          <li>Generative AI is prohibited</li>
          <li>Sprites and artwork have to be original and human-made</li>
          <li>Code has to be readable, clear, and human-made</li>
          <li>
            AI is only allowed for debugging, and it has to be documented
            specifically
          </li>
          <li>
            Participants have to be able to explain their code and architecture
            clearly
          </li>
          <li>
            Prohibited use of AI, copyright infringement, and plagiarism will
            result in point deduction or disqualification based on severity at
            the discretion of the organizers
          </li>
        </ul>
        <h2 className="font-jersey text-blue-600 font-bold text-center text-4xl">
          PROJECT SUBMISSION
        </h2>
        <ul className={listStyles}>
          <li>Project has to be a desktop, web, or mobile game</li>
          <li>All game engines are allowed (including no engine)</li>
          <li>Participate in teams of 2-4</li>
          <li>Will have a teambuilding event for those without a team</li>
          <li>6 minutes per team, one hour of judging in total</li>
          <li>
            3 minutes presenting the game, 2 minutes explaining code, 1 minute
            answering questions
          </li>
          <li>No slideshow, show us the game and code</li>
          <li>One team will be selected for each of the 5 categories</li>
        </ul>
      </div>
    </div>
  );
}

export default Page;
