import { UsageSummary } from "../../billing/server/usage";
import { UserSubscription } from "../../dashboard/lib/types";

export type SettingsProfile = {
  name: string;
  email: string;
  image: string | null;
  memberSince: string;
};

export type UserSettings = {
  profile: SettingsProfile;
  subscription: UserSubscription;
  usage: UsageSummary;
};
