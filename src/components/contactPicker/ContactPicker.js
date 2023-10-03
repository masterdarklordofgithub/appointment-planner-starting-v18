import React from "react";

export const ContactPicker = ({ contacts, onChange, contact, name }) => {
  return (
    // Render a select element with a name attribute of the prop "name", a value attribute of the "contact.name" property, and an onChange event handler that calls the "onChange" function with the selected value
    <select name={name} value={contact.name} onChange={(e) => onChange(e.target.value)}>

      {/* Render a default option element with the text "No Contact Selected" and a value attribute of "" */}
      <option value="">No Contact Selected</option>

      {/* Map over the "contacts" array and render an option element for each contact */}
      {contacts.map((contact, i) => (
        <option key={i} value={contact.name}>
          {/* Render the name of the contact as the text content of the option element */}
          {contact.name}
        </option>
      ))}
    </select>
  );
};
