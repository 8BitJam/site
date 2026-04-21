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
      href={empty ? "mailto:finance@8bitjam.win" : "https://" + link}
      target="_blank"
      className={
        "border-2 border-gray-700 hover:bg-gray-900 flex items-center justify-center p-5 w-80" +
        (empty ? " border-dashed" : "")
      }
    >
      {empty ? (
        <div className="text-gray-300 text-center">
          This could be your logo, please don&apos;t hesitate to reach out to us
          at finance@8bitjam.win!
        </div>
      ) : (
        <div className="flex flex-col gap-y-5 items-center">
          <Image
            src={"https://" + logo!}
            alt={name + " Logo"}
            width={200}
            height={200}
            className="w-30"
          />
          <h2 className="text-blue-600 font-bold text-3xl font-jersey">
            {name?.toUpperCase()}
          </h2>
        </div>
      )}
    </a>
  );
}

export default Card;
