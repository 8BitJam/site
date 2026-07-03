"use client";

import { FaBars } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { usePathname } from "next/navigation";
import Btn from "../ui/Btn";

function Sidebar() {
  const [open, setOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { data: session } = authClient.useSession();
  const pathname = usePathname();

  useEffect(() => {
    const clickListener = (e: Event) => {
      if (!sidebarRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", clickListener);
    return () => {
      document.removeEventListener("click", clickListener);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="block sm:hidden" ref={sidebarRef}>
      <FaBars
        size={40}
        className="border-2 border-gray-700 p-2.5 text-gray-300 cursor-pointer hover:bg-blue-950"
        onClick={() => setOpen(true)}
      />
      {open && (
        <div className="flex flex-col gap-y-5 absolute top-0 left-0 h-screen z-30 bg-gray-950 p-10 border-r-2 border-r-gray-700 overflow-auto">
          {/* <Btn href="/schedule" text="SCHEDULE" />*/}
          <Btn href="/rules" text="RULES" color="hover:bg-red-950" />
          <Btn href="/sponsors" text="SPONSORS" color="hover:bg-green-950" />
          <Btn href="/about" text="ABOUT" color="hover:bg-violet-950" />
          {session?.user ? (
            <Btn href="/dashboard" text="DASHBOARD" primary />
          ) : (
            <Btn href="/signin" text="SIGN UP" primary />
          )}
        </div>
      )}
    </div>
  );
}

export default Sidebar;
