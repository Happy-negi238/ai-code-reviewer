import React from "react";
import { requireAuth } from "@/../feature/auth/action";
import { DashboardShell } from "@/../feature/dashboard/components/dashboard-shell";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await requireAuth();

  return (
    <DashboardShell user={session.user} plan={"pro"}>
      {children}
    </DashboardShell>
  );
}
