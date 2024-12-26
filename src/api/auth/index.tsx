import Elysia, { redirect, t } from "elysia";
import { auth, authClient } from "@/utils/auth";
import { APIError } from 'better-auth/api';
import { set, z } from "zod";
import { SignInForm, SignUpForm } from "@/pages/auth/components/forms";
import { Html } from "@elysiajs/html";

const SignUpSchema = {
  body: t.Object({
    email: t.String(),
    password: t.String(),
    confirmPassword: t.String(),
    name: t.String(),
  }),
  detail: {
    tags: ['/v1/auth']
  }
}

const SignInSchema = {
  body: t.Object({
    email: t.String(),
    password: t.String(),
  }),
  detail: {
    tags: ['/v1/auth']
  }
}

export const authRouter = new Elysia({prefix: '/auth'})
.post('/signin', async ({ body, error, set } ) => { 
  
  const signinSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(255),
  })

  const parsed = signinSchema.safeParse(body)

  if (!parsed.success) {
    const inputError = parsed.error.flatten().fieldErrors

    return error(422,
      <SignInForm error={inputError} />
    )
  }

  const { email, password } = parsed.data

  
  try {
    const response = await auth.api.signInEmail({
      body: {
        email: email,
        password: password,
      },
      asResponse: true,
    })

    console.log(response)
    set.headers['HX-Redirect'] = '/'
    set.status = 303
    return response
  }
  catch (errorAuth) {
    if (errorAuth instanceof APIError) {
      if (errorAuth.status !== 'INTERNAL_SERVER_ERROR') {
        console.log(errorAuth.message)

        const inputError = {
          others: [errorAuth.message]
        }
        console.log(inputError)
        return error(422,
          <SignInForm error={inputError} />
        )
      } else {
        console.log(errorAuth.message, errorAuth.status, errorAuth.headers)
        const inputError = {
          others: ['Oops We are really sorry, something went wrong! Try again later!']
        }
        return error(500,
          <SignInForm error={inputError}  />
        )
      }
    }
  }

}, SignInSchema)
.post('/signup', async ({ body, error, set }) => {

  const signupSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(255),
    confirmPassword: z.string().min(8).max(255),
    name: z.string().min(2).max(32),
  }).superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ['confirmPassword']
      });
    }
  });
  const parsed = signupSchema.safeParse(body)

  if (!parsed.success) {
    const inputError = parsed.error.flatten().fieldErrors
    const emailValue = inputError.email ? '' : body.email
    const passwordValue = inputError.password ? '' : body.password
    const nameValue = inputError.name ? '' : body.name
    return error(422,
      <SignUpForm error={inputError} emailValue={emailValue} nameValue={nameValue} passwordValue={passwordValue} />
    )
  }

  const { email, password, name } = parsed.data

  try {
    const response = await auth.api.signUpEmail({
      body: {
        email: email,
        password: password,
        name: name,
        image: 'https://avatars.githubusercontent.com/u/1',
      },
      asResponse: true,
    })
    
    set.headers['HX-Redirect'] = '/'
    set.status = 303
    return response

  } catch (errorAuth) {
    if (errorAuth instanceof APIError) {

      if (errorAuth.status !== 'INTERNAL_SERVER_ERROR') {
        const inputError = {
          others: [errorAuth.message]
        }
        return error(422,
          <SignUpForm error={inputError} emailValue={body.email} passwordValue={body.password} />
        )
      } else {
        console.log(errorAuth.message, errorAuth.status, errorAuth.headers)
        const inputError = {
          others: ['Oops We are really sorry, something went wrong! Try again later!']
        }
        return error(500,
          <SignInForm error={inputError}  />
        )
      }
    }
  }

}, SignUpSchema)
.post('/signout', async ({ error, request, set }) => {
  try {
    const response = await auth.api.signOut({ headers: request.headers, asResponse: true });
    set.headers['HX-Redirect'] = '/'
    set.status = 303
    return response
  } catch (errorAuth) {
    if (errorAuth instanceof APIError) {
      console.log(errorAuth.message)
      set.headers['HX-Redirect'] = '/'
      set.status = 303
    }
  }
})