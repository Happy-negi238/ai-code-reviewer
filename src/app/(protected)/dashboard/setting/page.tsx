import { requireAuth } from "@/../feature/auth/action";
import { DashboardHeader } from "@/../feature/dashboard/components/dashboard-header";
import { getUserSettings } from "@/../feature/settings/server/get-settings";
import { SettingsContent } from "@/../feature/dashboard/components/settings-content";

export default async function DashboardSettingsPage() {
  const session = await requireAuth();
  const settings = await getUserSettings(session.user.id);

  return (
    <>
      <DashboardHeader
        title="Settings"
        description="Manage your profile and subscription."
      />
      <SettingsContent
        profile={settings.profile}
        subscription={settings.subscription}
        usage={settings.usage}
      />
    </>
  );
}
