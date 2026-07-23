import Link from "next/link";

function Banner() {
  return (
    <Link
      href="https://forms.gle/HiKE87KTgp5hzoWU7"
      target="_blank"
      className="z-5 bg-blue-800 text-white sticky top-18.5 text-2xl py-2 text-center w-full font-jersey border-b-2 border-gray-700"
    >
      PARTICIPANT REGISTRATION NOW OPEN, GO REGISTER!!!
    </Link>
  );
}

export default Banner;
