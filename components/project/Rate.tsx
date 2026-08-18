"use client";

import { useState } from "react";
import Btn from "../ui/Btn";

function Rate() {
  const [rating, setRating] = useState<boolean>(false);

  return (
    <div className="w-200 pb-5">
      <Btn text="Rate" onclick={() => setRating(!rating)} primary />
      {rating && (
        <div className="text-2xl font-bold text-white font-jersey pt-5">
          Rating panel coming soon!
        </div>
      )}
    </div>
  );
}

export default Rate;
