"use client";
import { config } from "@/config";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useSearchParams, useRouter } from "next/navigation";
import MyPagination from "./MyPagination";
import PropertyListTable from "./PropertyListTable";
import { fetchListByProps } from "./fetchListByProps.js";
import Error from "./Error.jsx";
export default function PropertyList() {
  const [propertyList, setPropertyList] = useState([]);
  const router = useRouter();
  const [town, setTown] = useState("");
  const [pageNum, setPageNum] = useState(1);
  const [propertyType, setPropertyType] = useState("all");
  const [totalRecords, setTotalRecords] = useState(0);
  const lastPageNum = Math.ceil(totalRecords / 10);
  const [error, setError] = useState("");
  // get the page number from the query string, and set it to pageNum when URL changes
  const searchParams = useSearchParams();
  const searchProperty = async () => {
    try {
      let data = await fetchListByProps({
        town: town,
        page: pageNum,
        propertyType: propertyType,
      });
      console.log(data);
      setPropertyList(data.properties);
      setTotalRecords(data.totalRecords);
      setError("");
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  useEffect(() => {
    const page = searchParams.get("page");
    if (page) {
      setPageNum(parseInt(page));
    }
    searchProperty();
  }, [searchParams, propertyType]);
  useEffect(() => {
    searchProperty();
  }, []);

  return (
    <div className="max-w-screen-lg container mx-auto">
      {/* search bar */}
      <div className="flex justify-between items-center my-5">
        <form
          className="flex justify-between"
          onSubmit={(e) => {
            e.preventDefault();
            searchProperty();
          }}
        >
          <Input
            type="text"
            name="town"
            placeholder="Search Town"
            className="mr-5 text-2xl"
            value={town}
            onChange={(e) => setTown(e.target.value)}
          ></Input>
          <Button type="submit">Search</Button>
        </form>
        <div className="flex justify-end space-x-5">
          <Button
            onClick={() => setPropertyType("rental")}
            className={
              propertyType === "rental" ? "bg-gray-800" : "bg-gray-300"
            }
          >
            Rent
          </Button>
          <Button
            onClick={() => setPropertyType("sale")}
            className={propertyType === "sale" ? "bg-gray-800" : "bg-gray-300"}
          >
            Sale
          </Button>
          <Button
            onClick={() => setPropertyType("all")}
            className={propertyType === "all" ? "bg-gray-800" : "bg-gray-300"}
          >
            All
          </Button>
        </div>
      </div>
      {!error && <PropertyListTable propertyList={propertyList} />}
      {error && <Error message={error} />}
      <MyPagination
        pageNum={pageNum}
        lastPageNum={lastPageNum}
        router={router}
      />
    </div>
  );
}
