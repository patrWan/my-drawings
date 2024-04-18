import NextAuth, { AuthError } from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import api from "@/api";
import { User } from "./types";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "text" },
      },
      async authorize(credentials, error) {
        //console.log(credentials);

        const userExist: User | undefined = await api.user.getUser(
          credentials.username
        );

        if (!userExist) return false;

        return {
          id: userExist?.id,
          name: userExist?.username,
          error,
        } as any;
      },
    }),
  ],
});