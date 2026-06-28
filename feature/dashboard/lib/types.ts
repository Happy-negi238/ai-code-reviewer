export type RepoSyncStatus = "pending" | "syncing" | "synced" | "failed";

// Repositories visible to everyone or collaborators
export type RespoVisibility = "public" | "private";

/**
 * A repositories row displayed in the repositories table
 * it is a mirror of github api which return with optional sync feature
 */
export type DashboardRepo = {
  id: string;
  name: string;
  fullName: string;
  visibility: RespoVisibility;
  defaultBranch: string;
  updatedAt: string;
  language: string | null;
  stars: number;
  syncStatus: RepoSyncStatus | null;
};

/**
 * Wheather a github app has installed and on which account
 * accountLogin is the github username or org name the app was installed for
 */
export type GithubInstallationStatus = {
  connected: boolean;
  accountLogin: string | null;
  installedAt: string | null;
};

/**
 * which is currently user use
 */
export type SubscriptionPlan = "free" | "pro";

/**
 * The user's current subscription state, used on the Settings page
 * and in the sidebar user menu badge.
 */
export type UserSubscription = {
  plan: SubscriptionPlan;
  status: "active" | "canceled" | "trialing";
  renewsAt: string | null;
};

