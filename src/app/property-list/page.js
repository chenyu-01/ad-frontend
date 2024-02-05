"use client";
import { config } from "@/config";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useSearchParams, useRouter } from "next/navigation";
import MyPagination from "./MyPagination";

const serverUrl = config.serverUrl;
export default function PropertyList() {
  const [propertyList, setPropertyList] = useState([]);
  const router = useRouter();
  // go to detail page
  function goToDetail(id) {
    router.push("/details/" + id);
  }
  const [pageNum, setPageNum] = useState(1);
  const [isRent, setIsRent] = useState(true);
  const [totalRecords, setTotalRecords] = useState(0);
  const lastPageNum = Math.ceil(totalRecords / 10);

  // get the page number from the query string, and set it to pageNum when URL changes
  const searchParams = useSearchParams();
  async function fetchProperties(pageNum) {
    // fetch data from API
    try {
      // ... fetch data from API ...
      let fetchurl = serverUrl + "/api/property/rentlist/" + pageNum;
      if (!isRent) {
        fetchurl = serverUrl + "/api/property/salelist/" + pageNum;
      }
      let response = await fetch(fetchurl);
      let data = await response.json();
      setTotalRecords(data.totalRecords);
      setPropertyList(data.properties);
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  }
  const searchProperty = (e) => {
    e.preventDefault();
    console.log("searching property");
  };

  useEffect(() => {
    const page = searchParams.get("page");
    if (page) {
      setPageNum(parseInt(page));
      // fetch data from API
      console.log("fetching data from API");
      fetchProperties(page);
    }
  }, [searchParams, isRent]);
  useEffect(() => {
    // the first time the page is loaded, fetch data from API
    fetchProperties(pageNum);
  }, []);
  const switchRent = (e) => {
    e.preventDefault();
    setIsRent(!isRent);
    router.push("/property-list?page=1");
  };
  return (
    <div className="max-w-screen-lg container mx-auto">
      {/* search bar */}
      <div className="flex justify-between items-center my-5">
        <form className="flex justify-between" onSubmit={searchProperty}>
          <Input
            type="text"
            placeholder="Search"
            className="mr-5 text-2xl"
          ></Input>
          <Button type="submit">Search</Button>
        </form>
        <div className="flex justify-end space-x-5">
          <Button
            onClick={switchRent}
            className={isRent ? "bg-gray-800" : "bg-gray-300"}
          >
            Rent
          </Button>
          <Button
            onClick={switchRent}
            className={isRent ? "bg-gray-300" : "bg-gray-800"}
          >
            Sale
          </Button>
        </div>
      </div>
      <Table className="text-2xl mb-5">
        <TableHeader>
          <TableRow>
            <TableHead>Town</TableHead>
            <TableHead>Street Name</TableHead>
            <TableHead className="hidden sm:table-cell">Block</TableHead>
            <TableHead className="hidden sm:table-cell">Price</TableHead>
            <TableHead>Detail</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {propertyList.map((p) => (
            <TableRow key={p.id}>
              <TableCell>{p.town}</TableCell>
              <TableCell>{p.streetName}</TableCell>
              <TableCell className="hidden sm:table-cell">{p.block}</TableCell>
              <TableCell className="hidden sm:table-cell">${p.price}</TableCell>
              <TableCell>
                <Button
                  onClick={(e) => {
                    goToDetail(p.id);
                  }}
                >
                  Detail
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <MyPagination
        pageNum={pageNum}
        lastPageNum={lastPageNum}
        router={router}
      />
    </div>
  );
}
