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
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useSearchParams, useRouter } from "next/navigation";
import { set } from "date-fns";

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
      setPropertyList(data);
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
  }, [searchParams, pageNum, isRent]);
  useEffect(() => {
    // the first time the page is loaded, fetch data from API
    fetchProperties(pageNum);
  }, []);
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
            onClick={(e) => {
              setIsRent(true);
              fetchProperties(pageNum);
            }}
            className={isRent ? "bg-gray-800" : "bg-gray-300"}
          >
            Rent
          </Button>
          <Button
            onClick={(e) => {
              setIsRent(false);
              fetchProperties(pageNum);
            }}
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
      <Pagination className="text-2xl">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          {[...Array(10)].map((_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                href={"./property-list?" + ("page=" + (i + 1))}
                isActive={i === pageNum - 1}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
