import Elysia from "elysia";
import { signInRouter } from "./signIn";
import { signOutRouter } from "./signOut";

export const authRouter = new Elysia({prefix: '/auth'})
.use(signInRouter)
.use(signOutRouter)