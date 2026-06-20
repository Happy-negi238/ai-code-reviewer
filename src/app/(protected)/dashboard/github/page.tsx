import { Metadata } from "next";
import React from "react";
import { requireAuth } from "@/../feature/auth/action";
import { getInstallationStatus } from "@/../feature/github/server/installation";
import { DashboardHeader } from "@/../feature/dashboard/components/dashboard-header";
import { GithubConnectCard } from "@/../feature/github/components/github-connect-card";

export const metaData: Metadata = {
  title: "Github App Dashboard",
};

const DashboardGithubPage = async () => {
  const session = await requireAuth();
  const installation = await getInstallationStatus(session.user.id);

  return (
  <div>
    <DashboardHeader
    title="GitHub App"
    description="Install or disconnect the reviewer app on your github account"
    />
    <GithubConnectCard userId={session.user.id} installation={installation}/>
  </div>
);
};

export default DashboardGithubPage;
