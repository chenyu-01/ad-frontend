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

export default function PropertyListTable({ propertyList }) {
  return (
    <Table className="lg:text-xl text-md mb-5">
      <TableHeader>
        <TableRow>
          <TableHead styles className={`hidden xl:table-cell`}>
            Town
          </TableHead>
          <TableHead>Street Name</TableHead>
          <TableHead className="hidden xl:table-cell">Block</TableHead>
          <TableHead className="hidden sm:table-cell">Price</TableHead>
          <TableHead>Detail</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {propertyList.map((p) => (
          <TableRow key={p.id}>
            <TableCell className={`hidden xl:table-cell`}>{p.town}</TableCell>
            <TableCell>{p.streetName}</TableCell>
            <TableCell className="hidden xl:table-cell">{p.block}</TableCell>
            <TableCell className="hidden sm:table-cell">${p.price}</TableCell>
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
