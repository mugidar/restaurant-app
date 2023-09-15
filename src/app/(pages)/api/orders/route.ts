import { getServerSession } from "next-auth";
import { getAuthSession } from "../../../../../utils/auth";
import { prisma } from "./../../../../../utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  const session = await getAuthSession();
  console.log(session)
  if (session) {
    try {
      if (session.user.isAdmin) {
        const orders = await prisma.order.findMany({
          orderBy: {
            createdAt: "asc",
          }
        });
        return new NextResponse(JSON.stringify(orders), { status: 200 });
      }
      const orders = await prisma.order.findMany({
        where: {
          userEmail: session.user.email!
        }
      });
      return new NextResponse(JSON.stringify(orders), { status: 200 });
    } catch (error) {}
  } else {
    return new NextResponse(JSON.stringify({ message: "Not authed" }), {
      status: 200
    });
  }
};

export const POST = async () => {
  return new NextResponse(JSON.stringify({ name: "Victor" }), { status: 200 });
};
