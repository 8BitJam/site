import type { Metadata } from "next";
import Hero from "@/components/layout/Hero";

export const metadata: Metadata = {
  title: "Schedule | 8-Bit Jam",
  description:
    "Check out the complete 8-Bit Jam event schedule with specific time blocks and activities!",
  authors: [{ name: "8-Bit Jam", url: "https://8bitjam.win" }],
  openGraph: {
    title: "Schedule | 8-Bit Jam",
    description:
      "Check out the complete 8-Bit Jam event schedule with specific time blocks and activities!",
    url: "https://8bitjam.win/schedule",
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
    <div className="max-w-400 w-full px-5 md:px-15 lg:px-40 mx-auto flex flex-col items-center pb-15">
      <Hero
        title="SCHEDULE"
        description="Check out the complete 8-Bit Jam event schedule with specific time blocks and activities!"
      />
      <style>
        {`
        table, th, td {
          border: 2px solid #364153;
        }

        th, td {
          padding: 8px 16px;
        }

        th {
          font-size: 16px;
          color: white;
        }

        td:first-of-type, td:nth-child(2) {
          text-align: center;
        }
        `}
      </style>
      <table className="border-collapse text-gray-300 w-full max-w-200">
        <thead>
          <tr>
            <th>Time</th>
            <th>Duration</th>
            <th>Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>8:15 - 8:30 AM</td>
            <td>15 minutes</td>
            <td>Participant arrival</td>
          </tr>
          <tr>
            <td>8:30 - 8:45 AM</td>
            <td>15 minutes</td>
            <td>Opening ceremony</td>
          </tr>
          <tr className="bg-gray-900">
            <td>8:45 - 9:00 AM</td>
            <td>15 minutes</td>
            <td>Team building</td>
          </tr>
          <tr className="bg-gray-900">
            <td>9:30 - 10:00 AM</td>
            <td>30 minutes</td>
            <td>Sidequest: 8-Bit Jam logo redesign competition</td>
          </tr>
          <tr className="bg-gray-900">
            <td>10:30 - 11:00 AM</td>
            <td>30 minutes</td>
            <td>Mini-game: chess tournament</td>
          </tr>
          <tr className="bg-gray-900">
            <td>11:30 - 12:00 PM</td>
            <td>30 minutes</td>
            <td>Workshop: game dev</td>
          </tr>
          <tr className="bg-gray-900">
            <td>12:00 - 1:00 PM</td>
            <td>60 minutes</td>
            <td>Lunch break & movie (Spider-Man: No Way Home)</td>
          </tr>
          <tr className="bg-gray-900">
            <td>1:30 - 2:00 PM</td>
            <td>30 minutes</td>
            <td>Sidequest: game dev & octopus trivia Kahoot</td>
          </tr>
          <tr className="bg-gray-900">
            <td>2:30 - 3:00 PM</td>
            <td>30 minutes</td>
            <td>Mini-game: Brawl Stars tournament</td>
          </tr>
          <tr className="bg-gray-900">
            <td>3:30 - 4:00 PM</td>
            <td>30 minutes</td>
            <td>Workshop: mentor experience & advice</td>
          </tr>
          <tr className="bg-gray-900">
            <td>5:00 - 5:15 PM</td>
            <td>15 minutes</td>
            <td>Project submission</td>
          </tr>
          <tr>
            <td>5:15 - 5:45 PM</td>
            <td>30 minutes</td>
            <td>Judging</td>
          </tr>
          <tr>
            <td>5:45 - 6:00 PM</td>
            <td>15 minutes</td>
            <td>Closing ceremony</td>
          </tr>
        </tbody>
      </table>
      <p className="max-w-200 text-gray-300 text-sm mt-5">
        Note: you can work on your project during the highlighted periods, which
        equates to around 8.5 hours of hacking in total!
      </p>
    </div>
  );
}

export default Page;
