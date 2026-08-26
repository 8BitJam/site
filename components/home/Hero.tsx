import { saveEmail } from "./actions";
import { FaLocationDot, FaCalendar, FaTrophy } from "react-icons/fa6";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Form from "./Form";
import Btn from "../ui/Btn";
import Image from "next/image";
import Link from "next/link";

async function Hero() {
  const session = await auth.api.getSession({ headers: await headers() });

  return (
    <div className="py-15 md:py-5 lg:py-15 flex flex-col-reverse gap-5 md:flex-row justify-between md:items-center">
      <div className="flex flex-col gap-y-7">
        <h1 className="text-blue-600 font-jersey text-8xl font-extrabold">
          8-BIT JAM
        </h1>
        <p className="text-gray-300 text-lg max-w-130">
          Join 50 other passionate high schoolers this summer for this in-person
          10-hour game-themed hackathon!
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-x-10 gap-y-3 w-[80%] md:items-center text-gray-300 font-jersey text-2xl">
          <div className="flex items-center gap-x-3">
            <FaTrophy size={25} />
            $10,000+ IN PRIZES
          </div>
          <div className="flex items-center gap-x-3">
            <FaCalendar size={25} />
            AUGUST 22ND, 2026
          </div>
          <div className="flex items-center gap-x-3">
            <FaLocationDot size={25} />
            GREAT FALLS, VIRGINIA
          </div>
        </div>
        {/* <Form saveEmail={saveEmail} /> */}
        <div className="text-sm text-gray-400 font-inter max-w-100">
          {/* Registration closes August 21st, please register as early as you can
          as the limited spots are first come, first served. */}
          8-Bit Jam 2026 has ended! Check out the{" "}
          <Link href="/winners" className="underline">
            winners
          </Link>{" "}
          and come back when the 8-Bit Jam 2.0 interest form opens
        </div>
        <div className="flex flex-col sm:flex-row gap-5">
          {/* <Btn
            href="https://forms.gle/HiKE87KTgp5hzoWU7"
            text="REGISTER NOW"
            primary
            blank
          />
          <Btn
            href="https://forms.gle/hLqAAtMkJVTMRTtz5"
            text="VOLUNTEERING FORM"
            primary
            blank
          /> */}
          {session ? (
            <Btn href="/dashboard" text="DASHBOARD" primary />
          ) : (
            <Btn href="/signin" text="SIGN IN" primary />
          )}
          <Btn href="/about" text="LEARN MORE" />
        </div>
      </div>
      <Image
        src="/logo.png"
        alt="8-Bit Jam Logo"
        width={300}
        height={300}
        className="w-40 md:w-80 rotate-y-180 mx-auto md:mx-0"
      />
    </div>
  );
}

export default Hero;
