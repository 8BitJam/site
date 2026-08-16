"use client";

import type { ProjectType } from "@/types/project";
import { FaUpload } from "react-icons/fa";
import Image from "next/image";

interface UploadProps {
  setProject: React.Dispatch<React.SetStateAction<ProjectType>>;
  existing?: string;
}

function Upload({ setProject, existing }: UploadProps) {
  return (
    <div>
      {existing ? (
        <Image src={existing} alt="Project banner" width={200} height={200} />
      ) : (
        <>
          <FaUpload size={50} />
          Upload a banner image for your game here!
        </>
      )}
    </div>
  );
}

export default Upload;
