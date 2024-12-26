import cors from "@elysiajs/cors";
import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";
import betterAuthView from "@/utils/auth/auth-view";
import { pageRouter } from "./pages";
import html from "@elysiajs/html";
import staticPlugin from "@elysiajs/static";
import { logger } from "@bogeychan/elysia-logger";
import { authRouter } from "./pages/auth";
import { apiRouter } from "./api";
import { userInfo, userMiddleware } from "./middlewares/auth";
import { env } from "./env";

const allowedOrigins = env.ALLOWED_ORIGINS?.split(",") || [];

const validateOrigin = (request: Request) => {
	const origin = request.headers.get("origin") || "";
	if (allowedOrigins.includes(origin)) {
		return true;
	}
	return false;
};

const app = new Elysia()
.use(cors({
  origin: validateOrigin,
  allowedHeaders: ["Content-Type", "Authorization"],
  methods: ["POST", "GET", "OPTIONS"],
  exposeHeaders: ["Content-Length"],
  maxAge: 600,
  credentials: true,
}),)
.use(swagger())
.use(html())
.use(staticPlugin())
.use(
  logger()
)
.derive(({request}) => userMiddleware(request))
.all("/api/auth/*", betterAuthView)
.use(apiRouter)
.use(pageRouter)
.get("/hello", () => "Hello Elysia").listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
