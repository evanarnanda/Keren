import { Html } from "@elysiajs/html"

export const Navbar = () => {
  return (
    <div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="flex-none gap-2">
    <div class="form-control">
      <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
    </div>
    <a class='btn btn-primary' href="/signup">Getting Started</a>
  </div>
</div>
  )
}