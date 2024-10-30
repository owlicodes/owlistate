import { adminClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const client = createAuthClient({
  // eslint-disable-next-line n/no-process-env
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  plugins: [adminClient()],
});
