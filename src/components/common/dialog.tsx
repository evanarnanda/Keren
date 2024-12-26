import { Html } from "@elysiajs/html"
import { Spinner } from "./loading/spinner"

function SignOutDialog () {
  return (
    <dialog id="signout_dialog" class="modal">
      <div class="modal-box">
        <h3 class="text-lg font-bold">Are you sure you want to sign out?</h3>
        <p class="py-4">Press sign out to proceed.</p>
        <div class="modal-action">
          <form method="dialog" class='flex space-x-2' hx-post="/api/v1/auth/signout" hx-disabled-elt="find button" hx-indicator="#spinner">
            <button class='btn'>close</button>
            <button class='btn btn-error disabled:opacity-50' >
              <Spinner id="spinner" size={'loading-xs'}/>
              Sign Out
            </button>
          </form>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  )
}

export { SignOutDialog }