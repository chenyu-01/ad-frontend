"use client";
import { config } from "@/config";
import React, { useState, useEffect } from "react";

const serverUrl = config.serverUrl;
const ManageAppointments = () => {
    const [appointments, setAppointments] = useState([]);

    // Function to fetch appointment details based on customer ID
    const fetchAppointments = async () => {
        try {
            // ... fetch data from API ...
            let fetchurl =
                serverUrl + "/api/appointment/appointments/1" ;
            let response = await fetch(fetchurl, {
                method: "GET",
                credentials: "include",
                headers: {
                    Accept: "application/json",
                },
            });
            let data = await response.json();
            if(response.ok)
                console.log(data);
            setAppointments(data);
        } catch (error) {
            console.error(error.message);
        }
    }

        // Fetch appointments on component mount
        useEffect(() => {
            fetchAppointments();
        }, []);

        // Function to cancel appointment
        const cancelAppointment = async (appointmentId) => {
            try {
                // Make API call to cancel appointment
                await fetch(`/api/appointments/${appointmentId}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    window.alert("Ok to Cancel Appointment");
                    setAppointments(appointments.filter(appointment => appointment.id !== appointmentId));
                    router.push("/appointments");
                } else {
                    window.alert("failed to update property");
                }
                // Update appointments state after cancellation

            } catch (error) {
                console.error('Error cancelling appointment:', error);
            }
        };

        return (
            <div>
                <h1>Manage Appointments</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Appointment ID</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {appointments.map(appointment => (
                        <tr key={appointment.id}>
                            <td>{appointment.id}</td>
                            <td>{appointment.date}</td>
                            <td>
                                <button onClick={() => cancelAppointment(appointment.id)}>Cancel</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    };


    export default ManageAppointments;
