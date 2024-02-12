"use client";
import { config } from "@/config";
import React, { useState, useEffect } from "react";
import "@/app/(dashboard)/usersetting/styles/index.css";
import AppoinmentTable from "./AppoinmentTable";
const serverUrl = config.serverUrl;
export default function ManageAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [appointmentForOwner, setAppointmentForOwner] = useState([]);
  const [customer, setCustomer] = useState();
  async function fetchRequestedAppointments() {
    try {
      // fetch data from API
      let fetchurl = serverUrl + "/api/appointment/getAppointments";
      let response = await fetch(fetchurl, {
        method: "GET",
        credentials: "include",
      });
      let data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error(error.message);
    }
  }
  async function fetchAppointmentFromOtherCustomer() {
    try {
      let fetchurl = serverUrl + "/api/appointment/getAppointmentsForOwner";
      let response = await fetch(fetchurl, {
        method: "GET",
        credentials: "include",
      });
      let data = await response.json();
      console.log(data);
      setAppointmentForOwner(data);
    } catch (error) {
      console.error(error.message);
    }
  }
  async function fetchCustomer() {
    try {
      let fetchurl = serverUrl + "/api/customer/check-auth";
      let response = await fetch(fetchurl, {
        method: "GET",
        credentials: "include",
      });
      let data = await response.json();
      setCustomer(data);
      console.log(data);
      if (data.role === "owner") {
        fetchAppointmentFromOtherCustomer();
      }
    } catch (error) {
      console.error(error.message);
    }
  }
  async function handleConfirm(appointmentid) {
    try {
      let fetchurl = serverUrl + "/api/appointment/confirm/" + appointmentid;
      let response = await fetch(fetchurl);
      if (response.ok) {
        window.alert("confirm successful");
        // refresh the page
        window.location.reload();
      } else {
        window.alert("confirm failed");
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    // the first time the page is loaded, fetch data from API
    fetchRequestedAppointments();
    fetchCustomer();
  }, []);

  const handleCancel = async (appointmentid) => {
    try {
      let fetchurl = serverUrl + "/api/appointment/cancel/" + appointmentid;
      console.log("id:" + appointmentid);
      let response = await fetch(fetchurl, {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        window.alert("cancel successful");
        // refresh the page
        window.location.reload();
      } else {
        window.alert("cancel failed");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      {appointments.length >= 1 && (
        <>
          <h1>Manage Requested Appointments</h1>
          <AppoinmentTable appointments={appointments} cancel={handleCancel} />
        </>
      )}
      {appointmentForOwner.length >= 1 && (
        <>
          <h1>Manage Appointments for Owner</h1>
          <AppoinmentTable
            appointments={appointmentForOwner}
            Action={handleConfirm}
            actionName={`Confirm`}
            cancel={handleCancel}
          />
        </>
      )}
    </div>
  );
}
