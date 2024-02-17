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
export default function PropertyList() {
  const [propertyList, setPropertyList] = useState([]);
  const router = useRouter();
  const [town, setTown] = useState("");
  const [page, setPage] = useState(1);
  const [propertyType, setPropertyType] = useState("all");
  const [totalRecords, setTotalRecords] = useState(0);
  const lastPageNum = Math.ceil(totalRecords / 10);
  const [error, setError] = useState("");
  const dialog = useRef(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const searchParams = useSearchParams();
  const searchProperty = useCallback(
    async ({ ...dataParams } = {}) => {
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
      }
    },
    [page, town, propertyType],
  );
  const openDialog = () => {
    dialog.current?.showModal();
  };

  const handleSort = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    // Assuming sortUrl is constructed based on sortDirection
    fetchSort(sortDirection);

  };

  

  useEffect(() => {
    const pageNum = searchParams.get("page");
    if (pageNum) {
      setPage(parseInt(pageNum));
    }
    searchProperty();
  }, [searchParams, propertyType, searchProperty]); // because searchProperty is a dependency, will run when page initially loads

  return (
    <div className="max-w-screen-lg container mx-auto">
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
          />
          <Button type="submit">Search</Button>
        </form>

        <div className="flex justify-end space-x-5">
          <SearchDialogue ref={dialog} search={searchProperty} />
          <Button onClick={openDialog}>Filter</Button>
          <Button onClick={handleSort} className="...">
            Sort by Price {sortDirection === "asc" ? "▲" : "▼"}
          </Button>
          <Button
            onClick={() => setPropertyType("rental")}
            className={propertyType === "rental" ? "bg-gray-800" : "bg-gray-300"}
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
