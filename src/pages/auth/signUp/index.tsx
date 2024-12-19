import BaseHtml from "@/components/common/base";
import { Html } from "@elysiajs/html";
import Elysia from "elysia";
import { SignUp } from "./components/sign-up-page";
import { Footer } from "@/components/common/footer";

export const signUpRouter = new Elysia({prefix: '/signup'})
.get('/', () => (
  <BaseHtml>
  <>
    <SignUp />
  </>
  </BaseHtml>
))