import { getServerSesson } from "@/../feature/auth/action";
import { NextResponse } from "next/server";
import { getUserInstallationId } from "@/../feature/github/server/installation";
import { getInstallationReposPage } from "@/../feature/github/server/repos";
import { getRepoSyncStatus } from "@/../feature/repo-sync/server/repo-sync";

export async function GET(request: Request) {
  const session = await getServerSesson();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const installationId = await getUserInstallationId(session.user.id);

  if (!installationId) {
    return NextResponse.json(
      { error: "Github app is not connected" },
      { status: 400 },
    );
  }

  const { searchParams } = new URL(request.url);
  const page = Math.max(1, Number(searchParams.get("page")) ?? 1);

  const data = await getInstallationReposPage(installationId, page);

  const reposFullNames = data.repos.map((repo) => repo.fullName);
  const syncStatuses = await getRepoSyncStatus(reposFullNames);

  const repos = data.repos.map((repo) => ({
    ...repo,
    syncStatus: syncStatuses[repo.fullName] ?? null,
  }));

  return NextResponse.json({ ...data, repos });
}
