import type { Project, Rating, User } from "@/lib/generated/prisma/client";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Hero from "@/components/layout/Hero";
import Image from "next/image";
import Projects from "./Projects";

const criteria = ["impact", "technicality", "innovation", "style", "overall"];
const REMOTE_MULTIPLIER = 0.35;
const INPERSON_MULTIPLIER = 0.65;

export type RatingType = Rating & {
  user: User;
};

export type ProjectType = Project & {
  ratings: RatingType[];
};

async function Page() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session || session.user.id !== "6LXggIqhGDpXBqDviDyPvsynpZl3QHY2")
    redirect("/");
  const projects: ProjectType[] = await prisma.project.findMany({
    include: { ratings: { include: { user: true } } },
  });
  const logos = await prisma.logo.findMany({ where: { submitted: true } });
  const ratings = projects.map((project) => {
    const remoteTotal = [0, 0, 0, 0, 0];
    const inpersonTotal = [0, 0, 0, 0, 0];
    let remoteCount = 0;
    let inpersonCount = 0;
    let overall = 0;
    let inpersonOverall = 0;
    project.ratings.forEach((rating) => {
      let total = 0;
      criteria.forEach((c, i) => {
        const num = (rating as Record<string, string | number | User | Date>)[
          c
        ] as number;
        total += num;
        if (rating.user.isRemote) {
          remoteTotal[i] = remoteTotal[i] + num * REMOTE_MULTIPLIER;
        } else {
          inpersonTotal[i] = inpersonTotal[i] + num * INPERSON_MULTIPLIER;
        }
      });
      if (rating.user.isRemote) {
        overall += total * REMOTE_MULTIPLIER;
        remoteCount++;
      } else {
        inpersonOverall += total * INPERSON_MULTIPLIER;
        inpersonCount++;
      }
    });
    return remoteTotal.map((rating, i) => {
      return (
        Math.round(
          (i === remoteTotal.length - 1
            ? overall /
                (inpersonCount === 0 ? REMOTE_MULTIPLIER : 1) /
                (remoteCount || 1) +
              inpersonOverall /
                (remoteCount === 0 ? INPERSON_MULTIPLIER : 1) /
                (inpersonCount || 1)
            : rating /
                (inpersonCount === 0 ? REMOTE_MULTIPLIER : 1) /
                (remoteCount || 1) +
              inpersonTotal[i] /
                (remoteCount === 0 ? INPERSON_MULTIPLIER : 1) /
                (inpersonCount || 1)) * 100,
        ) / 100
      );
    });
  });

  return (
    <div className="max-w-400 w-full px-5 md:px-15 lg:px-40 mx-auto">
      <Hero
        title="SUMMARY"
        description="Check out each project's rating summary and judging results!"
      />
      <Projects projects={projects} ratings={ratings} criteria={criteria} />
      <h2 className="text-blue-600">LOGOS</h2>
      <div className="flex gap-3 flex-wrap">
        {logos.map((logo) => (
          <Image
            key={logo.id}
            src={logo.banner}
            alt="Logo"
            width={300}
            height={300}
            className="w-50"
          />
        ))}
      </div>
    </div>
  );
}

export default Page;
