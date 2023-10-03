import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { ContactForm } from "./ContactForm";

describe("ContactForm", () => {
    const handleSubmit = jest.fn();
    const setName = jest.fn();
    const setPhone = jest.fn();
    const setEmail = jest.fn();

    it("renders a form element with input fields for name, phone, and email", () => {
        const { getByLabelText } = render(<ContactForm name="" setName={setName} phone="" setPhone={setPhone} email="" setEmail={setEmail} handleSubmit={handleSubmit} />);
        expect(getByLabelText("Name")).toBeInTheDocument();
        expect(getByLabelText("Phone")).toBeInTheDocument();
        expect(getByLabelText("Email")).toBeInTheDocument();
    });

    it("calls the setName function when the name input field is changed", () => {
        const { getByLabelText } = render(<ContactForm name="" setName={setName} phone="" setPhone={setPhone} email="" setEmail={setEmail} handleSubmit={handleSubmit} />);
        const nameInput = getByLabelText("Name");
        fireEvent.change(nameInput, { target: { value: "John Doe" } });
        expect(setName).toHaveBeenCalledTimes(1);
        expect(setName).toHaveBeenCalledWith("John Doe");
    });

    it("does not call the setPhone function when the phone input field is changed with an invalid phone number", () => {
        const { getByLabelText } = render(<ContactForm name="" setName={setName} phone="" setPhone={setPhone} email="" setEmail={setEmail} handleSubmit={handleSubmit} />);
        const phoneInput = getByLabelText("Phone");
        fireEvent.change(phoneInput, { target: { value: "invalid phone number" } });
        expect(setPhone).not.toHaveBeenCalled();
    });

    it("calls the setEmail function when the email input field is changed", () => {
        const { getByLabelText } = render(<ContactForm name="" setName={setName} phone="" setPhone={setPhone} email="" setEmail={setEmail} handleSubmit={handleSubmit} />);
        const emailInput = getByLabelText("Email");
        fireEvent.change(emailInput, { target: { value: "johndoe@example.com" } });
        expect(setEmail).toHaveBeenCalledTimes(1);
        expect(setEmail).toHaveBeenCalledWith("johndoe@example.com");
    });

    it("calls the handleSubmit function when the form is submitted", () => {
        const { getByText } = render(<ContactForm name="John Doe" setName={setName} phone="555-555-5555" setPhone={setPhone} email="johndoe@example.com" setEmail={setEmail} handleSubmit={handleSubmit} />);
        const submitButton = getByText("Add Contact");
        fireEvent.click(submitButton);
        expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
});