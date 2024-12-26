import { Html } from "@elysiajs/html";
import Elysia, { redirect } from "elysia";
import { SignIn } from "./components/sign-in-page";
import BaseHtml from "@/components/common/base";
import { Footer } from "@/components/common/footer";
import { userMiddleware } from "@/middlewares/auth";

export const signInRouter = new Elysia({prefix: '/signin'})
.derive(({request}) => userMiddleware(request))
.get('/', ({ session }) => {
  if (session) {
    console.log(session)
    return redirect('/')
  }
  return (
  <BaseHtml>
    <>
      <SignIn />
      <Footer />
    </>
  </BaseHtml>
  )
})