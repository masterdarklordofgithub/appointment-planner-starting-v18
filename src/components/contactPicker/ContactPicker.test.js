import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { ContactPicker } from "./ContactPicker";

describe("ContactPicker", () => {
    const contacts = [
        { name: "John Doe", phone: "555-555-5555", email: "johndoe@example.com" },
        { name: "Jane Smith", phone: "555-555-1234", email: "janesmith@example.com" },
        { name: "Bob Johnson", phone: "555-555-9876", email: "bobjohnson@example.com" }
    ];

    const onChange = jest.fn();

    it("renders a select element with a default option", () => {
        const { getByRole } = render(<ContactPicker contacts={contacts} onChange={onChange} contact={""} name={"contact"} />);

        const selectElement = getByRole("combobox");
        expect(selectElement).toBeInTheDocument();
        expect(selectElement).toHaveValue("");
        expect(selectElement).toHaveTextContent("No Contact Selected");
    });

    it("renders an option element for each contact", () => {
        const { getByRole } = render(<ContactPicker contacts={contacts} onChange={onChange} contact={""} name={"contact"} />);
        const selectElement = getByRole("combobox");
        expect(selectElement.children.length).toBe(contacts.length + 1);
        contacts.forEach((contact) => {
            expect(selectElement).toHaveTextContent(contact.name);
        });
    });

    it("calls the onChange function when a contact is selected", () => {
        const { getByRole } = render(<ContactPicker contacts={contacts} onChange={onChange} contact={""} name={"contact"} />);
        const selectElement = getByRole("combobox");
        fireEvent.change(selectElement, { target: { value: contacts[0].name } });
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(contacts[0].name);
    });
});