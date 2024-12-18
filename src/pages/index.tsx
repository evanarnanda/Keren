import Elysia from "elysia";
import { landingPage } from "@/pages/landingPage";

const pageRouter = new Elysia()
.use(landingPage)

export { pageRouter };