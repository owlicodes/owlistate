import { headers } from "next/headers";
import { NextResponse } from "next/server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { TUpdateUnit } from "@/types";

interface Params {
  params: {
    unitId: string;
  };
}

export async function GET(request: Request, { params }: Params) {
  try {
    const { unitId } = params;

    const session = await auth.api.getSession({
      headers: headers(),
    });

    if (session?.user.role !== "admin") {
      return NextResponse.json(
        { message: "User not authorized to perform this action" },
        { status: 401 }
      );
    }

    const unit = await prisma.unit.findFirst({
      where: {
        id: unitId,
      },
    });

    return NextResponse.json(unit);
  } catch (error: unknown) {
    console.log("Fetch unit failed: ", error);

    return NextResponse.json(
      { message: "Unable to fetch unit, please see server logs." },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request, { params }: Params) {
  try {
    const { unitId } = params;
    const data = (await request.json()) as TUpdateUnit;

    const session = await auth.api.getSession({
      headers: headers(),
    });

    if (session?.user.role !== "admin") {
      return NextResponse.json(
        { message: "User not authorized to perform this action" },
        { status: 401 }
      );
    }

    await prisma.unit.update({
      data: {
        ...data,
      },
      where: {
        id: unitId,
      },
    });

    return NextResponse.json({
      message: "Unit updated successfully",
    });
  } catch (error: unknown) {
    console.log("Update unit failed: ", error);

    return NextResponse.json(
      { message: "Unable to update unit, please see server logs." },
      { status: 500 }
    );
  }
}
