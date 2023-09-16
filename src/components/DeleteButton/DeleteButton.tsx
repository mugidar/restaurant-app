"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";

const DeleteButton = ({
  productId,
  className
}: {
  id: string;
  className: string;
}) => {
  const { data } = useSession();
  const router = useRouter();
  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: "DELETE"
    });
    if (res.ok) router.push("/");
  };
  if (data?.user.isAdmin)
    return (
      <button
        className={twMerge(
          "px-5 py-2 bg-slate-300 rounded-lg text-black",
          className
        )}
        onClick={() => handleDelete(productId)}
      >
        Delete
      </button>
    );
};

export default DeleteButton;
