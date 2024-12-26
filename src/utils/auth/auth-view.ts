import { Context } from "elysia";
import { auth } from "@/utils/auth";

const betterAuthView = (context: Context) => {
    const BETTER_AUTH_ACCEPT_METHODS = ["POST", "GET"]
    if(BETTER_AUTH_ACCEPT_METHODS.includes(context.request.method)) {
      return auth.handler(context.request);
    }
    else {
      context.error(405, 'SKuyy')
    }
  }

export default betterAuthView;