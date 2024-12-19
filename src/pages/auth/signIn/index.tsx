import { Html } from "@elysiajs/html";
import Elysia from "elysia";
import { SignIn } from "./components/sign-in-page";
import BaseHtml from "@/components/common/base";
import { Footer } from "@/components/common/footer";

export const signInRouter = new Elysia({prefix: '/signin'})
.get('/', () => (
  <BaseHtml>
  <>
    <SignIn />
    <Footer />
  </>
  </BaseHtml>
))