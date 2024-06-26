import { authMiddleware } from "@clerk/nextjs";
import createMiddleware from "next-intl/middleware";


const intlMiddleware =  createMiddleware({
  locales: ["en", "ru"],

  defaultLocale: "ru",
});

export default authMiddleware({
  beforeAuth: (req) => {
    return intlMiddleware(req);
  },

  publicRoutes: ["/:locale", "/:locale/sign-in","/:locale/sign-up"],
  ignoredRoutes: [
    "/:locale/api/webhook/clerk",]
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
