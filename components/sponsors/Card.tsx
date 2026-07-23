import Image from "next/image";

interface CardProps {
  logo?: string;
  name?: string;
  link?: string;
  empty?: boolean;
}

function Card({ logo, name, link, empty }: CardProps) {
  return (
    <a
      href={empty ? "mailto:hello@8bitjam.win" : "https://" + link}
      target="_blank"
      className={
        "border-2 border-gray-700 hover:bg-gray-900 flex items-center justify-center p-5 w-80" +
        (empty ? " border-dashed" : "")
      }
      title={name ? name : undefined}
    >
      {empty ? (
        <div className="text-gray-300 text-center">
          This could be your logo, please don&apos;t hesitate to reach out to us
          at hello@8bitjam.win!
        </div>
      ) : (
        <Image src={logo!} alt={name + " Logo"} width={200} height={200} />
      )}
    </a>
  );
}

export default Card;
