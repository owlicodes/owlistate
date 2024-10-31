"use client";

import { useRouter } from "next/navigation";

import { useToast } from "@/hooks/use-toast";
import { UploadButton } from "@/lib/uploadthing";

export const UploadImageButton = () => {
  const { toast } = useToast();
  const router = useRouter();

  return (
    <div className="mb-4 w-fit">
      <UploadButton
        className="self-start ut-button:bg-primary ut-button:hover:bg-primary/90"
        endpoint="imageUploader"
        onClientUploadComplete={() => {
          toast({
            title: "Image Upload",
            description: "Image successfully uploaded.",
          });

          router.refresh();
        }}
        onUploadError={(error: Error) => {
          toast({
            title: "Image Upload",
            description: error.message,
            variant: "destructive",
          });
        }}
      />
    </div>
  );
};
