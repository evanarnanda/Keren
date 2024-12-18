import cors from "@elysiajs/cors";
import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";
import betterAuthView from "@/utils/auth/auth-view";
import { pageRouter } from "./pages";
import html from "@elysiajs/html";
import staticPlugin from "@elysiajs/static";
import { logger } from "@bogeychan/elysia-logger";
import { authRouter } from "./pages/auth";

const app = new Elysia()
.use(cors())
.use(swagger())
.use(html())
.use(staticPlugin())
.use(
  logger({
    level: "error",
  })
)
.all("/api/auth/*", betterAuthView)
.use(pageRouter)
.use(authRouter)
.get("/hello", () => "Hello Elysia").listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
