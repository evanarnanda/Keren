import { Html } from "@elysiajs/html";
import Elysia from "elysia";

export const signInRouter = new Elysia({prefix: '/signin'})
.get('/', () => (
  <div>
    Sign In
  </div>
))