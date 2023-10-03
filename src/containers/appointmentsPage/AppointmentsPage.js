import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ contacts, appointments, addAppointment }) => {
  // Define state variables for name, contact, date, and time
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // Define a function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Call the addAppointment function with the current values of name, contact, date, and time
    addAppointment(name, contact, date, time);

    // Reset the state variables for name, contact, date, and time
    setName("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        {/* Render the AppointmentForm component with props for contacts, name, setName, contact, setContact, date, setDate, time, setTime, and onSubmit */}
        <AppointmentForm contacts={contacts} name={name} setName={setName} contact={contact} setContact={setContact} date={date} setDate={setDate} time={time} setTime={setTime} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        {/* Render the TileList component with a prop for appointments */}
        <TileList items={appointments} />
      </section>
    </div>
  );
};