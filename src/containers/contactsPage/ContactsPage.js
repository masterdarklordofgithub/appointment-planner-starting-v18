import React, { useEffect, useState } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {

  // Define state variables for name, phone, and email
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // Define state variable for duplicate contact
  const [duplicate, setDuplicate] = useState(false);

  // Define function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // If the contact is not a duplicate, add it to the contacts array and reset the name, phone, and email state variables
    if (duplicate === false) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    } else {
      // If the contact is a duplicate, display an alert message
      alert("Contact already exists");
    }
  };

  // Use an effect hook to check for duplicate contacts whenever the "name" state variable changes
  useEffect(() => {
    contacts.forEach((object) => {
      if (object.name === name) {
        setDuplicate(true);
      }
    });
  }, [name, contacts]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        {/* Render the ContactForm component with props for the name, phone, and email state variables, as well as the handleSubmit function */}
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        {/* Render the TileList component with a prop for the contacts array */}
        <TileList items={contacts} />
      </section>
    </div>
  );
};