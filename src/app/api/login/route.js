import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";

import { createToken } from "@/utility/Createtoken";
import connectDB from "@/config/db";

export async function POST(req, res) {
  connectDB();
  const { email, password } = await req.json();

  //   find user
  const findUser = await User.findOne({ email });
  if (!findUser) {
    return NextResponse.json({ status: false, msg: "user not found" });
  }
  // verify password
  const passverify = await bcrypt.compare(password, findUser.password);
  if (!passverify) {
    return NextResponse.json({ status: false, msg: "Invalid password" });
  }

  // creat token
  const token = await createToken(email);

  return NextResponse.json(
    { data: findUser, status: true },
    {
      status: 200,
      headers: {
        "Set-Cookie": `token=${token};Max-Age=7200;Secure;HttpOnly;Path=/;SameSite=Strict`,
      },
    }
  );
}
export function GET(req, res) {
  console.log("logout");
  cookies().delete("token");

  return NextResponse.json({ message: "logout success", status: true });
}
