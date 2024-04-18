import type { NextRequest } from "next/server";
import  { NextResponse } from "next/server";

import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

import api from "@/api";

import { auth } from "@/auth";


export default NextAuth(authConfig).auth;

export async function middleware(request: NextRequest, response : NextResponse) {
  const path = request.nextUrl.pathname.slice(
    1,
    request.nextUrl.pathname.length
  );
  const userExist = await searchProfile(path);
  const session = await auth();

  console.log(session?.user);

  if (session?.user !== undefined && request.nextUrl.pathname === "/") return Response.redirect(`http://localhost:3000/${session.user.name}`)

  if (
    typeof userExist === "undefined" &&
    request.nextUrl.pathname !== "/" &&
    request.nextUrl.pathname !== "/about"
  ) {
    return Response.error();
  }
}

async function searchProfile(username: string) {
  const userExist = await (
    await api.user.list()
  ).find((x) => x.username == username);

  return userExist;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
