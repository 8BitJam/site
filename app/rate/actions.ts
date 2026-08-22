"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";

export async function submitRating(
  ratings: number[],
  feedback: string,
  projectId: string,
) {
  try {
    if (
      ratings.every((r) => r > 0) &&
      feedback.trim().replace(/\s+/g, " ").split(" ").length >= 30
    ) {
      const session = await auth.api.getSession({ headers: await headers() });
      if (session) {
        const existingUser = await prisma.user.findUnique({
          where: { id: session.user.id, isJudge: true },
          include: { ratings: true },
        });
        if (
          existingUser &&
          !existingUser.ratings.find((r) => r.projectId === projectId)
        ) {
          await prisma.rating.create({
            data: {
              impact: ratings[0],
              technicality: ratings[1],
              innovation: ratings[2],
              style: ratings[3],
              overall: ratings[4],
              feedback,
              userId: session.user.id,
              projectId,
            },
          });
          revalidatePath(`/rate?id=${projectId}`);
          return { success: true };
        }
      }
    }
  } catch (err) {
    console.error("Error: " + err);
  }
}
