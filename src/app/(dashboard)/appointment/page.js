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




