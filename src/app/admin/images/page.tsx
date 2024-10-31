import { PageHeader } from "@/features/common/components/page-header";
import { ImagesList } from "@/features/images/components/images-list";

export default function AdminImagesPage() {
  return (
    <div>
      <PageHeader title="Images Management" />

      <ImagesList />
    </div>
  );
}
