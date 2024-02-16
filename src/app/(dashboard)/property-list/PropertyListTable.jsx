"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Error from "@/components/ui/Error";
import { ArrowUpIcon, ArrowDownIcon, ArrowUpDownIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React, { useState } from "react";
export default function PropertyListTable({ propertyList, setPropertyList }) {
  if (!propertyList) return <Error message={"No content"} />;
  function SortDropDownMenu({ children, column }) {
    const [sortIcon, setSortIcon] = useState(<ArrowUpDownIcon />);
    const toggleSort = (isAsc) => {
      let newList;
      switch (isAsc) {
        case true:
          newList = propertyList.toSorted((a, b) => a[column] - b[column]);
          setSortIcon(<ArrowUpIcon />);
          break;
        case false:
          newList = propertyList.toSorted((a, b) => b[column] - a[column]);
          setSortIcon(<ArrowDownIcon />);
          break;
        case null:
          newList = propertyList.toSorted((a, b) => a.id - b.id);
          setSortIcon(<ArrowUpDownIcon />);
          break;
      }
      setPropertyList(newList);
    };
    return (
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 data-[state=open]:bg-accent text-2xl"
            >
              <span>{children}</span>
              {sortIcon}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem onClick={() => toggleSort(true)}>
              <ArrowUpIcon className="mr-2  text-muted-foreground/70" />
              Asc
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => toggleSort(false)}>
              <ArrowDownIcon className="mr-2  text-muted-foreground/70" />
              Desc
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => toggleSort(null)}>
              <ArrowUpDownIcon className="mr-2  text-muted-foreground/70" />
              None
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }

  return (
    <Table className="text-2xl mb-5">
      <TableHeader>
        <TableRow>
          <TableHead>Town</TableHead>
          <TableHead className="hidden sm:table-cell">Street Name</TableHead>
          <TableHead className="hidden sm:table-cell">Block</TableHead>
          <TableHead>
            <SortDropDownMenu column={"price"}>Price</SortDropDownMenu>
          </TableHead>
          <TableHead>Detail</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {propertyList?.map((p) => (
          <TableRow key={p.id}>
            <TableCell>{p.town}</TableCell>
            <TableCell className="hidden sm:table-cell">
              {p.streetName}
            </TableCell>
            <TableCell className="hidden sm:table-cell">{p.block}</TableCell>
            <TableCell>${p.price}</TableCell>
            <TableCell>
              <Link href={"/details/" + p.id}>
                <Button>Detail</Button>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
