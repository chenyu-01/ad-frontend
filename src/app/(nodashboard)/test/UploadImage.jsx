"use client";
"use strict";
import { useEffect, useState } from "react";
import { config } from "@/config";
import { Button } from "@/components/ui/button";
const serverUrl = config.serverUrl;
export default function Upload({ propertyId }) {
  const [imagePreview, setImagePreview] = useState(null);
  const [isSelect, setIsSelect] = useState(false);
  propertyId = propertyId || 1;
  const fetchImage = async () => {
    const fetchURL = `${serverUrl}/api/property/details/${propertyId}`;
    const response = await fetch(fetchURL);
    // if response not found, then just return
    if (!response.ok) {
      return;
    }
    const data = await response.json();
    setImagePreview(data.imageUrl);
  };
  const uploadImage = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("image"));
    const uploadURL = `${serverUrl}/api/property/upload/${propertyId}`;
    try {
      const response = await fetch(uploadURL, {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        console.log("Image uploaded successfully");
        const imageUrl = await response.text();
        console.log(imageUrl);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // Function to handle image upload and preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      // Check if the file is an image
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // reader.result contains the base64 encoded image
        setIsSelect(true);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };
  useEffect(() => {
    fetchImage();
  }, []);
  return (
    <form className="container mx-auto p-4" onSubmit={uploadImage}>
      <h1 className="text-xl font-bold mb-4">Upload an Image</h1>
      <input
        type="file"
        name="image"
        onChange={handleImageChange}
        className="file:mr-4 file:py-2 file:px-4
                   file:rounded-full file:border-0
                   file:text-sm file:font-semibold
                   file:bg-violet-50 file:text-violet-700
                   hover:file:bg-violet-100"
      />
      {imagePreview && (
        <div className="mt-4">
          <img
            src={imagePreview}
            alt="Preview"
            className="max-w-xs max-h-xs rounded-md shadow-lg"
          />
        </div>
      )}
      {isSelect && <Button type="submit">Submit</Button>}
    </form>
  );
}
