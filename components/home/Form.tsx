"use client";

import { useState } from "react";
import Input from "../ui/Input";
import Btn from "../ui/Btn";

function Form() {
  const [email, setEmail] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    if (!success) {
      console.log(email);
      setSuccess(true);
      //TODO: call server action here
    }
  }

  return (
    <form className="flex flex-col gap-y-7" onSubmit={handleSubmit}>
      <label className="flex flex-col gap-y-1 font-jersey text-gray-300 text-2xl w-fit">
        Email
        <Input
          placeholder="hello@8bitjam.win"
          value={email}
          setValue={setEmail}
        />
        <div className="text-xs text-gray-400 font-inter max-w-100">
          Limited spots available, this is just an interest RSVP form and not
          the actual registration that will open in late May.
        </div>
      </label>
      <div className="flex flex-col sm:flex-row gap-5">
        <Btn text={success ? "RESPONSE RECORDED" : "RSVP NOW"} primary submit />
        <Btn href="/about" text="LEARN MORE" />
      </div>
    </form>
  );
}

export default Form;
