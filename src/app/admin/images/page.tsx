import { PageHeader } from "@/features/common/components/page-header";
import { ImagesList } from "@/features/images/components/images-list";
import { UploadImageButton } from "@/features/images/components/upload-image-button";

export default function AdminImagesPage() {
  return (
    <div>
      <PageHeader title="Images Management" />

      <UploadImageButton />
      <ImagesList />
    </div>
  );
}
