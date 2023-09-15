import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../../utils/connect";

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const body = await req.json();
  const { id } = params;
  try {
    await prisma.order.update({
      where: {
        id: id
      },
      data: { status: body }
    });

    return new NextResponse(JSON.stringify({ message: "Order updated!" }), {
      status: 200
    });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
