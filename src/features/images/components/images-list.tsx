import { DataTable } from "@/features/common/components/data-table";
import { utapi } from "@/server/uploadthing";
import { TImage } from "@/types";

import { columns } from "./image-columns";

export const ImagesList = async () => {
  const { files } = await utapi.listFiles();

  return (
    <DataTable columns={columns} data={files as unknown as Array<TImage>} />
  );
};
