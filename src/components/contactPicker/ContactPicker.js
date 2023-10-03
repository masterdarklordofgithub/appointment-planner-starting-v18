import React from "react";

export const ContactPicker = ({ contacts, onChange, contact, name }) => {
  return (
    <select name={name} value={contact.name} onChange={(e) => onChange(e.target.value)}>
      {/* Add a default option element with the text "No Contact Selected" and a value attribute of "" */}
      <option value="">No Contact Selected</option>
      {/* Map over the contacts array and render an option element for each contact */}
      {contacts.map((contact, i) => (
        <option key={i} value={contact.name}>
          {contact.name}
        </option>
      ))}
    </select>
  );
};
