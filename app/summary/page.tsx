import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Hero from "@/components/layout/Hero";

async function Page() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session || session.user.id !== "6LXggIqhGDpXBqDviDyPvsynpZl3QHY2")
    redirect("/");

  return (
    <div className="max-w-400 w-full px-5 md:px-15 lg:px-40 mx-auto">
      <Hero
        title="SUMMARY"
        description="Check out each project's rating summary and judging results!"
      />
      <div className="text-gray-300 text-center mb-15">
        Judging results and summary coming soon!
      </div>
    </div>
  );
}

export default Page;
