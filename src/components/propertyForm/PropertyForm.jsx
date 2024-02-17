"use client";
import React, { useState, useEffect } from "react";
import { config } from "@/config";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/propertyForm/FormInput";
import FormSelect from "@/components/propertyForm/FormSelect";
import { useContext } from "react";
import { AuthContext } from "@/app/(dashboard)/AuthProvider";
import Link from "next/link";
const serverUrl = config.serverUrl;

function PropertyForm({ propertyId }) {
  const [property, setProperty] = useState({
    id: propertyId,
    town: "",
    propertyStatus: "",
    flatType: "",
    storeyRange: "",
    streetName: "",
    floorArea: "",
    price: "",
    contractMonthPeriod: "",
    block: "",
    leaseCommenceDate: "",
    flatModel: "",
    ownerid: "",
    imageUrl: "",
  });

  const { userData } = useContext(AuthContext);
  const role = userData?.role;

  async function fetchProperty() {
    try {
      let fetchurl = serverUrl + "/api/property/details/" + propertyId;
      let response = await fetch(fetchurl, {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
        },
      });
      let data = await response.json();
      if (response.ok) {
        setProperty((prevData) => {
          const newData = { ...prevData, ...data };
          console.log(newData);
          return newData;
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  const handleSave = async (e) => {
    e.preventDefault();
    let formData = e.currentTarget;
    let property = new FormData(formData);
    property = Object.fromEntries(property.entries());
    property.id = propertyId;
    console.log(property);
    try {
      let fetchurl = serverUrl + "/api/usersetting/saveProperty";
      let response = await fetch(fetchurl, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(property),
      });
      console.log(JSON.stringify(property));
      console.log(response);
      if (response.ok) {
        window.alert("save success");
      } else {
        window.alert("save failed");
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchProperty();
  }, []);

  if (role !== "owner") {
    return (
      <div className="container flex flex-col items-center w-full overflow-hidden mx-auto my-0">
        <div className="md:text-[25px] sm:text-[12.5px] font-semibold leading-[38px]">
          You do not have the permission.
        </div>
      </div>
    );
  }

  return (
    <div className="container w-full flex flex-col items-center mx-auto mt-5 overflow-y-auto">
      <div className="w-full top-0 left-0">
        <form
          className=" flex flex-col items-center w-full space-y-4"
          onSubmit={handleSave}
        >
          <div className=" md:text-3xl font-semibold  text-center">
            Update Property
          </div>

          <FormSelect
            name="propertyStatus"
            value={property.propertyStatus}
            label="Status"
          />

          <FormSelect name="town" value={property.town} label="Town" />

          <FormSelect
            name="flatType"
            value={property.flatType}
            label="FlatType"
          />

          <FormSelect
            name="flatModel"
            value={property.flatModel}
            label="FlatModel"
          />

          <FormInput
            name="storeyRange"
            value={property.storeyRange}
            label="StoryRange"
          />

          <FormInput
            name="streetName"
            value={property.streetName}
            label="StreetName"
          />

          <FormInput
            type="number"
            name="floorArea"
            value={property.floorArea}
            label="FloorArea"
          />

          <FormInput name="block" value={property.block} label="Block" />

          <FormInput
            type="number"
            name="price"
            value={property.price}
            label="Price"
          />

          {/* Conditional rendering for LeaseCommenceDate and ContractMonthPeriod based on propertyStatus */}
          {property.propertyStatus === "forRent" && (
            <FormInput
              name="contractMonthPeriod"
              value={property.contractMonthPeriod}
              label="ContractMonthPeriod"
            />
          )}
          {property.propertyStatus === "forSale" && (
            <FormInput
              name="leaseCommenceDate"
              type="date"
              value={property.leaseCommenceDate}
              label="LeaseCommenceDate"
            />
          )}
          <div className="container space-y-5">
            {propertyId && (
              <Link href={`/updateProperty/image/${propertyId}`}>
                <Button className="w-full"> Update Image </Button>
              </Link>
            )}
            <Button className="w-full">
              <input type="submit" value="Save" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PropertyForm;
