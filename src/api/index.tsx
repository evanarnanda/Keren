import Elysia from "elysia";
import { authRouter } from "./auth";

export const apiRouter = new Elysia({prefix: '/api/v1'})
.use(authRouter)