"use client";

import Link from "next/link";

interface BtnProps {
  href?: string;
  onclick?: () => void;
  text: string;
  color?: string;
  primary?: boolean;
  submit?: boolean;
}

function Btn({ href, onclick, text, color, primary, submit }: BtnProps) {
  const btnStyles = `w-fit cursor-pointer text-gray-300 font-jersey bg-transparent text-2xl px-4 py-1 ${color || "hover:bg-blue-950"} border-2 border-transparent hover:border-gray-700 ${primary && "border-gray-500! bg-blue-700! hover:bg-blue-800!"}`;

  return href ? (
    <Link href={href} className={btnStyles}>
      {text}
    </Link>
  ) : (
    <button
      type={submit ? "submit" : "button"}
      className={btnStyles}
      onClick={onclick}
    >
      {text}
    </button>
  );
}

export default Btn;
