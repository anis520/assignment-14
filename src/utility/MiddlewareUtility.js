import { NextResponse } from "next/server";
import { VerifyToken } from "./JWTHelper";

export async function CheckCookieAuth(req) {
  try {
    let token = req.cookies.get("token");

    let payload = await VerifyToken(token["value"]);
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("email", payload["email"]);

    // console.log(payload["email"]);
    if (!payload) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    return NextResponse.next({ request: { headers: requestHeaders } });
  } catch (error) {
    console.log(error.message);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
