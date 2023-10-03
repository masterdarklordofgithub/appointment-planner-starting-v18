import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { AppointmentForm } from "./AppointmentForm";

describe("AppointmentForm", () => {
    const handleSubmit = jest.fn();
    const setName = jest.fn();
    const setContact = jest.fn();
    const setDate = jest.fn();
    const setTime = jest.fn();

    const contacts = [
        { name: "John Doe", phone: "555-555-5555", email: "johndoe@example.com" },
        { name: "Jane Smith", phone: "555-555-1234", email: "janesmith@example.com" },
        { name: "Bob Johnson", phone: "555-555-9876", email: "bobjohnson@example.com" }
    ];

    it("renders a form element with input fields for the appointment title, contact, date, and time", () => {
        const { getByLabelText } = render(<AppointmentForm contacts={contacts} name="" setName={setName} contact="" setContact={setContact} date="" setDate={setDate} time="" setTime={setTime} handleSubmit={handleSubmit} />);
        expect(getByLabelText("Title")).toBeInTheDocument();
        expect(getByLabelText("Date")).toBeInTheDocument();
        expect(getByLabelText("Time")).toBeInTheDocument();
    });

    it("calls the setName function when the title input field is changed", () => {
        const { getByLabelText } = render(<AppointmentForm contacts={contacts} name="" setName={setName} contact="" setContact={setContact} date="" setDate={setDate} time="" setTime={setTime} handleSubmit={handleSubmit} />);
        const titleInput = getByLabelText("Title");
        fireEvent.change(titleInput, { target: { value: "Appointment Title" } });
        expect(setName).toHaveBeenCalledTimes(1);
        expect(setName).toHaveBeenCalledWith("Appointment Title");
    });

    it("calls the setDate function when the date input field is changed", () => {
        const { getByLabelText } = render(<AppointmentForm contacts={contacts} name="" setName={setName} contact="" setContact={setContact} date="" setDate={setDate} time="" setTime={setTime} handleSubmit={handleSubmit} />);
        const dateInput = getByLabelText("Date");
        fireEvent.change(dateInput, { target: { value: "2022-01-01" } });
        expect(setDate).toHaveBeenCalledTimes(1);
        expect(setDate).toHaveBeenCalledWith("2022-01-01");
    });

    it("calls the setTime function when the time input field is changed", () => {
        const { getByLabelText } = render(<AppointmentForm contacts={contacts} name="" setName={setName} contact="" setContact={setContact} date="" setDate={setDate} time="" setTime={setTime} handleSubmit={handleSubmit} />);
        const timeInput = getByLabelText("Time");
        fireEvent.change(timeInput, { target: { value: "12:00" } });
        expect(setTime).toHaveBeenCalledTimes(1);
        expect(setTime).toHaveBeenCalledWith("12:00");
    });

    it("calls the handleSubmit function when the form is submitted", () => {
        const { getByText } = render(<AppointmentForm contacts={contacts} name="Appointment Title" setName={setName} contact="John Doe" setContact={setContact} date="2022-01-01" setDate={setDate} time="12:00" setTime={setTime} handleSubmit={handleSubmit} />);
        const submitButton = getByText("Add Appointment");
        fireEvent.click(submitButton);
        expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
});