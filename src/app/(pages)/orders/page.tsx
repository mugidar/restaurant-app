"use client";
import { Order } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import EditIcon from "@mui/icons-material/Edit";
import toast from "react-hot-toast";
const OrdersPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/");
  }
  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      fetch("https://restaurant-app.vercel.app:3000/api/orders").then((res) => res.json())
  });
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) => {
      return fetch(`https://restaurant-app.vercel.app/api/orders/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(status)
      });
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      toast.success("Edited!");
    }
  });

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;
    const status = input.value;
    mutation.mutate({ id, status });
    input.value = "";
  };
  if (isLoading || status === "loading") return "Loading...";

  return (
    <div className="container">
      {session?.user.isAdmin && <h1> ADMIN VIEW</h1>}
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
              <tr
                className={
                  order.status === "Done" ? "bg-green-400/50" : "bg-red-400"
                }
                key={order.id}
              >
                <td className="hidden lg:block">{order.id}</td>
                <td className="">
                  {" "}
                  {new Intl.DateTimeFormat("en-GB", {
                    dateStyle: "short",
                    timeStyle: "short"
                  }).format(new Date(order.createdAt))}
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
                {session?.user.isAdmin ? (
                  <td className="text-black">
                    <form
                      onSubmit={(e) => handleUpdate(e, order.id)}
                      className="flex items-center"
                    >
                      <input type="text" placeholder={order.status} />
                      <button>
                        <EditIcon />
                      </button>
                    </form>
                  </td>
                ) : (
                  <td className="">{order.status}</td>
                )}
                <td className="">{order.userEmail}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
