import connectDB from "@/config/db";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
export function GET(req, res) {
  connectDB();
  console.log("done");
  return NextResponse.json({ msg: "fo" });
}
export async function POST(req, res) {
  try {
    connectDB();
    const { username, email, password } = await req.json();
    console.log(username, email, password);
    const hash = await bcrypt.hash(password, 10);
    const createData = await User.create({ username, email, password: hash });
    return NextResponse.json(
      {
        msg: "User register successfull",
        data: createData,
        status: true,
      },
      { status: 202 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        msg: error.message,
      },
      { status: 500 }
    );
  }
}
