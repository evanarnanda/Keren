import Elysia from "elysia";
import { auth } from "./auth";

export const apiRouter = new Elysia({prefix: '/api/v1'})
.use(auth)