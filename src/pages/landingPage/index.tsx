import Elysia from "elysia";
import { Html } from "@elysiajs/html";
import BaseHtml from "@/components/common/base";
import LandingPage from "./components/landing-page";
import { Navbar } from "@/components/common/navbar";

export const landingPage = new Elysia()
.get('/', () => (
  <BaseHtml>
  <>
    <Navbar />
    <LandingPage />
  </>
  </BaseHtml>
))