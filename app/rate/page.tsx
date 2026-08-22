import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { FaGithub, FaLink } from "react-icons/fa";
import Log from "@/components/project/Log";
import Hero from "@/components/layout/Hero";
import Rubric from "./Rubric";
import Image from "next/image";
import Link from "next/link";

//TODO: seo metadata for this page, project, and summary pages

async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { id } = await searchParams;
  if (!id) redirect("/");
  const session = await auth.api.getSession({ headers: await headers() });
  const user = await prisma.user.findUnique({
    where: { id: session?.user.id, isJudge: true },
  });
  if (!user) redirect("/");
  const project = await prisma.project.findUnique({
    where: { id },
    include: { debug: true, ratings: true },
  });
  if (!project || project.ratings.find((r) => r.userId === user.id))
    redirect("/dashboard");

  return (
    <div className="max-w-400 w-full px-5 md:px-15 lg:px-40 mx-auto flex flex-col items-center pb-15 gap-y-10">
      <Hero
        title="RATE PROJECT"
        description="Give your ratings and feedback for each project on this page"
      />
      <div className="flex flex-col gap-y-5 border-2 border-gray-700 p-10 w-200">
        <Image
          src={project.banner}
          alt="Project banner"
          width={1000}
          height={1000}
          className="w-full"
        />
        <div>
          <Link
            href={`https://${project.demo}`}
            target="blank"
            title="View demo"
            className="mb-3 text-blue-600 font-bold font-jersey text-6xl hover:underline w-fit flex items-center gap-x-5"
          >
            {project.name} <FaLink size={25} />
          </Link>
          <Link
            href={`https://${project.repo}`}
            target="blank"
            title="View source code repository"
            className="text-blue-600 hover:underline font-bold text-lg w-fit flex items-center gap-x-3"
          >
            <FaGithub size={20} /> Source code
          </Link>
        </div>
        <div className="text-gray-300">{project.description}</div>
        <h3 className="text-blue-600 font-bold font-jersey text-3xl">
          Gameplay Instructions
        </h3>
        <div className="text-gray-300">{project.instructions}</div>
        <h3 className="text-blue-600 font-bold font-jersey text-3xl">
          Technology Used
        </h3>
        <div className="text-gray-300">{project.type}</div>
        <h3 className="text-blue-600 font-bold font-jersey text-3xl">
          Team Name
        </h3>
        <div className="text-gray-300">
          {project.team} ({project.teammates.length} members)
        </div>
        <h3 className="text-blue-600 font-bold font-jersey text-3xl">
          AI Usage Log
        </h3>
        <Log debug={project.debug} />
      </div>
      <Rubric projectId={project.id} />
    </div>
  );
}

export default Page;
