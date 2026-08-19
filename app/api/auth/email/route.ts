import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const email = searchParams.get("q");
  if (email) {
    const existing = await prisma.user.findUnique({ where: { email } });
    return NextResponse.json({
      success: true,
      existing: existing ? true : false,
    });
  }
  return NextResponse.json({ success: false });
}
