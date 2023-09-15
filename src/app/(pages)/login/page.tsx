"use client";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const { status } = useSession();
  const router = useRouter()

  if(status === "loading") return <h1>Loading...</h1>

  if(status === "authenticated") router.push("/")

  return (
    <div className="h-[100vh] p-5">
      <div className="container h-[calc(100vh-150px)]">
        <div className="flex h-full items-center ">
          <div
            className="hidden lg:block flex-1  h-[70vh] z-10 bg-slate-400"
            style={{
              boxShadow: "0 0 10px 5px black ",
              backgroundImage:
                "url(https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
            }}
          ></div>

          <div className="
          flex flex-col flex-1 items-center justify-center text-center  h-full
          p-5
          text-black bg-slate-200
          lg:items-start lg:text-start  lg:justify-start lg:h-[60vh]
          ">
            <h1 className="text-4xl font-bold">Welcome</h1>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ab?
              Lorem ipsum dolor sit amet.
            </p>

            <button onClick={() => signIn("google")} className="border flex items-center gap-x-2  w-[70%] mt-7 border-black/20 p-3">
              <GoogleIcon /> Sign in with Google
            </button>
            <button onClick={() => signIn("facebook")} className="border  flex items-center gap-x-2 w-[70%] mt-5 border-black/20 p-3">
              <FacebookIcon /> Sign in with Facebook
            </button>
            <em className="mt-8">
              Have a problem? <u>Contact us</u>
            </em>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
