import { PrismaAdapter } from "@next-auth/prisma-adapter";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { env } from "@/src/env.mjs";

import { db } from ".";
/**
 * Module augmentation for `next-auth` types. Allows us to add custom
 * properties to the `session` object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: User;
  }

  // Extending the user type that the client receives when it calls
  // `useSession`.
  interface User {
    id: string;

  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks,
 * etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  // NOTE: This is very noisy, if you are having issues with NextAuth.js, you can uncomment this.
  // debug: env.NODE_ENV === "development",
  secret: env.AUTH_SECRET,
  pages: {
    signIn: "/",
    signOut: "/",
    error: "/",
    // Our core product is on the home page (because I hate to open landing for existing users)
    newUser: "/",
  },
  callbacks: {
    /**
     * This callback is called whenever a session is checked. (Eg.: invoking
     * the /api/session endpoint, using useSession or getSession)

     * ⚠ By default, only a subset (email, name, image) of the token is
     * returned for increased security.

     * If you want to make something available you added to the token through
     * the jwt callback, you have to explicitly forward it here to make it
     * available to the client.
     */
    async session({ session, user }) {
      // TODO: Optimize - maybe we don't need to find the user here?

      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
        },
      };
    },
  },
  adapter: PrismaAdapter(db),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_SECRET_ID,
    }),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider.
     * For example, the GitHub provider requires you to add the
     * `refresh_token_expires_in` field to the Account model. Refer to the
     * NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the
 * `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
