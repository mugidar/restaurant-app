import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../../utils/connect";
import { getServerSession } from "next-auth";

export const GET = async (
  req: NextRequest,
  {
    params
  }: {
    params: {
      id: string;
    };
  }
) => {
  const { id } = params;

  try {
    const product = await prisma.product.findUnique({
      where: {
        id: id
      }
    });
    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
};

export const DELETE = async (
  req: NextRequest,
  {
    params
  }: {
    params: {
      id: string;
    };
  }
) => {
  const { id } = params;
  const session = await getServerSession();
  if (session?.user.isAdmin) {
    try {
      await prisma.product.delete({
        where: {
          id: id
        }
      });
      return new NextResponse(JSON.stringify({ message: "Success" }), {
        status: 200
      });
    } catch (error) {
      console.log(error);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong" }),
        { status: 500 }
      );
    }
  }else return new NextResponse(JSON.stringify({message: "U r not admin!"}), {status: 500})
};
