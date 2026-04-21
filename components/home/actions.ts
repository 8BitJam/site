"use server";

import { prisma } from "@/lib/prisma";

export async function saveEmail(email: string) {
  try {
    const newEmail = await prisma.person.create({ data: { email: email } });
    return {
      success: true,
      message: newEmail.email + " submitted",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Failed to submit email, please try again",
    };
  }
}
