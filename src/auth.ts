import NextAuth, { AuthError } from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import api from "@/api";
import { User } from "./types";

import {db} from "@/db";



export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        id: { label: "id", type: "number" },
        username: { label: "username", type: "text" },
        password: { label: "password", type: "text" },
      },
      async authorize(credentials, error) {

        const userExist = await api.user.getUser(credentials.username);
        const userDB = await db().user.findUnique({where:{username : credentials.username as string}});

        if(!userDB) return false

        if(userDB.password !== credentials.password) return false

        return {
          id: userDB.id,
          name: userDB.username,
          error,
        } as any;
      },
    }),
  ],
});
