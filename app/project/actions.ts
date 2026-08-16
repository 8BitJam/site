"use server";

import type { DebugType, ProjectType } from "@/types/project";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";

export async function saveProject(project: ProjectType) {
  try {
    const session = await auth.api.getSession({ headers: await headers() });
    if (session) {
      await prisma.project.upsert({
        where: { id: project.id, ownerId: session.user.id },
        update: {
          ...project,
          id: undefined,
          type: project.type.id,
          debug: {
            connect: project.debug.map((d) => {
              return { id: d.id };
            }),
          },
        },
        create: {
          ...project,
          id: undefined,
          type: project.type.id,
          debug: {
            connect: project.debug.map((d) => {
              return { id: d.id };
            }),
          },
          ownerId: session.user.id,
        },
      });
      revalidatePath("/project");
      return { success: true };
    }
    return {
      success: false,
      message: "Please sign in first to manage your project!",
    };
  } catch (err) {
    console.error("Error: " + err);
    return {
      success: false,
      message: "Internal server error, please try again later.",
    };
  }
}

export async function debugLog(debug: DebugType, projectId: string) {
  try {
    const session = await auth.api.getSession({ headers: await headers() });
    if (session) {
      await prisma.debug.create({
        data: { ...debug, projectId },
      });
      revalidatePath("/project");
    }
  } catch (err) {
    console.error("Error: " + err);
  }
}
