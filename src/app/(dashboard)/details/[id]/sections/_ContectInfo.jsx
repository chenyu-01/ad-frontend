import { config } from "@/config";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const ContactInfo = ({ owner }) => {
  const [ownerInfo, setOwnerInfo] = useState({
    name: "",
    title: "",
    company: "",
  });
  const avatar = "/details/man.png";
  const serverUrl = config.serverUrl;
  useEffect(() => {
    const fetchOwnerInfo = async () => {
      try {
        const response = await fetch(serverUrl + `/api/owner/${owner}`);
        if (!response.ok) {
          throw new Error("Failed to fetch owner info");
        }
        const data = await response.json();
        setOwnerInfo({
          name: data.name,
          contactNumber: data.contactNumber,
          email: data.email,
        });
      } catch (error) {
        console.error("Error fetching owner's info:", error);
      }
    };

    if (owner) {
      fetchOwnerInfo();
    }
  }, [owner]);

  return (
    <div className="flex items-center bg-white p-3 shadow rounded-lg">
      <div className="flex-shrink-0">
        <Image
          src={avatar}
          alt={`${ownerInfo.name}'s avatar`}
          width={64}
          height={64}
          className="rounded-full"
        />
      </div>
      <div className="ml-4">
        <h2 className="text-lg font-semibold">{ownerInfo.name}</h2>
        <p className="text-sm text-gray-500">
          {ownerInfo.contactNumber} at {ownerInfo.email}
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
