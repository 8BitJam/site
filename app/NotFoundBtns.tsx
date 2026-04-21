"use client";

import Btn from "@/components/ui/Btn";

function NotFoundBtns() {
  return (
    <div className="flex gap-x-10">
      <Btn href="/" text="HOME" primary />
      <Btn onclick={() => history.back()} text="BACK" />
    </div>
  );
}

export default NotFoundBtns;
