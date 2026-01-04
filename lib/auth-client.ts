import { adminClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL,
  plugins: [adminClient()],
});

export const signInGoogle = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
};

export const signInGithub = async () => {
  const data = await authClient.signIn.social({
    provider: "github",
  });
};
