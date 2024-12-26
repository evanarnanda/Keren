import { Session, User } from "better-auth/types";
import { auth } from "@/utils/auth";
import { Context } from "elysia";

export const userMiddleware = async (request: Request) => {
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session) {
    return { success: false, message: "Unauthorized Access: Token is missing", user: null, session: null };
  }
 
  return {
    success: true,
    message: "Success",
    user: session.user,
    session: session.session
  }
}

export const userInfo = (user: User | null, session: Session | null) => {
  return {
    user: user,
    session: session
  }
}