import type { NextRequest } from "next/server";
import  { NextResponse } from "next/server";

import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

import { auth } from "@/auth";

import db from "@/db";

export default NextAuth(authConfig).auth;

export async function middleware(request: NextRequest, response : NextResponse) {
  const path = request.nextUrl.pathname.slice(
    1,
    request.nextUrl.pathname.length
  );
  const userExist = await searchProfile(path);
  const session = await auth();

  //console.log("middleware userExist =>",userExist);
  //console.log("middleware session =>",session);
  
  if (
    userExist === null &&
    session === null &&
    request.nextUrl.pathname !== "/" &&
    request.nextUrl.pathname !== "/about" &&
    request.nextUrl.pathname !== "/auth/singup"
  ) {
    return Response.error();
  }

  if (session?.user !== undefined && request.nextUrl.pathname === "/") return Response.redirect(`http://localhost:3000/${session.user.name}`)

    if (session?.user !== undefined && request.nextUrl.pathname === "/auth/singup") return Response.redirect(`http://localhost:3000/${session.user.name}`)

  
}

async function searchProfile(username: string) {
  const userDB = await db.user.findUnique({where:{username : username}});
  
  return userDB;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
