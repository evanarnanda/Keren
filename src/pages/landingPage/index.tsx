import Elysia from "elysia";
import { Html } from "@elysiajs/html";
import BaseHtml from "@/components/common/base";
import LandingPage from "./components/landing-page";
import { Navbar } from "@/components/common/navbar";
import { userMiddleware } from "@/middlewares/auth";

export const landingPage = new Elysia()
.derive(({request}) => userMiddleware(request))
.get('/', ({ user, session }) => (
  <BaseHtml>
  <>
    <Navbar user={user}/>
    <LandingPage />
  </>
  </BaseHtml>
))