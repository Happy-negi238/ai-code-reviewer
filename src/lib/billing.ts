"use server";

import { redirect } from "next/navigation";
import { getServerSesson } from "../../feature/auth/action";
import {
  cancelProSubscription,
  createProSubscription,
} from "../../feature/billing/server/subscription";

export async function startProSubscription() {
  const session = await getServerSesson();

  if (!session) {
    redirect("/sign-in");
  }

  return createProSubscription(session.user.id);
}

export async function cancelSubscription() {
  const session = await getServerSesson();

  if (!session) {
    redirect("/sign-in");
  }

  await cancelProSubscription(session.user.id);
}
