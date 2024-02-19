"use client";
import { Input } from "@/components/ui/input";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useSearchParams, useRouter } from "next/navigation";
import MyPagination from "./MyPagination";
import PropertyListTable from "./PropertyListTable";
import { fetchListByProps } from "./fetchListByProps.js";
import Error from "../../../components/ui/Error.jsx";
import SearchDialogue from "@/app/(dashboard)/property-list/advanced/SearchDialog";
import { useCallback } from "react";
import Image from "next/image";
import { set } from "date-fns";
export default function PropertyList() {
  const [propertyList, setPropertyList] = useState([]);
  const router = useRouter();
  let [town, setTown] = useState("");
  let [page, setPage] = useState(1);
  let [propertyType, setPropertyType] = useState("all");
  const [totalRecords, setTotalRecords] = useState(0);
  const lastPageNum = Math.ceil(totalRecords / 10);
  const [error, setError] = useState("");
  const dialog = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  // get the page number from the query string, and set it to pageNum when URL changes
  const searchParams = useSearchParams();
  const searchProperty = useCallback(
    async ({ ...dataParams } = {}) => {
      setIsLoading(true);
      try {
        let data = await fetchListByProps({
          page,
          town,
          propertyType,
          ...dataParams,
        });
        setPropertyList(data.properties);
        setTotalRecords(data.totalRecords);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [page, propertyType],
  );
  const openDialog = () => {
    dialog.current?.showModal();
  };

  useEffect(() => {
    const pageNum = searchParams.get("page");
    if (pageNum) {
      setPage(parseInt(pageNum));
    }
    searchProperty();
  }, [searchParams, propertyType, searchProperty]); // because searchProperty is a dependency, will run when page initially loads

  if (isLoading || propertyList.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Image
          src="/details/loading.gif"
          alt="Loading..."
          width={300}
          height={300}
          className="block"
        />
      </div>
    );
  }
  return (
    <div className="max-w-screen-lg container mx-auto">
      {/* search bar */}
      <div className="flex justify-between items-center my-5">
        <form
          className="flex justify-between sm:flex"
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
          <SearchDialogue ref={dialog} search={searchProperty} />
          <Button onClick={openDialog}>Filter</Button>
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
      <div className="h-[70vh] overflow-auto">
        <PropertyListTable
          propertyList={propertyList}
          setPropertyList={setPropertyList}
        />
      </div>
      {error && <Error message={error} />}
      <MyPagination pageNum={page} lastPageNum={lastPageNum} router={router} />
    </div>
  );
}
