"use server";

import { redirect } from "next/navigation";
import { getServerSesson } from "../../auth/action";
import { deleteInstallation } from "../server/installation";
import { DASHBOARD_ROUTES } from "../../dashboard/lib/routes";

export async function disconnectGithubApp() {
  const session = await getServerSesson();

  if (!session) {
    redirect("/sign-in");
  }

  await deleteInstallation(session?.user.id);
  redirect(DASHBOARD_ROUTES.github);
}
