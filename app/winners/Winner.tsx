import Image from "next/image";

interface WinnerProps {
  award?: string;
  team?: string;
  img: string;
}

function Winner({ award, team, img }: WinnerProps) {
  return (
    <div className="border-2 border-gray-700 cursor-pointer hover:bg-gray-900 flex gap-y-3 p-5 flex-col w-85">
      <Image
        src={img}
        alt="Winner image"
        width={700}
        height={700}
        className=""
      />
      {award && (
        <h2 className="text-blue-600 text-4xl font-bold font-jersey">
          {award}
        </h2>
      )}
      {team && <div className="text-gray-300">{team}</div>}
    </div>
  );
}

export default Winner;
