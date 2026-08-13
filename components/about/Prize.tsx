import Image from "next/image";

interface PrizeProps {
  name: string;
  link: string;
  img: string;
  value?: number;
}

function Prize({ name, link, img, value }: PrizeProps) {
  return (
    <a
      href={"https://" + link}
      target="_blank"
      className="relative border-2 border-gray-700 hover:bg-gray-900 flex flex-col items-center gap-y-5 p-5 w-80"
    >
      <Image
        src={img}
        alt={name + " logo"}
        width={200}
        height={200}
        className="h-20 w-auto"
      />
      <h2 className="text-white font-bold text-center">{name}</h2>
      <div className="absolute bg-blue-800 -top-4 -left-5 px-2 py-1 font-jersey text-white text-2xl -rotate-4">
        {value ? `~$${value} each!` : "FREE!"}
      </div>
    </a>
  );
}

export default Prize;
