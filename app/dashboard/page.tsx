import type { Metadata } from "next";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Hero from "@/components/layout/Hero";
import SignOut from "@/components/dashboard/SignOut";

export const metadata: Metadata = {
  title: "Dashboard | 8-Bit Jam",
  description:
    "This is your personal dashboard, where you can manage your 8-Bit Jam participant registration info and more!",
  authors: [{ name: "8-Bit Jam", url: "https://8bitjam.win" }],
  openGraph: {
    title: "Dashboard | 8-Bit Jam",
    description:
      "This is your personal dashboard, where you can manage your 8-Bit Jam participant registration info and more!",
    url: "https://8bitjam.win/dashboard",
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

async function Page() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user) redirect("/signin");

  return (
    <div className="max-w-400 w-full px-5 md:px-15 lg:px-40 mx-auto">
      <Hero
        title="DASHBOARD"
        description="This is your personal dashboard, where you can manage your 8-Bit Jam participant registration info and more!"
      />
      <div className="w-[45%] mx-auto h-70 mb-15 flex justify-center items-center text-gray-300 text-center flex-col gap-y-5">
        Thanks for filling out the interest form (even if you didn&apos;t, you
        did by signing up)! Registration for the hackathon will open in May, and
        you can see more stuff here once you register :D
        <SignOut />
      </div>
    </div>
  );
}

export default Page;
