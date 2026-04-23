"use client";

import { authClient } from "@/lib/auth-client";
import Btn from "../ui/Btn";

function SignOut() {
  async function handleSignOut() {
    await authClient.signOut();
    window.location.reload();
  }

  return <Btn onclick={handleSignOut} text="SIGN OUT" />;
}

export default SignOut;
