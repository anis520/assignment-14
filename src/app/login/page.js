import Image from "next/image";
import { MdAccountBox, MdOutlineAccountCircle } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

export default function Login() {
  return (
    <div className="h-screen m-5 space-y-3 flex flex-col justify-start  items-center">
      <p className="text-2xl font-semibold p-2    cursor-pointer hover:bg-slate-600 w-fit duration-200 rounded-md ">
        Login page
      </p>

      <div className="bg-slate-200 w-4/12 p-10 rounded-2xl ">
        <div className="w-20 h-20 rounded-full bg-slate-400 mx-auto flex items-center justify-center">
          <MdOutlineAccountCircle className="rounded-full text-7xl" />
        </div>
        <div className="text-gray-800 font-semibold text-xl py-4 space-y-3">
          <p>Email --</p>
          <input type="text" className="w-full p-1 rounded-md " />
          <p>Password --</p>
          <input type="password" className="w-full p-1 rounded-md " />
        </div>
        <Link href="/">
          <p className="bg-indigo-500 text-center rounded-md px-2 py-1 font-semibold cursor-pointer">
            Login
          </p>
        </Link>
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
