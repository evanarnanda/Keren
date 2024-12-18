import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/utils/database";
import { account, session, user, verification } from "@/database/schemas/auth";
import { env } from "@/env";
export const auth = betterAuth({
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
  emailAndPassword: {  
    enabled: true // If you want to use email and password auth
  },
  socialProviders: {
    /*
    * We're using Google and Github as our social provider, 
    * make sure you have set your environment variables
    */

    google: {
      clientId: env.GOOGLE_CLIENT_ID!,
      clientSecret: env.GOOGLE_CLIENT_SECRET!,
    },
  },
});