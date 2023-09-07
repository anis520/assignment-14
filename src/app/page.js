"use client";
import Image from "next/image";
import Link from "next/link";

import { MdHome } from "react-icons/md";
import userAvatar from "@/asset/user.webp";
import { toast } from "react-toastify";

export default function Home() {
  const handlelogout = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/login");

      if (!res.ok) {
        toast("Login faild");
        console.log("login faild");
      }
      let data = await res.json();
      toast(data.message);
      console.log(data);
      if (data["status"] == true) {
        router.replace("/login");
      }
    } catch (error) {
      toast(error.message);
    }
  };

  return (
    <div className="h-screen m-5 space-y-3">
      <p className="text-2xl font-semibold p-2 flex gap-3 items-center cursor-pointer hover:bg-slate-600 w-fit duration-200 rounded-md ">
        Home page
        <MdHome />
      </p>

      <div className="bg-slate-200 md:w-4/12 h-3/5 p-10 rounded-2xl ">
        <div className="w-20 h-20 rounded-full bg-slate-400">
          <Image width="400" higth="500" src={userAvatar} />
        </div>
        <div className="text-gray-800 font-semibold text-xl py-4 space-y-3">
          <p>ahisahad520@gmail.com</p>
          <p>Verited : true</p>
        </div>
        <Link href="/login">
          <p className="bg-indigo-400 w-fit rounded-md px-2 py-1 my-4 font-semibold cursor-pointer">
            Login with another account
          </p>
        </Link>

        <p
          onClick={handlelogout}
          className="bg-red-500 w-fit rounded-md px-2 py-1 font-semibold cursor-pointer"
        >
          Logout
        </p>
      </div>
    </div>
  );
}
