import { headers } from "next/headers";
import { NextResponse } from "next/server";

import { auth } from "@/lib/auth";
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
