import { headers } from "next/headers";
import { NextResponse } from "next/server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { TCreateUnit } from "@/types";

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as TCreateUnit;

    const session = await auth.api.getSession({
      headers: headers(),
    });

    if (session?.user.role !== "admin") {
      return NextResponse.json(
        { message: "User not authorized to perform this action" },
        { status: 401 }
      );
    }

    await prisma.unit.create({
      data: {
        ...data,
        userId: session.user.id,
      },
    });

    return NextResponse.json({
      message: "Unit created successfully",
    });
  } catch (error: unknown) {
    console.log("Create unit failed: ", error);

    return NextResponse.json(
      { message: "Unable to create unit, please see server logs." },
      { status: 500 }
    );
  }
}
