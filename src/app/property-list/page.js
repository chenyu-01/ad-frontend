import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableCaption,
  TableFooter,
  TableHead,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
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
  return (
    <div className="max-w-screen-lg container mx-auto">
      <Table className="text-2xl">
        <TableCaption>All PropertyList </TableCaption>
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
                <Button id={property.id}>Detail</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
