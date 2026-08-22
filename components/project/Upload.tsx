"use client";

import type { PutBlobResult } from "@vercel/blob";
import type { LogoType } from "@/types/project";
import { useState, useRef } from "react";
import { FaUpload } from "react-icons/fa";
import Image from "next/image";

interface UploadProps {
  setProject: React.Dispatch<React.SetStateAction<LogoType>>;
  existing: LogoType;
  disabled: boolean;
  text?: string;
}

function Upload({ setProject, existing, disabled, text }: UploadProps) {
  const [uploading, setUploading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleUpload() {
    if (!inputRef.current?.files) {
      throw new Error("No file selected");
    }
    setUploading(true);
    const file = inputRef.current.files[0];
    const response = await fetch(`/api/upload?filename=${file.name}`, {
      method: "POST",
      body: file,
    });
    const newBlob = (await response.json()) as PutBlobResult;
    setProject((prev) => {
      return { ...prev, banner: newBlob.url, bannerName: newBlob.pathname };
    });
    setUploading(false);
  }

  return uploading ? (
    <div className="text-gray-300 text-xl py-10 text-center">Uploading...</div>
  ) : (
    <label
      className={`${!disabled && "cursor-pointer"} flex items-center text-center text-xl flex-col gap-y-3 border-2 py-5 border-gray-700 hover:bg-gray-900 min-w-100`}
      onClick={(e) => (disabled ? e.preventDefault() : undefined)}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg, image/png, image/webp"
        className="hidden"
        onChange={() => (disabled ? undefined : handleUpload())}
      />
      {existing.banner ? (
        <>
          <Image
            src={existing.banner}
            alt="Project banner"
            width={200}
            height={100}
            className="w-[90%]"
          />
          <div className="text-base">{existing.bannerName}</div>
        </>
      ) : (
        <>
          <FaUpload size={50} />
          {text || (
            <>
              Upload a banner image for your game!
              <span className="text-lg">Recommended aspect ratio is 16:9</span>
            </>
          )}
        </>
      )}
    </label>
  );
}

export default Upload;
