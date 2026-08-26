"use client";

import type { LogoType } from "@/types/project";
import { useState, useEffect } from "react";
import { submitLogo } from "./actions";
import Upload from "@/components/project/Upload";
import Btn from "@/components/ui/Btn";

function Form({ existing }: { existing?: LogoType }) {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [logo, setLogo] = useState<LogoType>(
    existing || {
      id: "",
      banner: "",
      bannerName: "",
    },
  );

  useEffect(() => {
    if (existing) {
      setLogo(existing);
    }
  }, [existing]);

  async function handleSubmit() {
    setSubmitting(true);
    await submitLogo(logo);
    setSubmitting(false);
  }

  return (
    <div className="flex flex-col gap-y-5 items-center font-jersey text-gray-300 w-100">
      <Upload
        setProject={setLogo}
        existing={logo}
        disabled={logo.submitted || false}
        text="Upload logo"
      />
      {logo.banner.trim().length > 0 &&
        (logo.submitted ? (
          <Btn href="" text="Submitted!" primary />
        ) : (
          <Btn
            onclick={handleSubmit}
            text={submitting ? "Submitting..." : "Submit"}
            primary
          />
        ))}
    </div>
  );
}

export default Form;
