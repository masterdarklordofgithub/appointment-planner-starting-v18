import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { AppointmentsPage } from "./AppointmentsPage";

describe("AppointmentsPage", () => {
    const contacts = [
        { name: "John Doe", phone: "555-555-5555", email: "johndoe@example.com" },
        { name: "Jane Smith", phone: "555-555-1234", email: "janesmith@example.com" },
        { name: "Bob Johnson", phone: "555-555-9876", email: "bobjohnson@example.com" }
    ];

    const appointments = [
        { id: 1, title: "Appointment 1", contact: "John Doe", date: "2022-01-01", time: "12:00" },
        { id: 2, title: "Appointment 2", contact: "Jane Smith", date: "2022-01-02", time: "13:00" },
        { id: 3, title: "Appointment 3", contact: "Bob Johnson", date: "2022-01-03", time: "14:00" }
    ];

    const addAppointment = jest.fn();

    it("renders the Appointments section", () => {
        const { getByText } = render(<AppointmentsPage contacts={contacts} appointments={appointments} addAppointment={addAppointment} />);
        expect(getByText("Appointments")).toBeInTheDocument();
    });

    //TODO: quite a bit to add here
});