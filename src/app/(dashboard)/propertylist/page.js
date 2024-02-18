"use client";
import React, { useState, useEffect } from "react";
import { config } from "@/config";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const serverUrl = config.serverUrl;
function PropertyList() {
  const router = useRouter();
  const [propertylists, setPropertylists] = useState([]);
  const [role, setRole] = useState();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  async function fetchRole() {
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  }

  async function fetchPropertylists() {
    setLoading(true);
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
      console.log(data);
      if (response.ok) {
        setPropertylists(data);
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    // the first time the page is loaded, fetch data from API
    fetchRole();
    fetchPropertylists();
  }, [loading]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
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
        router.push("/addproperty");
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
      location.reload();
    } catch (error) {
      window.alert("Failed to deleted property");
      console.error(error.message);
    }
  }
  if (role !== "owner") {
    return (
      <div className="font-inter md:text-2xl sm:text-xl font-semibold leading-9 text-gray-800 dark:text-white text-center">
        You do not have permission.
      </div>
    );
  }
  return (
    <div className="py-8 px-4 md:px-10">
      <div className="max-w-4xl mx-auto overflow-hidden bg-white shadow-lg rounded-lg">
        {role === "owner" && (
          <div>
            {propertylists?.map((propertylist, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <div className="flex flex-col md:flex-row md:items-center">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <tbody className="bg-white dark:bg-gray-800">
                      <tr className="border-b dark:border-gray-700">
                        <td rowSpan="3" className="w-1/2 md:w-1/4 p-4">
                          <img
                            className="w-full h-auto rounded-md"
                            src={propertylist.imageUrl}
                            alt="Property"
                          />
                        </td>
                        <td className="p-4">
                          <div className="text-lg font-medium text-gray-900 dark:text-white">
                            {propertylist.town}, {propertylist.streetName}
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b dark:border-gray-700">
                        <td className="p-4">
                          <div className="text-gray-700 dark:text-gray-400">
                            {propertylist.propertyStatus} - $
                            {propertylist.price}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 flex justify-end space-x-2 items-center">
                          <Button
                            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={() =>
                              handleClick(
                                propertylist.id,
                                propertylist.propertyStatus,
                              )
                            }
                          >
                            Update
                          </Button>
                          <Button
                            className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                            onClick={() => deleteProperty(propertylist.id)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default PropertyList;
