import { Html } from "@elysiajs/html";
import Elysia from "elysia";

export const signOutRouter = new Elysia({prefix: '/signout'})
.get('/', () => (
  <div>
    Sign Out
  </div>
))