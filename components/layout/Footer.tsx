import Link from "next/link";
import Image from "next/image";
import { SiGithub, SiHackclub, SiInstagram, SiTiktok } from "react-icons/si";

const socialStyles = "flex flex-col gap-y-2 items-center w-10";

function Footer() {
  return (
    <div className="w-full border-t-2 border-t-gray-700">
      <div className="flex flex-col gap-y-10 sm:flex-row sm:items-center justify-between max-w-400 w-full px-5 md:px-15 lg:px-40 mx-auto py-15">
        <div className="flex flex-col gap-y-5">
          <Link
            href="/"
            className="font-jersey text-white font-bold text-3xl flex items-center gap-x-3"
          >
            <Image
              src="/logo.png"
              alt="8-Bit Jam Logo"
              width={80}
              height={80}
              className="h-10 w-12"
            />{" "}
            8-BIT JAM
          </Link>
          <span className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} 8-Bit Jam, fiscally sponsored by{" "}
            <a
              href="https://hackclub.com/fiscal-sponsorship/"
              target="_blank"
              className="underline"
            >
              Hack Club
            </a>
          </span>
        </div>
        <div className="text-gray-300 text-xs flex gap-x-10">
          <a
            href="https://instagram.com/8-BitJam"
            target="_blank"
            className={socialStyles}
          >
            <SiInstagram size={25} />
            Instagram
          </a>
          <a
            href="https://tiktok.com/@8-BitJam"
            target="_blank"
            className={socialStyles}
          >
            <SiTiktok size={25} />
            TikTok
          </a>
          <a
            href="https://github.com/8BitJam"
            target="_blank"
            className={socialStyles}
          >
            <SiGithub size={25} />
            GitHub
          </a>
          <a
            href="https://hcb.hackclub.com/8BitJam"
            target="_blank"
            className={socialStyles}
          >
            <SiHackclub size={25} />
            HCB
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
