import { headers } from "next/headers";
import { NextResponse } from "next/server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { utapi } from "@/server/uploadthing";

interface Params {
  params: {
    imageKey: string;
  };
}

export async function DELETE(request: Request, { params }: Params) {
  try {
    const { imageKey } = params;

    const session = await auth.api.getSession({
      headers: headers(),
    });

    if (session?.user.role !== "admin") {
      return NextResponse.json(
        { message: "User not authorized to perform this action" },
        { status: 401 }
      );
    }

    const project = await prisma.project.findFirst({
      where: {
        imageKey,
      },
    });

    if (project) {
      return NextResponse.json(
        {
          message:
            "A project is using this image, please update the project first before deleting this image.",
        },
        { status: 400 }
      );
    }

    await utapi.deleteFiles(imageKey);

    return NextResponse.json({
      message: "Image deleted successfully",
    });
  } catch (error: unknown) {
    console.log("Delete image failed: ", error);

    return NextResponse.json(
      { message: "Unable to delete image, please see server logs." },
      { status: 500 }
    );
  }
}
