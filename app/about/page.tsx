import type { PersonType } from "@/types/team";
import type { Metadata } from "next";
import teamJson from "@/lib/team.json";
import Hero from "@/components/layout/Hero";
import Person from "@/components/about/Person";
import Link from "next/link";

const teamData: PersonType[] = teamJson.team;

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
          8-Bit Jam is a hackathon/game jam happening on August 8-9th in
          Herndon, Virginia for Fairfax County high school students! With a team
          of 2-4 of your friends, build a game, submit it to one of our
          categories, and win prizes completely for free! Enjoy food,
          mini-games/tournaments, sidequests, and more at this memorable event.
          Fill out the interest{" "}
          <Link href="/" className="underline">
            form
          </Link>{" "}
          with your email now, or read the{" "}
          <Link href="/faq" className="underline">
            FAQ
          </Link>{" "}
          for more specific information.
        </p>
      </div>
      <div className="flex flex-col gap-y-5 lg:gap-y-10 pb-15">
        <h2 className="font-jersey text-blue-600 font-bold text-center text-4xl">
          THE TEAM
        </h2>
        <div className="flex gap-5 flex-wrap">
          {teamData.map((person) => (
            <Person key={person.id} person={person} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
