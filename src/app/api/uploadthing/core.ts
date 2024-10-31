import { headers } from "next/headers";

import { type FileRouter, createUploadthing } from "uploadthing/next-legacy";
import { UploadThingError } from "uploadthing/server";

import { auth } from "@/lib/auth";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(async () => {
      const session = await auth.api.getSession({
        headers: headers(),
      });

      if (!session) throw new UploadThingError("Unauthorized");

      if (session.user.role !== "admin") {
        throw new UploadThingError(
          "You are not authorized to perform this action."
        );
      }

      return { userId: session.user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
      console.log("file url", file.url);

      return { metadata, file };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
