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
export default function PropertyListTable({ propertyList }) {
  const [sortIcon, setSortIcon] = useState(<ArrowUpDownIcon />);
  function toggleSort(isAsc) {
    switch (isAsc) {
      case true:
        propertyList.sort((a, b) => (a.price > b.price ? 1 : -1));
        setSortIcon(<ArrowUpIcon />);
        break;
      case false:
        propertyList.sort((a, b) => (a.price < b.price ? 1 : -1));
        setSortIcon(<ArrowDownIcon />);
        break;
      case null:
        propertyList.sort((a, b) => (a.id > b.id ? 1 : -1));
        setSortIcon(<ArrowUpDownIcon />);
        break;
    }
  }
  if (!propertyList) return <Error message={"No content"} />;

  return (
    <Table className="text-2xl mb-5">
      <TableHeader>
        <TableRow>
          <TableHead>Town</TableHead>
          <TableHead className="hidden sm:table-cell">Street Name</TableHead>
          <TableHead className="hidden sm:table-cell">Block</TableHead>
          <TableHead>
            <SortDropDownMenu
              toggleSorting={toggleSort}
              title="Price"
              sortIcon={sortIcon}
            />
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

function SortDropDownMenu({ toggleSorting, sortIcon, title }) {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 data-[state=open]:bg-accent text-2xl"
          >
            <span>{title}</span>
            {sortIcon}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={() => toggleSorting(true)}>
            <ArrowUpIcon className="mr-2  text-muted-foreground/70" />
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => toggleSorting(false)}>
            <ArrowDownIcon className="mr-2  text-muted-foreground/70" />
            Desc
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => toggleSorting(null)}>
            <ArrowUpDownIcon className="mr-2  text-muted-foreground/70" />
            None
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
