import { redirect } from "next/navigation";
import { getServerSesson } from "@/../feature/auth/action";
import { DASHBOARD_ROUTES } from "@/../feature/dashboard/lib/routes";
import { saveInstallation } from "@/../feature/github/server/installation";

function buildSignInCallbackUrl(installationId: string | null): string {
  if (installationId) {
    return `/api/github/callback?installation_id=${installationId}`;
  }

  return DASHBOARD_ROUTES.github;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const installationId = searchParams.get("installation_id");
  const session = await getServerSesson();

  if (!session) {
    const callbackUrl = buildSignInCallbackUrl(installationId);
    redirect(`sign-in?callbackUrl=${encodeURIComponent(callbackUrl)}`);
  }

  if (installationId) {
    await saveInstallation(session.user.id, Number(installationId));
  }

  redirect(DASHBOARD_ROUTES.github);
}
