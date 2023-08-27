"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const UserLinks = () => {
  const { status } = useSession();

  status === "loading" && <h1>Loading</h1>;
  const session = useSession();
  const userName = session?.data?.user?.name
  const displayName = userName?.split(" ")[0]
  return (
    <div>
      {status === "authenticated" ? (
        <span className="flex gap-2">
          <Link href={"/orders"}>Orders</Link>
          <span>
            <u className="mr-1">{displayName},</u>
            <button className="text-sm" onClick={() => signOut()}>Logout</button>
          </span>
        </span>
      ) : (
        <Link href={"/login"}>Login</Link>
      )}
    </div>
  );
};

export default UserLinks;
