import type { SubscriptionPlan } from "../../dashboard/lib/types";

export const PLAN_DETAILS: Record<
  SubscriptionPlan,
  { label: string; features: string[] }
> = {
  free: {
    label: "Free",
    features: [
      "Up to 5 AI review per month",
      "Public and Private repositories only",
      "Community support",
    ],
  },
  pro: {
    label: "Pro",
    features: [
      "Unlimited AI reviews on connected repos",
      "Public and Private repository support",
      "Priority support",
    ],
  },
};
