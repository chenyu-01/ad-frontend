import React from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

// Sample data for demonstration
const appointments = [
    {
        id: "1029",
        date: "10/02/2024",
    },
    {
        id: "1098",
        date: "13/02/2024",
    },
    {
        id: "1120",
        date: "01/03/2024",
    },
    // Add more appointments as needed
];

export default function AppointmentTable() {
    return (
        <div className="max-w-screen-lg container mx-auto">
            <h1 className="text-3xl text-center mb-8">Appointment Table</h1>
            <Table>
                <TableCaption>Your Appointment List</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Appointment ID</TableHead>
                        <TableHead>Appointment Date</TableHead>
                        <TableHead colSpan={2} className="text-center">Actions</TableHead>
                        <TableHead  ></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {appointments.map((appointment) => (
                        <TableRow key={appointment.id}>
                            <TableCell>{appointment.id}</TableCell>
                            <TableCell>{appointment.date}</TableCell>
                            <TableCell className="text-center">
                                <Button >Modify</Button>

                            </TableCell>
                            <TableCell className="text-center">
                                <Button>Cancel</Button>
                            </TableCell>


                        </TableRow>
                    ))}
                </TableBody>
                {/* TableFooter can be used if you have any footer content */}
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={2}>Total Appointments</TableCell>
                        <TableCell colSpan={2} className="text-center">{appointments.length}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    );
}
