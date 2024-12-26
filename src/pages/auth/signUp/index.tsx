import BaseHtml from "@/components/common/base";
import { Html } from "@elysiajs/html";
import Elysia, { redirect } from "elysia";
import { SignUp } from "./components/sign-up-page";
import { Footer } from "@/components/common/footer";
import { userMiddleware } from "@/middlewares/auth";

export const signUpRouter = new Elysia({prefix: '/signup'})
.derive(({request}) => userMiddleware(request))
.get('/', ({ session }) => {
  if (session) {
    return redirect('/')
  }
  return (
  <BaseHtml>
    <>
      <SignUp />
      <Footer />
    </>
  </BaseHtml>
  )
})