import { Html } from "@elysiajs/html"
import { SignInForm } from "../../components/forms"

export const SignIn = () => {
  const error = {
    email: undefined,
    password: undefined,
    others: undefined,
  }
  return (
    <div class="flex flex-col items-center justify-center h-screen">
      <SignInForm error={error}/>
    </div>
  )
}