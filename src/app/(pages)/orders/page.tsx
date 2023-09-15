"use client";
import { Order } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

const OrdersPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/");
  }
  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      fetch("http://localhost:3000/api/orders").then((res) => res.json())
  });
  if (isLoading || status === "loading") return "Loading...";
  return (
    <div className="container">
      <table className="w-full border-separate border-spacing-2">
        <thead>
          <tr>
            <th className="text-start hidden lg:block">Order ID</th>
            <th className="text-start">Date</th>
            <th className="text-start">Price</th>
            <th className="text-start hidden lg:block">Order</th>
            <th className="text-start">Status</th>
            <th className="text-start">User email</th>
          </tr>
        </thead>
        <tbody className="">
          {data?.length > 0 &&
            data.map((order: Order) => (
              <tr className="bg-red-400" key={order.id}>
                <td className="hidden lg:block">{order.id}</td>
                <td className="">
                  {" "}
                  {new Intl.DateTimeFormat('en-GB', { dateStyle: 'short', timeStyle: 'short'}).format(
                    new Date(order.createdAt)
                  )}
                </td>
                <td className="">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                  }).format(order.price)}
                </td>
                <td className="hidden lg:block">
                  {order.products.map((product) => product.title).join(", ")}
                </td>
                <td className="">{order.status}</td>
                <td className="">{order.userEmail}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
