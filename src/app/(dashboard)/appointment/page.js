"use client";
import { config } from "@/config";
import React, { useState, useEffect } from "react";
import "@/app/(dashboard)/usersetting/styles/index.css";
import AppoinmentTable from "./AppoinmentTable";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { AuthContext } from "@/app/(dashboard)/AuthProvider";
const serverUrl = config.serverUrl;
export default function ManageAppointments() {
  const [forOwner, setForOwner] = useState(false);
  const { userData } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [appointmentForOwner, setAppointmentForOwner] = useState([]);
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
    if (userData) {
      setRole(userData.role);
      if (userData.role === "owner") {
        fetchAppointmentFromOtherCustomer();
      } else {
        fetchRequestedAppointments();
      }
    }
  }, [userData]);

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
    <div className="mt-10">
      <div className="flex space-x-3">
        <Button
          onClick={() => {
            setForOwner(false);
            fetchRequestedAppointments();
          }}
        >
          My Requested Appointments
        </Button>
        {userData?.role === "owner" && (
          <Button
            onClick={() => {
              setForOwner(true);
              fetchAppointmentFromOtherCustomer();
            }}
          >
            Appointments To Me
          </Button>
        )}
      </div>

      {!forOwner && appointments.length >= 1 && (
        <div>
          <AppoinmentTable
            forOwner={forOwner}
            appointments={appointments}
            cancel={handleCancel}
            role={role}
          />
        </div>
      )}
      {forOwner && appointmentForOwner.length >= 1 && (
        <div>
          <AppoinmentTable
            appointments={appointmentForOwner}
            forOwner={forOwner}
            Action={handleConfirm}
            actionName={`Confirm`}
            cancel={handleCancel}
            role={role}
          />
        </div>
      )}
    </div>
  );
}
