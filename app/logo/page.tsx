import type { Metadata } from "next";
import type { LogoType, ProjectType } from "@/types/project";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Hero from "@/components/layout/Hero";
import Form from "./Form";

export const metadata: Metadata = {
  title: "Logo Redesign | 8-Bit Jam",
  description:
    "Submit your redesigned 8-Bit Jam logo for the first sidequest here!",
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
  const existingLogo = (await prisma.logo.findUnique({
    where: { userId: session.user.id },
  })) as LogoType | null;

  return (
    <div className="max-w-400 w-full px-5 md:px-15 lg:px-40 mx-auto flex flex-col items-center pb-15">
      <Hero
        title="LOGO REDESIGN"
        description="Submit your redesigned 8-Bit Jam logo for the first sidequest here!"
      />
      <Form existing={existingLogo || undefined} />
    </div>
  );
}

export default Page;
