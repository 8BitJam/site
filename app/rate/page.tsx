import type { ProjectType } from "@/types/project";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import Hero from "@/components/layout/Hero";
import Form from "../project/Form";
import Rate from "@/components/project/Rate";

async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const session = await auth.api.getSession({ headers: await headers() });
  const user = await prisma.user.findUnique({
    where: { id: session?.user.id, isJudge: true },
  });
  if (!user) redirect("/");
  const { id } = await searchParams;
  const project = (await prisma.project.findUnique({
    where: { id },
    include: { debug: true },
  })) as ProjectType | null;
  if (!project) redirect("/");

  return (
    <div className="max-w-400 w-full px-5 md:px-15 lg:px-40 mx-auto flex flex-col items-center pb-15">
      <Hero
        title="RATE PROJECT"
        description="Give your ratings and feedback for each project on this page"
      />
      <Rate />
      <Form existing={project || undefined} rating />
    </div>
  );
}

export default Page;
