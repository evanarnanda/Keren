import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { env } from "@/env";

import * as authSchemas from '@/database/schemas/auth';

const pool = new Pool({
  connectionString: env.DATABASE_URL,
});

export const db = drizzle(pool, {
  logger: true,
  schema: {
    ...authSchemas,
  },
});
 