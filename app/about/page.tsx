import type { PersonType } from "@/types/team";
import type { Metadata } from "next";
import teamJson from "@/lib/team.json";
import Hero from "@/components/layout/Hero";
import Prize from "@/components/about/Prize";
import Person from "@/components/about/Person";
import Link from "next/link";

const teamData: PersonType[] = teamJson.team;
const judgeData: PersonType[] = teamJson.judges;

export const metadata: Metadata = {
  title: "About | 8-Bit Jam",
  description:
    "Learn more about the details of the hackathon and the team behind it!",
  authors: [{ name: "8-Bit Jam", url: "https://8bitjam.win" }],
  openGraph: {
    title: "About | 8-Bit Jam",
    description:
      "Learn more about the details of the hackathon and the team behind it!",
    url: "https://8bitjam.win/about",
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

function Page() {
  return (
    <div className="max-w-400 w-full px-5 md:px-15 lg:px-40 mx-auto">
      <Hero
        title="ABOUT"
        description="Learn more about the details of the hackathon and the team behind it!"
      />
      <div className="flex flex-col gap-y-5 lg:gap-y-10 pb-15">
        <h2 className="font-jersey text-blue-600 font-bold text-center text-4xl">
          WHAT IS 8-BIT JAM?
        </h2>
        <p className="text-gray-300 w-full lg:w-[70%] mx-auto">
          8-Bit Jam is a hackathon/game jam happening on August 22nd in Great
          Falls, Virginia for talented and passionate high school students! With
          a team of 2-4 of your friends, build a game, submit it to one of our
          categories, and win prizes completely for free! Enjoy food,
          mini-games/tournaments, sidequests, and more at this fun, memorable
          10-hour event. Fill out the registration{" "}
          <Link
            href="https://forms.gle/HiKE87KTgp5hzoWU7"
            className="underline"
            target="_blank"
          >
            form
          </Link>{" "}
          now to participate, or read the{" "}
          <Link href="/schedule" className="underline">
            schedule
          </Link>{" "}
          and{" "}
          <Link href="/rules" className="underline">
            rules
          </Link>{" "}
          for more event and participation information.
        </p>
      </div>
      <div className="flex flex-col gap-y-5 lg:gap-y-10 pb-15">
        <h2 className="font-jersey text-blue-600 font-bold text-center text-4xl">
          PRIZES
        </h2>
        <div className="flex gap-5 flex-wrap justify-center">
          <Prize
            name="12x CodeCrafters Memberships"
            link="app.codecrafters.io/pay?plans=true"
            img="/sponsors/CodeCrafters.svg"
            value={720}
          />
          <Prize
            name="4x RISE Research Scholarships"
            link="riseglobaleducation.com/"
            img="/sponsors/RiseResearch.png"
            value={1000}
          />
          <Prize
            name="4x Aseprite Product Keys"
            link="aseprite.org/buy/"
            img="/sponsors/Aseprite.png"
            value={20}
          />
          <Prize
            name="8x .xyz Domains"
            link="gen.xyz/register"
            img="/sponsors/xyz.png"
            value={15}
          />
          <Prize
            name="Unlimited SparkCloud Domains"
            link="cloud.sparkden.org/register"
            img="/sponsors/SparkCloud.png"
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-5 lg:gap-y-10 pb-15">
        <h2 className="font-jersey text-blue-600 font-bold text-center text-4xl">
          THE TEAM
        </h2>
        <div className="flex gap-5 flex-wrap justify-center">
          {teamData.map((person) => (
            <Person key={person.id} person={person} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-5 lg:gap-y-10 pb-15">
        <h2 className="font-jersey text-blue-600 font-bold text-center text-4xl">
          JUDGES
        </h2>
        <div className="flex gap-5 flex-wrap justify-center">
          {judgeData.map((person) => (
            <Person key={person.id} person={person} />
          ))}
          <a
            href="https://forms.gle/hLqAAtMkJVTMRTtz5"
            target="_blank"
            className="flex flex-col items-center gap-y-3 border-2 border-gray-700 min-w-80 w-100 p-5 cursor-pointer
             hover:bg-gray-900"
          >
            <h2 className="text-blue-600 font-jersey font-bold text-3xl">
              WANT TO BE A JUDGE?
            </h2>
            <p className="text-gray-300 text-center text-sm w-[90%]">
              Please click on this card and fill out the 8-Bit Jam volunteering
              form to express your interest, and we&apos;ll email you with more
              information!
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Page;
