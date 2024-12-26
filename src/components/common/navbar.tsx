import { Html } from "@elysiajs/html"
import  { userMiddleware } from "@/middlewares/auth"
import { User } from "better-auth/types"
import { SignOutDialog } from "./dialog"

interface NavbarProps {
  user: User | null
}
export const Navbar = ({ user }: NavbarProps ) => {
  return (
    <div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="flex-none gap-2">
  {
    user !== null ? 
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={user.image ? user.image : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
        </div>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a href="/dashboard/candidate">
            Dashboard
          </a>
        </li>
        <div class="divider my-0"></div>
        <li><a onclick="signout_dialog.showModal()">Sign Out</a></li>
      </ul>
    </div> 
    :
    <a href='/auth/signin' class='btn btn-primary'>Login</a>
  } 
  <SignOutDialog />
  </div>
</div>
  )
}