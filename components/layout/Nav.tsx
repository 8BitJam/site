import Btn from "../ui/Btn";
import Link from "next/link";
import Image from "next/image";

function Nav() {
  return (
    <div className="w-full border-b-2 border-b-gray-700 sticky top-0 bg-gray-950 z-10">
      <div className="flex items-center justify-between max-w-400 w-full px-5 md:px-15 lg:px-40 mx-auto py-3">
        <Link
          href="/"
          className="font-jersey text-white font-bold text-4xl flex items-center gap-x-3"
        >
          <Image
            src="/logo.png"
            alt="8-Bit Jam Logo"
            width={80}
            height={80}
            className="h-12 w-15"
          />{" "}
          <span className="block sm:hidden md:block">8-BIT JAM</span>
        </Link>
        <div className="hidden sm:flex md:gap-x-2 lg:gap-x-5 items-center">
          <Btn href="/schedule" text="SCHEDULE" />
          <Btn href="/faq" text="FAQ" color="hover:bg-red-950" />
          <Btn href="/sponsors" text="SPONSORS" color="hover:bg-green-950" />
          <Btn href="/about" text="ABOUT" color="hover:bg-violet-950" />
          <Btn href="/signup" text="SIGN UP" primary />
        </div>
      </div>
    </div>
  );
}

export default Nav;
