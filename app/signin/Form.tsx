"use client";

import type { UserType } from "@/types/user";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import Input from "@/components/ui/Input";
import Btn from "@/components/ui/Btn";

const labelStyles =
  "flex flex-col gap-y-1 font-jersey text-gray-300 text-2xl w-full";
const providerStyles =
  "cursor-pointer text-gray-300 font-jersey bg-transparent text-2xl px-4 py-2 hover:bg-blue-950 border-2 border-gray-700 flex items-center gap-x-5";

function Form() {
  const [user, setUser] = useState<UserType>({
    id: crypto.randomUUID(),
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<string | null>(null);

  async function handleSignIn(provider: string) {
    setLoading(provider);
    await authClient.signIn
      .social({
        provider: provider,
        callbackURL: "/dashboard",
        errorCallbackURL: "/signin",
      })
      .then(() => setLoading(null));
  }

  async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    const { data } = await authClient.signUp.email(
      {
        email: user.email,
        password: user.password,
        name: user.username,
        callbackURL: "/dashboard",
      },
      {
        onSuccess: () => {
          window.location.reload();
        },
      },
    );
    console.log(data);
  }

  return (
    <form
      className="flex flex-col gap-y-7 border-2 border-gray-700 px-10 py-5 w-100"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-y-3">
        <label className={labelStyles}>
          Username
          <Input
            placeholder="SirOctopus88"
            value={user.username}
            setValue={(newValue: string) =>
              setUser({ ...user, username: newValue })
            }
          />
        </label>
        <label className={labelStyles}>
          Email
          <Input
            placeholder="hello@8bitjam.win"
            value={user.email}
            setValue={(newValue: string) =>
              setUser({ ...user, email: newValue })
            }
            email
          />
        </label>{" "}
        <label className={labelStyles + " mb-2"}>
          Password
          <Input
            placeholder="123IsNotAPassword"
            value={user.password}
            setValue={(newValue: string) =>
              setUser({ ...user, password: newValue })
            }
            password
          />
        </label>
        <Btn text="SIGN IN" primary submit full />
      </div>
      <div className="w-full relative h-0.5 bg-gray-700">
        <div className="text-gray-300 text-center absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] px-4 bg-gray-950">
          or
        </div>
      </div>
      <div className="flex flex-col gap-y-3">
        <div className={providerStyles} onClick={() => handleSignIn("google")}>
          <FaGoogle size={25} />{" "}
          {loading === "google" ? "Loading..." : "Sign in with Google"}
        </div>
        <div className={providerStyles} onClick={() => handleSignIn("github")}>
          <SiGithub size={25} />
          {loading === "github" ? "Loading..." : "Sign in with GitHub"}
        </div>
      </div>
    </form>
  );
}

export default Form;
