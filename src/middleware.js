import { NextResponse } from "next/server";
import { CheckCookieAuth } from "./utility/MiddlewareUtility";

export async function middleware(req) {
  if (req.nextUrl.pathname.startsWith("/")) {
    console.log("abid");

    // return true;
    return CheckCookieAuth(req);
  }
}
