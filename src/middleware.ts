import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { notFound } from 'next/navigation';
import api from "@/api";

export async function middleware(request: NextRequest) {
  /*
  const currentUser = request.cookies.get("session")?.value;

  if (currentUser && !request.nextUrl.pathname.startsWith("/dashboard")) {
    return Response.redirect(new URL("/dashboard", request.url));
  }

  if (!currentUser && request.nextUrl.pathname.startsWith("/dashboard")) {
    return Response.redirect(new URL("/", request.url));
  */
  const path = request.nextUrl.pathname.slice(
    1,
    request.nextUrl.pathname.length
  );

  const userExist = await searchProfile(path);
  
  console.log(userExist)

  if (typeof userExist === "undefined" && request.nextUrl.pathname !== "/" && request.nextUrl.pathname !== "/about") {
    console.log('NO EXISTE')
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
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
};
