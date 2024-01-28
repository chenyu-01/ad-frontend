import React from "react";
import Image from "next/image";

const ContactInfo = ({ avatar, name, title, company }) => {
  return (
<<<<<<< HEAD
    <div className="flex items-center bg-white p-3 shadow rounded-lg" >
=======
    <div
      className="flex items-center bg-white p-3 shadow rounded-lg"
      style={{ width: "450px", height: "103px" }}
    >
>>>>>>> main
      <div className="flex-shrink-0">
        <Image
          src={avatar}
          alt={`${name}'s avatar`}
          width={64}
          height={64}
          className="rounded-full"
        />
      </div>
      <div className="ml-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-500">
          {title} at {company}
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
