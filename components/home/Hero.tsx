import { FaLocationDot, FaCalendar } from "react-icons/fa6";
import Form from "./Form";
import Image from "next/image";

function Hero() {
  return (
    <div className="py-15 md:py-5 lg:py-15 flex flex-col-reverse gap-5 md:flex-row justify-between md:items-center">
      <div className="flex flex-col gap-y-7">
        <h1 className="text-blue-600 font-jersey text-8xl font-extrabold">
          8-BIT JAM
        </h1>
        <p className="text-gray-300 text-lg max-w-130">
          Join 50 other passionate high schoolers this summer for this in-person
          overnight game-themed hackathon!
        </p>
        <div className="flex flex-col sm:flex-row gap-x-10 gap-y-5 md:items-center text-gray-300 font-jersey text-2xl">
          <div className="flex items-center gap-x-3">
            <FaCalendar size={25} />
            AUGUST 8-9TH, 2026
          </div>
          <div className="flex items-center gap-x-3">
            <FaLocationDot size={25} />
            HERNDON, VIRGINIA
          </div>
        </div>
        <Form />
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
