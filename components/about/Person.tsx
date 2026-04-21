"use client";

import type { PersonType } from "@/types/team";
import Image from "next/image";

function Person({ person }: { person: PersonType }) {
  return (
    <div
      className="text-blue-600 flex-1 flex gap-y-3 border-2 border-gray-700 min-w-80 p-5 cursor-pointer hover:bg-gray-900 gap-10"
      onClick={() => person.link && window.open(person.link, "_blank")}
    >
      <Image
        src={person.image}
        alt={person.name + " Avatar"}
        width={100}
        height={100}
        className="w-30 h-30"
      />
      <div className="flex flex-col gap-y-3">
        <h2 className="font-jersey font-bold text-3xl">
          {person.name.toUpperCase()}
        </h2>
        <div className="flex gap-3 flex-wrap">
          {person.roles.map((role, i) => (
            <div
              key={i}
              className="bg-gray-800 text-gray-300 px-2 py-1 text-sm"
            >
              {role}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Person;
