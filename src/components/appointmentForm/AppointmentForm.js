import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

// Define a function to get the current date in the format "YYYY-MM-DD"
const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

// Define the AppointmentForm component
export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  // Render a form with input fields for the appointment title, contact, date, and time
  return (
    <form name="appointmentForm" onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label htmlFor="date">Date</label>
      <input
        type="date"
        name="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        min={getTodayString()} // Set the minimum date to the current date
        required
      />
      <label htmlFor="time">Time</label>
      <input
        type="time"
        name="time"
        id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      {/* Render the ContactPicker component */}
      <ContactPicker contacts={contacts} onChange={setContact} contact={contact} name={name} />
      <input type="submit" value="Add Appointment" />
    </form>
  );
};
