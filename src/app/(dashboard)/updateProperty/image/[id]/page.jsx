"use client";
import ImageUpload from "@/components/propertyForm/UploadImage";
import { useParams } from "next/navigation";
export default function Image() {
  const param = useParams();
  const propertyId = param.id;
  return (
    <div className="flex justify-center">
      <ImageUpload propertyId={propertyId} />
    </div>
  );
}
