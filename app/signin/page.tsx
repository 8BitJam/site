import type { Metadata } from "next";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Hero from "@/components/layout/Hero";
import Form from "./Form";

export const metadata: Metadata = {
  title: "Sign In | 8-Bit Jam",
  description:
    "Create or sign in to an existing account for 8-Bit Jam registration here!",
  authors: [{ name: "8-Bit Jam", url: "https://8bitjam.win" }],
  openGraph: {
    title: "Sign In | 8-Bit Jam",
    description:
      "Create or sign in to an existing account for 8-Bit Jam registration here!",
    url: "https://8bitjam.win/signin",
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
  if (session) redirect("/dashboard");

  return (
    <div className="max-w-400 w-full px-5 md:px-15 lg:px-40 mx-auto">
      <Hero
        title="SIGN IN"
        description="Create or sign in to an existing account for 8-Bit Jam registration here!"
      />
      <div className="w-full flex justify-center pb-15">
        <Form />
      </div>
    </div>
  );
}

export default Page;
