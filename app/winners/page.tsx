import type { Metadata } from "next";
import Hero from "@/components/layout/Hero";
import Winner from "./Winner";

export const metadata: Metadata = {
  title: "Winners | 8-Bit Jam",
  description:
    "8-Bit Jam 2026 has successfully come to an end! Here are all the winning teams from this year's event, along with some highlight pictures!",
  authors: [{ name: "8-Bit Jam", url: "https://8bitjam.win" }],
  openGraph: {
    title: "Winners | 8-Bit Jam",
    description:
      "8-Bit Jam 2026 has successfully come to an end! Here are all the winning teams from this year's event, along with some highlight pictures!",
    url: "https://8bitjam.win/winners",
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
        title="WINNERS"
        description="8-Bit Jam 2026 has successfully come to a close! Here are all the winning teams this year, along with some highlight pictures!"
      />
      <div className="flex justify-center gap-5 flex-wrap pb-15">
        <Winner
          award="BEST OVERALL"
          team="Legless Detective"
          img="/event/Best Overall.jpg"
        />
        <Winner
          award="MOST IMPACT"
          team="MarinerMaid"
          img="/event/Most Impact.jpg"
        />
        <Winner
          award="MOST TECHNICAL"
          team="Speedy-Simian"
          img="/event/Most Technical.jpg"
        />
        <Winner
          award="BEST INNOVATION"
          team="Space Janitors"
          img="/event/Best Innovation.jpg"
        />
        <Winner
          award="BEST STYLE"
          team="Janitor Dungeon & Escape Room"
          img="/event/Best Style.jpg"
        />
        <Winner
          award="HONORABLE MENTIONS"
          team="Hyperdroid & Accession"
          img="/event/Honorable Mentions.jpg"
        />
        <Winner img="/event/Room 1.jpg" />
        <Winner img="/event/Room 2.jpg" />
        <Winner img="/event/Room 3.jpg" />
        <Winner img="/event/Room 4.jpg" />
        <Winner img="/event/Room 5.jpg" />
        <Winner img="/event/Room 6.jpg" />
      </div>
    </div>
  );
}

export default Page;
