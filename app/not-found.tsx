"use client";

import Btn from "@/components/ui/Btn";

function NotFound() {
  return (
    <div className="text-center px-5 flex flex-col gap-y-15 w-screen items-center justify-center pb-30">
      <h1 className="font-jersey text-9xl text-blue-600 pt-30 pb-15">
        GAME OVER
      </h1>
      <p className="text-gray-300">
        This site is still under construction, so that page doesn&apos;t exist
        yet...
      </p>
      <div className="flex gap-x-10">
        <Btn href="/" text="HOME" primary />
        <Btn onclick={() => history.back()} text="BACK" />
      </div>
    </div>
  );
}

export default NotFound;
