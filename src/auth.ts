import NextAuth, { AuthError } from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import api from "@/api";
import { User } from "./types";

import db from "@/db";

async function getUser(username: string) {
  try {
    console.log("!!!!!!!!! getUser pre consulta")
    const user = await db.user.findUnique({
      where: { username: username},
    });
    console.log("!!!!!!!!! getUser post consulta")
    return user; //user or null
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

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
        
        const user: User | undefined = await api.user.getUser(
          credentials.username
        );
        
          console.log("!!!!PRE DB");
        
        //const user = await getUser(credentials.username as string);
        console.log("!!!!!!!!!!!", user);

        if (!user) return false;

        return {
          id: user?.id,
          name: user?.username,
          error,
        } as any;
      },
    }),
  ],
});
