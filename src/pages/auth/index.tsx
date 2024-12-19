import Elysia from "elysia";
import { signInRouter } from "./signIn";
import { signUpRouter } from "./signUp";

export const authRouter = new Elysia({prefix: '/auth'})
.use(signInRouter)
.use(signUpRouter)