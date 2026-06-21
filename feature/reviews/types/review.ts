export type PrFile = {
  filePath: string;
  patch: string;
};

export type CodeChunk = {
    // Unique id used as a the pinecode record id e.g. `pr-42--src/foo.ts--part-0`
  id: string;
  // Source file path this chunk come from
  filePath: string;
  // Raw text stored in pinecone and searched at review time
  text: string;
};

export type PullRequestWebhookPayload = {
  action: string;
  installation: { id: number };
  repository: { full_name: string };
  pull_request: {
    number: number;
    title: string;
    user: { login: string } | null;
    head: { sha: string };
    base: { ref: string };
  };
};
