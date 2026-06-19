"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import {
  DEFAULT_AUTH_CALLBACK,
  getSafeCallbackPath,
  SIGN_IN_PATH,
} from "../utils";

export async function SignInWithGithub(formData: FormData) {
  const callback = formData.get("callbackUrl");

  const redirectTo = getSafeCallbackPath(
    typeof callback === "string" ? callback : null
  );
  const result = await auth.api.signInSocial({
    body: {
      provider: "github",
      callbackURL: redirectTo,
    },

    headers: await headers(),
  });

  if (result.url) {
    redirect(result.url);
  }
}

export async function getServerSesson() {
  return await auth.api.getSession({
    headers: await headers(),
  });
}

export async function requireAuth(requireTo = SIGN_IN_PATH) {
  const session = await getServerSesson();

  if (!session) redirect(requireTo);
  return session;
}

export async function requireUnAuth(requireTo = DEFAULT_AUTH_CALLBACK) {
  const session = await getServerSesson();

  if (session) redirect(requireTo);
}
