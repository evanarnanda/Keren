import Elysia from "elysia";

export const auth = new Elysia({prefix: '/auth'})
.get('/signin', async () => {
  return {
    email: 'evan@example.com',
    password: '123456',
  }
})
.get('/signup', async () => {
  return {
    email: 'evan@example.com',
    password: '123456',
  }
})