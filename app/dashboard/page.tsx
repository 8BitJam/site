import type { Metadata } from "next";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Hero from "@/components/layout/Hero";
import SignOut from "@/components/dashboard/SignOut";
import Link from "next/link";
import { FaTools } from "react-icons/fa";
import Project from "@/components/dashboard/Project";

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
  const userData = (await prisma.user.findUnique({
    where: { id: session.user.id },
    include: { projects: true },
  }))!;
  const submitted = userData.isJudge
    ? await prisma.project.findMany({ where: { submitted: true } })
    : null;

  return (
    <div className="max-w-400 w-full px-5 md:px-15 lg:px-40 mx-auto">
      <Hero
        title={`Welcome, ${userData.name}!`}
        description={`This is your personal dashboard, where you can ${userData.isJudge ? "view and select submitted projects to judge" : "manage your 8-Bit Jam project and participant registration info"}!`}
      />
      {/* TODO: add option to toggle visibility of judged projects */}
      <div className="w-[90%] sm:w-[60%] mx-auto mb-15 flex justify-center items-center text-gray-300 text-center flex-col gap-y-5">
        {userData.isJudge ? (
          <div>
            {submitted && submitted.length > 0 ? (
              submitted.map((project) => (
                <Project key={project.id} project={project} />
              ))
            ) : (
              <div className="py-20">
                Participant projects will show up here once submission starts
              </div>
            )}
          </div>
        ) : (
          <Link
            href="/project"
            className="flex items-center text-center text-2xl font-jersey flex-col gap-y-5 border-2 px-10 p-5 border-gray-700 hover:bg-gray-900 w-60"
          >
            <FaTools size={50} />
            Manage project
            {userData.projects[0] && `: ${userData.projects[0].name}`}
          </Link>
        )}

        {/* <p>
          Thanks for creating an account for 8-Bit Jam! Make sure you&apos;ve
          also filled out the{" "}
          <a
            href="https://forms.gle/HiKE87KTgp5hzoWU7"
            target="_blank"
            className="underline"
          >
            registration form
          </a>{" "}
          as well in order to participate. You will see more stuff here once
          your registration is confirmed :D (you&apos;ll receive an email about
          it with further instructions)
        </p> */}
        <SignOut />
      </div>
    </div>
  );
}

export default Page;
