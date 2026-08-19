import type { Metadata } from "next";
import type { ProjectType } from "@/types/project";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Hero from "@/components/layout/Hero";
import Form from "./Form";

export const metadata: Metadata = {
  title: "Manage Project | 8-Bit Jam",
  description:
    "Manage your project information and submit it for judging here!",
  authors: [{ name: "8-Bit Jam", url: "https://8bitjam.win" }],
  openGraph: {
    title: "Manage Project | 8-Bit Jam",
    description:
      "Manage your project information and submit it for judging here!",
    url: "https://8bitjam.win/submit",
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
  //TODO: add time check here too
  if (!session) redirect("/signin");
  const user = await prisma.user.findUnique({ where: { id: session.user.id } });
  if (user?.isJudge) redirect("/dashboard");
  const existingProject = (await prisma.project.findUnique({
    where: { ownerId: session.user.id },
    include: { debug: true },
  })) as ProjectType | null;

  return (
    <div className="max-w-400 w-full px-5 md:px-15 lg:px-40 mx-auto flex flex-col items-center pb-15">
      <Hero
        title="MANAGE PROJECT"
        description="Manage your project information and submit it for judging here!"
      />
      <Form existing={existingProject || undefined} />
    </div>
  );
}

export default Page;
