import { serve } from "inngest/next";
import { inngest } from "@/../feature/inngest/client";
import { processTask } from "./function";
import { reviewPullRequest } from "@/../feature/reviews/server/review-pr-function";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [processTask, reviewPullRequest],
});
