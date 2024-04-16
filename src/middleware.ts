import type { NextRequest } from "next/server";
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

import api from "@/api";

export default NextAuth(authConfig).auth;

export async function middleware(request : NextRequest) {
  const path = request.nextUrl.pathname.slice(1, request.nextUrl.pathname.length);
  const userExist = await searchProfile(path);

  //console.log(userExist);

  if (
    typeof userExist === "undefined" &&
    request.nextUrl.pathname !== "/" &&
    request.nextUrl.pathname !== "/about"
  ) {
    return Response.error()
  }

}

async function searchProfile(username: string) {
  const userExist = await (
    await api.user.list()
  ).find((x) => x.username == username);

  return userExist;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
};
