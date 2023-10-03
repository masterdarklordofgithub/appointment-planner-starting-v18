import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { ContactsPage } from "./ContactsPage";

describe("ContactsPage", () => {
    const contacts = [
        { name: "John Doe", phone: "555-555-5555", email: "johndoe@example.com" },
        { name: "Jane Smith", phone: "555-555-1234", email: "janesmith@example.com" },
        { name: "Bob Johnson", phone: "555-555-9876", email: "bobjohnson@example.com" }
    ];

    const addContact = jest.fn();


    it("renders the Contacts section", () => {
        const { getByText } = render(<ContactsPage contacts={contacts} addContact={addContact} />);
        expect(getByText("Contacts")).toBeInTheDocument();
    });
});

//TODO figure out how to locate input in a good way for further test implementation