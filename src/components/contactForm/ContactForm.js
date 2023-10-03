import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  // Define a regular expression to validate phone numbers
  const phoneNumberRegex = /^\d{1,9}$/;

  // Define a function to handle changes to the phone input field
  const handlePhoneChange = (event) => {
    const input = event.target.value;
    console.log(input, phoneNumberRegex.test(input));

    // If the input is empty or matches the phone number regular expression, set the phone state variable to the input value
    if (input === "" || phoneNumberRegex.test(input)) {
      setPhone(input);
    }
  };


  return (
    <>
      {/* Render a form element with input fields for the name, phone, and email */}
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name" >Name </label>
        <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="phone">Phone </label>
        <input type="tel" name="phone" id="phone" value={phone} onChange={handlePhoneChange} />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <input type="submit" value="Add Contact" />
      </form >
    </>
  );
};

