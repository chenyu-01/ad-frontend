"use client";
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

const data = [
  /* ... mock data ... */
  {
    id: 1,
    name: "Property 1",
    location: "Location 1",
    price: 100000,
  },
  {
    id: 2,
    name: "Property 2",
    location: "Location 2",
    price: 200000,
  },
  {
    id: 3,
    name: "Property 3",
    location: "Location 3",
    price: 300000,
  },
];
export default function PropertyList() {
  const router = useRouter();
  // go to detail page
  function goToDetail(id) {
    router.push("/details/" + id);
  }
  const [pageNum, setPageNum] = useState(1);
  // get the page number from the query string, and set it to pageNum when URL changes
  const searchParams = useSearchParams();

  useEffect(() => {
    const page = searchParams.get("page");
    if (page) {
      setPageNum(parseInt(page));
    }
    // fetch data from API
  }, [searchParams]);
  return (
    <div className="max-w-screen-lg container mx-auto">
      <Table className="text-2xl mb-5">
        <TableHeader>
          <TableRow>
            <TableHead>Property Name</TableHead>
            <TableHead>Location</TableHead>
            <TableHead className="hidden sm:table-cell">Price</TableHead>
            <TableHead>Detail</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((property) => (
            <TableRow key={property.id}>
              <TableCell>{property.name}</TableCell>
              <TableCell>{property.location}</TableCell>
              <TableCell className="hidden sm:table-cell">
                ${property.price}
              </TableCell>
              <TableCell>
                <Button
                  onClick={(e) => {
                    goToDetail(property.id);
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
