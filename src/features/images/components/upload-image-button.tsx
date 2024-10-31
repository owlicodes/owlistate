"use client";

import { UploadButton } from "@/lib/uploadthing";

export const UploadImageButton = () => {
  return (
    <div className="mb-4 w-fit">
      <UploadButton
        className="self-start ut-button:bg-primary ut-button:hover:bg-primary/90"
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
};
