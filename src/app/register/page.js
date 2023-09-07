"use client";
import Image from "next/image";
import { MdAccountBox, MdOutlineAccountCircle } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Register() {
  const [object, setobject] = useState({
    username: "",
    email: "",
    password: "",
  });
  const router = useRouter();
  const handleRegister = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        body: JSON.stringify({
          username: object.username,
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
        router.replace("/login");
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
        Rgister page
      </p>
      <ToastContainer />

      <div className="bg-slate-200 md:w-4/12  p-10 rounded-2xl ">
        <div className="w-20 h-20 rounded-full bg-slate-400 mx-auto flex items-center justify-center">
          <MdOutlineAccountCircle className="rounded-full text-7xl" />
        </div>
        <div className="text-gray-800 font-semibold text-xl py-4 space-y-3">
          <p>Username --</p>
          <input
            value={object.username}
            name="username"
            onChange={handleobject}
            type="text"
            className="w-full p-1 rounded-md "
          />
          <p>Eamil --</p>
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
          onClick={handleRegister}
          className="bg-indigo-500 text-center rounded-md px-2 py-1 font-semibold cursor-pointer"
        >
          Register
        </p>

        <p className="bg-slate-800  my-3 text-center rounded-md px-2 py-1 font-semibold cursor-pointer flex items-center justify-center gap-3">
          <AiFillGithub className="h-6 w-6" /> Register with Github
        </p>
        <Link href="/login">
          <p className="text-indigo-400 font-semibold text-center  cursor-pointer">
            Have an account ?
          </p>
        </Link>
      </div>
    </div>
  );
}
