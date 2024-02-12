"use client";
import React, { useState, useEffect } from "react";
import { config } from "@/config";
import { useRouter } from "next/navigation";

const serverUrl = config.serverUrl;

function PropertyList() {
    const router = useRouter();
    const [propertylists, setPropertylists] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchPropertylists() {
        try {
            setLoading(true);
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
                console.log(data);
                setPropertylists((prevPropertylists) => [...prevPropertylists, ...data]);
            }
        } catch (error) {
            console.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPropertylists();
    }, []);

    useEffect(() => {
        function handleScroll() {
            if (
                window.innerHeight + document.documentElement.scrollTop >=
                document.documentElement.offsetHeight - 200 // Adjust this value as needed
            ) {
                fetchPropertylists();
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = async (id, propertyStatus) => {
        // Your handleClick function code
    };

    return (
        <div className="">
            <div className="main-container flex flex-col items-center w-full bg-[#fff] overflow-hidden mx-auto my-0">
                {propertylists.map((propertylist) => (
                    <button key={propertylist.id} onClick={() => handleClick(propertylist.id, propertylist.propertyStatus)}>
                        <div key={propertylist.id} className="w-[318px] h-[122px] bg-white rounded-[20px] shadow mt-[10px]">
                            <img className="" src="pixel-city-1.png" alt="placeholder" />
                            <div className="text-stone-950 text-base font-medium font-['SF UI Display'] whitespace-normal">
                                {propertylist.town}
                                {propertylist.streetName}
                            </div>
                            <div className="text-neutral-400 text-sm font-medium font-['SF UI Display']">
                                {propertylist.propertyStatus}
                                <div>{propertylist.price}</div>
                            </div>
                        </div>
                    </button>
                ))}
                {loading && <div>Loading...</div>}
            </div>
        </div>
    );
}

export default PropertyList;
