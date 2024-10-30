import { headers } from "next/headers";
import { NextResponse } from "next/server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { TCreateProject } from "@/types";

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as TCreateProject;

    const session = await auth.api.getSession({
      headers: headers(),
    });

    if (session?.user.role !== "admin") {
      return NextResponse.json(
        { message: "User not authorized to perform this action" },
        { status: 401 }
      );
    }

    await prisma.project.create({
      data: {
        ...data,
        userId: session.user.id,
      },
    });

    return NextResponse.json({
      message: "Project created successfully",
    });
  } catch (error: unknown) {
    console.log("Create project failed: ", error);

    return NextResponse.json(
      { message: "Unable to create project, please see server logs." },
      { status: 500 }
    );
  }
}
