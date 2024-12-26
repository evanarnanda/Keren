import { z } from 'zod'

const envSchema = z.object({
  PORT: z.coerce.number().min(1000).default(3000),
  ALLOWED_ORIGINS: z.string().default('http://localhost:3000'),
  BASE_URL: z.string().default('http://localhost:3000'),
  BETTER_AUTH_SECRET: z.string(),
  NODE_ENV: z.enum(
    [
      'development',
      'test',
      'production',
    ]
  ).default('development'),
  DATABASE_URL: z.string().default('postgres://user:password@localhost:5432/your_db'),
  GOOGLE_CLIENT_ID: z.string().default('clientId'),
  GOOGLE_CLIENT_SECRET: z.string().default('clientSecret'),
  MINIO_ACCESS_KEY: z.string().default('idk'),
  MINIO_ACCESS_SECRET_KEY: z.string().default('idk123'),
  BUCKET_NAME: z.string().default('default-bucket'),
  MINIO_PUBLIC_ACCESS_KEY: z.string().default('idk'),
  MINIO_PUBLIC_ACCESS_SECRET_KEY: z.string().default('idk123'),
  PUBLIC_BUCKET_NAME: z.string().default('default-public-bucket'),
})
const envServer = envSchema.safeParse({
  PORT: process.env.PORT,
  BASE_URL: process.env.BASE_URL,
  ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS,
  BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
  NODE_ENV: process.env.NODE_ENV,
  DATABASE_URL: process.env.DATABASE_URL,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  MINIO_ACCESS_KEY: process.env.MINIO_ACCESS_KEY,
  MINIO_ACCESS_SECRET_KEY: process.env.MINIO_ACCESS_SECRET_KEY,
  BUCKET_NAME: process.env.BUCKET_NAME,
  MINIO_PUBLIC_ACCESS_KEY: process.env.MINIO_PUBLIC_ACCESS_KEY,
  MINIO_PUBLIC_ACCESS_SECRET_KEY: process.env.MINIO_PUBLIC_ACCESS_SECRET_KEY,
  PUBLIC_BUCKET_NAME: process.env.PUBLIC_BUCKET_NAME,
});

if (!envServer.success) {
  console.error(envServer.error.issues);
  throw new Error('There is an error with the server environment variables');
}

export const env = envServer.data;