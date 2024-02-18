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
      console.log(data)
      if (response.ok) {
        setPropertylists(data);
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

  return (
    <div className="">
      <div className="main-container  w-full  bg-[#fff]  overflow-hidden mx-auto my-0 ">
        {role == "owner" && (
          <table className="">
            {propertylists?.map((propertylist) => (
              <tbody >
                <tr
                  className="flex justify-center border"

                >
                  <table className=" w-1/2  bg-white rounded-[20px] shadow mt-[10px]  z-10">
                    <tr className="border">
                      <td rowSpan="2" className=" border w-1/2">
                        <img
                          className="h-full"
                          src={propertylist.imageUrl}
                          alt="placeholder"
                        />
                      </td>

                      <td className="text-stone-950 text-base font-medium font-['SF UI Display'] whitespace-normal">
                        <div className="flex justify-center items-center">
                          {propertylist.town}
                          {propertylist.streetName}
                        </div>
                      </td>
                    </tr>

                    <tr className="border">
                      <td className="text-neutral-400  text-sm font-medium font-['SF UI Display']">
                        <div className="flex justify-center items-center">
                          {propertylist.propertyStatus}
                          <div>{propertylist.price}</div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="flex justify-center">
                          <Button
                            onClick={() => deleteProperty(propertylist.id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </td>
                      <td>
                        <div className="flex justify-center">
                          <Button
                            onClick={() =>
                              handleClick(
                                propertylist.id,
                                propertylist.propertyStatus,
                              )
                            }
                          >
                            Update
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </table>
                </tr>
              </tbody>
            ))}
          </table>
        )}

        {role != "owner" && (
          <>
            <div className="font-['Inter'] md:text-[25px] sm:text-[12.5px] font-semibold leading-[38px] text-[#000]">
              You don not have the permission.
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PropertyList;
