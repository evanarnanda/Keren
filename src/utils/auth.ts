import { betterAuth } from "better-auth";
import { createAuthClient } from "better-auth/client"
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/utils/database";
import { account, session, user, verification } from "@/database/schemas/auth";
import { env } from "@/env";
export const auth = betterAuth({
  baseURL: env.BASE_URL || "http://localhost:8558",
	secret: env.BETTER_AUTH_SECRET || undefined,
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    /*
    * We're using Google as our social provider, 
    * make sure you have set your environment variables
    */

    google: {
      clientId: env.GOOGLE_CLIENT_ID!,
      clientSecret: env.GOOGLE_CLIENT_SECRET!,
    },
  },
  database: drizzleAdapter(db, { // We're using Drizzle as our database
    provider: "pg",
    /*
    * Map your schema into a better-auth schema
    */
    schema: {
      user,
      session,
      verification,
      account,
    },
}),
});

export const authClient = createAuthClient({
    baseURL: "http://localhost:3000", // the base url of your auth server
})