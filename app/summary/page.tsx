import type { User } from "@/lib/generated/prisma/client";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Hero from "@/components/layout/Hero";

const criteria = ["impact", "technicality", "innovation", "style", "overall"];

async function Page() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session || session.user.id !== "6LXggIqhGDpXBqDviDyPvsynpZl3QHY2")
    redirect("/");
  const projects = await prisma.project.findMany({
    include: { ratings: { include: { user: true } } },
  });
  const ratings = projects.map((project) => {
    const remoteTotal = [0, 0, 0, 0, 0];
    let remoteCount = 1; //TODO: reset to zero, this is only for testing
    let inpersonTotal: number[];
    let overall = 0;
    let inpersonOverall = 0;
    project.ratings.forEach((rating) => {
      let total = 0;
      if (rating.user.isRemote) {
        criteria.forEach((c, i) => {
          const num = (rating as Record<string, string | number | User | Date>)[
            c
          ] as number;
          total += num;
          remoteTotal[i] = remoteTotal[i] + num * 0.35;
        });
        overall += total * 0.35;
        remoteCount++;
      } else {
        inpersonTotal = criteria.map((c) => {
          const num = (rating as Record<string, string | number | User | Date>)[
            c
          ] as number;
          total += num;
          return num * 0.65;
        });
        inpersonOverall = total * 0.65;
      }
    });
    return remoteTotal.map((rating, i) => {
      return (
        Math.round(
          (i === remoteTotal.length - 1
            ? overall / remoteCount + inpersonOverall
            : rating / remoteCount + inpersonTotal[i]) * 100,
        ) / 100
      );
    });
  });
  console.log(ratings);

  return (
    <div className="max-w-400 w-full px-5 md:px-15 lg:px-40 mx-auto">
      <Hero
        title="SUMMARY"
        description="Check out each project's rating summary and judging results!"
      />
      <div className="text-gray-300 mb-15">
        <div className="flex border-b-2 border-gray-700">
          <div className="flex-2 font-bold text-center py-2 hover:bg-gray-900 cursor-pointer">
            Name
          </div>
          <div className="flex-1 font-bold text-center py-2 hover:bg-gray-900 cursor-pointer">
            Impact
          </div>
          <div className="flex-1 font-bold text-center py-2 hover:bg-gray-900 cursor-pointer">
            Technicality
          </div>
          <div className="flex-1 font-bold text-center py-2 hover:bg-gray-900 cursor-pointer">
            Innovation
          </div>
          <div className="flex-1 font-bold text-center py-2 hover:bg-gray-900 cursor-pointer">
            Style
          </div>
          <div className="flex-1 font-bold text-center py-2 hover:bg-gray-900 cursor-pointer">
            Overall
          </div>
        </div>
        {projects.map((project, i) => (
          <div key={project.id} className="flex border-b border-gray-700">
            <div className="flex-2 text-center py-2">{project.name}</div>
            {criteria.map((c, index) => (
              <div key={c} className="flex-1 text-center py-2">
                {ratings[i][index]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
