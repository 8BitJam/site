"use server";

import type { LogoType } from "@/types/project";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function submitLogo(logo: LogoType) {
  try {
    const session = await auth.api.getSession({ headers: await headers() });
    if (session) {
      const submitted = await prisma.logo.create({
        data: {
          ...logo,
          id: undefined,
          userId: session.user.id,
          submitted: true,
        },
      });
      console.log(submitted);
      revalidatePath("/logo");
    }
  } catch (err) {
    console.error("Error: " + err);
  }
}
