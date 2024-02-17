"use client";
import React, { useState, useEffect } from "react";
import { config } from "@/config";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const serverUrl = config.serverUrl;
function PropertyList() {
  const router = useRouter();
  const [propertylists, setPropertylists] = useState([]);
  const [role, setRole] = useState();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  async function fetchRole() {
    try {
      let fetchurl = serverUrl + "/api/usersetting/getRole";
      let response = await fetch(fetchurl, {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
        },
      });
      let data = await response.json();
      if (response.ok) {
        setRole(data.role);
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  async function fetchPropertylists() {
    try {
      let fetchurl = serverUrl + "/api/usersetting/getPropertyList";
      let response = await fetch(fetchurl, {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
        },
      });
      let data = await response.json();
      if (response.ok) {
        setPropertylists((prevPropertylists) => [
          ...prevPropertylists,
          ...data,
        ]);
      }
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    // the first time the page is loaded, fetch data from API
    fetchRole();
    fetchPropertylists();
  }, [page]);

  useEffect(() => {
    // Listen for scroll events and call handleScroll when we detect one
    window.addEventListener("scroll", handleScroll);
    return () => {
      // clean up the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    // check if we are at the bottom of the scorll, add more data
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      !loading
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleClick = async (id, propertyStatus) => {
    try {
      let fetchurl =
        serverUrl +
        "/api/usersetting/savePropertyInfo/" +
        id +
        "&" +
        propertyStatus;
      let response = await fetch(fetchurl, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        window.alert("Ready to update property");
        router.push("/updateProperty/" + id);
      } else {
        window.alert("failed to update property");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  async function deleteProperty(propertyid) {
    // fetch data from API
    try {
      // ... fetch data from API ...
      let fetchurl = serverUrl + "/api/usersetting/delProperty/" + propertyid;
      let response = await fetch(fetchurl, {
        method: "DELETE",
        credentials: "include",
        headers: {
          Accept: "application/json",
        },
      });
      let data = await response.json();
      if (response.ok) console.log(data);
      window.alert("Deleted property");
      await fetchPropertylists();
      router.refresh();
    } catch (error) {
      window.alert("Failed to deleted property");
      console.error(error.message);
    }
  }

  return (
    <div className="main-container w-full bg-[#fff] overflow-auto mx-auto my-0 h-[70vh]">
      {role === "owner" && (
        <div className="flex flex-col items-center">
          {propertylists.map((propertylist, index) => (
            <div
              key={index}
              className="flex flex-col w-full max-w-md bg-white rounded-[20px] shadow mt-[10px] p-4"
            >
              <div className="border-b">
                <Image
                  loading="lazy"
                  width={400}
                  height={200}
                  className=" rounded-t-[20px] w-full h-36 object-cover"
                  src={propertylist.imageUrl}
                  alt="Property"
                />
              </div>
              <div className="p-4">
                <div className="text-stone-950 text-base font-medium">
                  {propertylist.town}, {propertylist.streetName}
                </div>
                <div className="text-neutral-700 text-sm">
                  {`Price: $${propertylist.price}`}
                </div>
              </div>
              <div className="flex justify-around p-2">
                <Button onClick={() => deleteProperty(propertylist.id)}>
                  Delete
                </Button>
                <Button
                  onClick={() =>
                    handleClick(propertylist.id, propertylist.propertyStatus)
                  }
                >
                  Update
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {role !== "owner" && (
        <div className="text-center font-semibold text-lg">
          You do not have the permission.
        </div>
      )}
    </div>
  );
}

export default PropertyList;
