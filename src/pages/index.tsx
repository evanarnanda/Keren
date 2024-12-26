import Elysia from "elysia";
import { landingPage } from "@/pages/landingPage";
import { authRouter } from "./auth";

const pageRouter = new Elysia()
.use(authRouter)
.use(landingPage)

export { pageRouter };