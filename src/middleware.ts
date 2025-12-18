import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(Request: NextRequest) {
  try {
    const token = (await cookies()).get("token")?.value;
    const pathname = Request.nextUrl.pathname;

    const protectedRoutes = [
      "/dashboard",
      "/new-scan",
      "/progress",
      "/subscription",
      "/settings",
    ];

    const isProtected = protectedRoutes.some((route) =>
      pathname.startsWith(route)
    );

    if (isProtected && !token) {
      return NextResponse.redirect(new URL("/auth/login", Request.url));
    }

    NextResponse.next();
  } catch (error) {
    NextResponse.error();
  }
}

export const config = {
  matcher: [
    "/dashboard",
    "/new-scan",
    "/progress",
    "/subscription",
    "/settings",
  ],
};
