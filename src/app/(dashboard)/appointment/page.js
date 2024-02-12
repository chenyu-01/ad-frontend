// import React from "react";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Button } from "@/components/ui/button";
//
// // Sample data for demonstration
// const appointments = [
//   {
//     id: "1029",
//     date: "10/02/2024",
//   },
//   {
//     id: "1098",
//     date: "13/02/2024",
//   },
//   {
//     id: "1120",
//     date: "01/03/2024",
//   },
//   // Add more appointments as needed
// ];
//
// export default function AppointmentTable() {
//   return (
//     <div className="max-w-screen-lg container mx-auto">
//       <h1 className="text-3xl text-center mb-8">Appointment Table</h1>
//       <Table>
//         <TableCaption>Your Appointment List</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Appointment ID</TableHead>
//             <TableHead>Appointment Date</TableHead>
//             <TableHead>Actions</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {appointments.map((appointment) => (
//             <TableRow key={appointment.id}>
//               <TableCell>{appointment.id}</TableCell>
//               <TableCell>{appointment.date}</TableCell>
//               <TableCell>
//                 <Button>Cancel</Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//         {/* TableFooter can be used if you have any footer content */}
//         <TableFooter>
//           <TableRow>
//             <TableCell colSpan={2}>Total Appointments</TableCell>
//             <TableCell>{appointments.length}</TableCell>
//           </TableRow>
//         </TableFooter>
//       </Table>
//     </div>
//   );
// }
"use client";
import { config } from "@/config";
import React, { useState, useEffect } from "react";
import "@/app/(dashboard)/usersetting/styles/index.css";
import { set } from "date-fns";

const serverUrl = config.serverUrl;
export default function ManageAppointments() {
  const [appointments, setAppointments] = useState([]);
  async function fetchAppointments() {
    try {
    // fetch data from API
    let fetchurl = serverUrl + "/api/appointment/getAppointments";
    let response = await fetch(fetchurl, {
          method: "GET",
          credentials: "include",
          }
      );
      let data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    // the first time the page is loaded, fetch data from API
    fetchAppointments();
  }, []);


  const handleCancel = async (appointmentid) => {
    try {
      let fetchurl =
        serverUrl + "/api/appointment/getAppointments/"+appointmentid;
        console.log("id:" + appointmentid);
      let response = await fetch(fetchurl, {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
   
      });

      if (response.ok) {
        window.alert("cancel success");
      } else {
        window.alert("cancel failed");
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  
  return (
      <div>
        <h1>Manage Appointments</h1>
        <table>
          <thead>
          <tr>
            <th>Appointment ID</th>
            <th>Appointment Date</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.id}</td>
                <td>{appointment.date}</td>
                <td>
                <button
                  style={{
                    backgroundColor: 'black',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '5px 10px',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleCancel(appointment.id)}
                >
                  Cancel
                </button>
                </td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
  );
         
};




