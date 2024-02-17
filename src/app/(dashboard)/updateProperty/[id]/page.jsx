"use client";
import { useParams } from "next/navigation";
// AddProperty.jsx or wherever your main component is
import PropertyForm from "@/components/propertyForm/PropertyForm";

// Main component logic remains mostly unchanged, just replace the reused UI parts
// with the new components you've created, like <FormSelect />, <FormInput />, and <ImageUpload />

export default function UpdateProperty() {
  const param = useParams();
  const propertyId = param.id;
  return <PropertyForm propertyId={propertyId} />;
}
