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

export default function PropertyListTable({ propertyList }) {
  if (!propertyList) return <Error message={"No content"} />;
  return (
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
        {propertyList?.map((p) => (
          <TableRow key={p.id}>
            <TableCell>{p.town}</TableCell>
            <TableCell>{p.streetName}</TableCell>
            <TableCell className="hidden sm:table-cell">{p.block}</TableCell>
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
