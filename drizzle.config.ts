import { defineConfig } from "drizzle-kit";
import { env } from "@/env";
export default defineConfig({
  dialect: "postgresql",
  schema: "./src/database/schemas",
  out: './src/database/migrations',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  verbose: true,
  strict: true,
});