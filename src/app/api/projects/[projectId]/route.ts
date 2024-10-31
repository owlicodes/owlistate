import { headers } from "next/headers";
import { NextResponse } from "next/server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { TUpdateProject } from "@/types";

interface Params {
  params: {
    projectId: string;
  };
}

export async function PATCH(request: Request, { params }: Params) {
  try {
    const { projectId } = params;
    const data = (await request.json()) as TUpdateProject;

    const session = await auth.api.getSession({
      headers: headers(),
    });

    if (session?.user.role !== "admin") {
      return NextResponse.json(
        { message: "User not authorized to perform this action" },
        { status: 401 }
      );
    }

    await prisma.project.update({
      data: {
        ...data,
      },
      where: {
        id: projectId,
      },
    });

    return NextResponse.json({
      message: "Project updated successfully",
    });
  } catch (error: unknown) {
    console.log("Update project failed: ", error);

    return NextResponse.json(
      { message: "Unable to update project, please see server logs." },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request, { params }: Params) {
  try {
    const { projectId } = params;

    const session = await auth.api.getSession({
      headers: headers(),
    });

    if (session?.user.role !== "admin") {
      return NextResponse.json(
        { message: "User not authorized to perform this action" },
        { status: 401 }
      );
    }

    await prisma.project.delete({
      where: {
        id: projectId,
      },
    });

    return NextResponse.json({
      message: "Project deleted successfully",
    });
  } catch (error: unknown) {
    console.log("Delete project failed: ", error);

    return NextResponse.json(
      { message: "Unable to delete project, please see server logs." },
      { status: 500 }
    );
  }
}
