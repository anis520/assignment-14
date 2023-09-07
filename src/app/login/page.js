"use client";
import Image from "next/image";
import { MdAccountBox, MdOutlineAccountCircle } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Login() {
  const [object, setobject] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        body: JSON.stringify({
          email: object.email,
          password: object.password,
        }),
      });

      if (!res.ok) {
        toast("Login faild");
        console.log("login faild");
      }
      let data = await res.json();
      toast(data.message);
      console.log(data);
      if (data["status"] == true) {
        router.replace("/");
      }
    } catch (error) {
      toast(error.message);
    }
  };

  const handleobject = (e) => {
    setobject((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="h-screen m-5 space-y-3 flex flex-col justify-start  items-center">
      <p className="text-2xl font-semibold p-2    cursor-pointer hover:bg-slate-600 w-fit duration-200 rounded-md ">
        Login page
      </p>

      <div className="bg-slate-200 md:w-4/12 p-10 rounded-2xl ">
        <div className="w-20 h-20 rounded-full bg-slate-400 mx-auto flex items-center justify-center">
          <MdOutlineAccountCircle className="rounded-full text-7xl" />
        </div>
        <div className="text-gray-800 font-semibold text-xl py-4 space-y-3">
          <p>Email --</p>
          <input
            value={object.email}
            name="email"
            onChange={handleobject}
            type="text"
            className="w-full p-1 rounded-md "
          />
          <p>Password --</p>
          <input
            value={object.password}
            name="password"
            onChange={handleobject}
            type="password"
            className="w-full p-1 rounded-md "
          />
        </div>

        <p
          onClick={handleLogin}
          className="bg-indigo-500 text-center rounded-md px-2 py-1 font-semibold cursor-pointer"
        >
          Login
        </p>

        <p className="bg-slate-800  my-3 text-center rounded-md px-2 py-1 font-semibold cursor-pointer flex items-center justify-center gap-3">
          <AiFillGithub className="h-6 w-6" /> Login with Github
        </p>
        <Link href="/register">
          <p className="text-indigo-400 font-semibold text-center  cursor-pointer">
            Create an account ?
          </p>
        </Link>
      </div>
    </div>
  );
}
