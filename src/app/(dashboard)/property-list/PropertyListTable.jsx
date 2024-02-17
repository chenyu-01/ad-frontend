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
import React, { useEffect, useState } from "react";
export default function PropertyListTable({ propertyList, setPropertyList }) {
  const [sortState, setSortState] = useState({ column: null, order: null });
  if (!propertyList) return <Error message={"No content"} />;
  function SortDropDownMenu({ children, column, sortState, setSortState }) {
    const [sortIcon, setSortIcon] = useState(<ArrowUpDownIcon />);
    useEffect(() => {
      const determineSortIcon = () => {
        if (sortState.column === column) {
          return sortState.order ? <ArrowUpIcon /> : <ArrowDownIcon />;
        } else {
          return <ArrowUpDownIcon />;
        }
      };
      setSortIcon(determineSortIcon);
    }, [sortState, column]);
    const toggleSort = (order) => {
      if (sortState.column === column && sortState?.order === order) return;
      let newList = [...propertyList]; // Clone the list to avoid direct mutation
      if (order !== null) {
        newList.sort((a, b) => {
          if (typeof a[column] === "number") {
            return order ? a[column] - b[column] : b[column] - a[column];
          } else {
            return order
              ? a[column].localeCompare(b[column])
              : b[column].localeCompare(a[column]);
          }
        });
        setSortIcon(order ? <ArrowUpIcon /> : <ArrowDownIcon />);
      } else {
        // Assuming 'id' is always a number and the default sort field
        newList.sort((a, b) => a.id - b.id);
        setSortIcon(<ArrowUpDownIcon />);
      }
      setSortState && setSortState({ column, order });
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
          <TableHead>
            <SortDropDownMenu
              column={"town"}
              sortState={sortState}
              setSortState={setSortState}
            >
              Town
            </SortDropDownMenu>
          </TableHead>
          <TableHead className="hidden sm:table-cell">
            <SortDropDownMenu
              column={"streetName"}
              sortState={sortState}
              setSortState={setSortState}
            >
              Street Name
            </SortDropDownMenu>
          </TableHead>
          <TableHead className="hidden sm:table-cell">
            <SortDropDownMenu
              column={"block"}
              sortState={sortState}
              setSortState={setSortState}
            >
              Block
            </SortDropDownMenu>
          </TableHead>
          <TableHead>
            <SortDropDownMenu
              column={"price"}
              sortState={sortState}
              setSortState={setSortState}
            >
              Price
            </SortDropDownMenu>
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
