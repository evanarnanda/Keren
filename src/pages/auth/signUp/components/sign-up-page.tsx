import { Html } from "@elysiajs/html"
import { SignUpForm } from "../../components/forms"

export const SignUp = () => {
  const error = {
    email: undefined,
    password: undefined,
    confirmPassword: undefined,
  }
  return (
    <div class="flex flex-col items-center justify-center h-screen">
      <SignUpForm error={error}/>
    </div>
  )
}