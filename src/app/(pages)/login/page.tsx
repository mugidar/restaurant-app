"use client";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

const page = () => {
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

          <div className="flex items-center text-center lg:items-start lg:text-start flex-col pl-16 pt-16 pr-5  flex-1 h-[60vh] text-black bg-slate-200">
            <h1 className="text-4xl font-bold">Welcome</h1>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ab?
              Lorem ipsum dolor sit amet.
            </p>

            <div className="border flex items-center gap-x-2  w-[70%] mt-7 border-black/20 p-3">
              <GoogleIcon /> Sign in with Google
            </div>
            <div className="border  flex items-center gap-x-2 w-[70%] mt-5 border-black/20 p-3">
              <FacebookIcon /> Sign in with Facebook
            </div>
            <em className="mt-8">
              Have a problem? <u>Contact us</u>
            </em>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
