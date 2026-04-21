import type { Metadata } from "next";
import NotFoundBtns from "./NotFoundBtns";

export const metadata: Metadata = {
  title: "Game Over | 8-Bit Jam",
  description:
    "This site is still under construction, so that page doesn't exist yet...",
  authors: [{ name: "8-Bit Jam", url: "https://8bitjam.win" }],
  openGraph: {
    title: "Game Over | 8-Bit Jam",
    description:
      "This site is still under construction, so that page doesn't exist yet...",
    url: "https://8bitjam.win",
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

function NotFound() {
  return (
    <div className="text-center px-5 flex flex-col gap-y-15 w-screen items-center justify-center pb-30">
      <h1 className="font-jersey text-9xl text-blue-600 pt-30 pb-15">
        GAME OVER
      </h1>
      <p className="text-gray-300">
        This site is still under construction, so that page doesn&apos;t exist
        yet...
      </p>
      <NotFoundBtns />
    </div>
  );
}

export default NotFound;
