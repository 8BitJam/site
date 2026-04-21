import type { Metadata } from "next";
import Hero from "@/components/layout/Hero";
import Card from "@/components/sponsors/Card";

export const metadata: Metadata = {
  title: "Sponsors | 8-Bit Jam",
  description:
    "Check out our amazing sponsors, it's thanks to them that 8-Bit Jam is a reality!",
  authors: [{ name: "8-Bit Jam", url: "https://8bitjam.win" }],
  openGraph: {
    title: "Sponsors | 8-Bit Jam",
    description:
      "Check out our amazing sponsors, it's thanks to them that 8-Bit Jam is a reality!",
    url: "https://8bitjam.win/sponsors",
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
        title="SPONSORS"
        description="Check out our amazing sponsors, it's thanks to them that 8-Bit Jam is a reality!"
      />
      <div className="flex flex-col gap-y-5 lg:gap-y-10 pb-15">
        <h2 className="font-jersey text-blue-600 font-bold text-center text-4xl">
          GOLD TIER
        </h2>
        <div className="flex gap-5 flex-wrap justify-center">
          <Card empty />
        </div>
        <h2 className="font-jersey text-blue-600 font-bold text-center text-4xl">
          SILVER TIER
        </h2>
        <div className="flex gap-5 flex-wrap justify-center">
          <Card empty />
          <Card empty />
          <Card empty />
        </div>
        <h2 className="font-jersey text-blue-600 font-bold text-center text-4xl">
          BRONZE TIER
        </h2>
        <div className="flex gap-5 flex-wrap justify-center">
          <Card empty />
          <Card empty />
          <Card empty />
        </div>
      </div>
    </div>
  );
}

export default Page;
