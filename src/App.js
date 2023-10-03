import React, { useCallback, useState } from "react";
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  // Define state variables for contacts and appointments
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  // Implement functions to add data to contacts and appointments
  const addContact = useCallback((name, phone, email) => {
    setContacts(prevContacts => [...prevContacts, { name, phone, email }]);
  }, []);

  const addAppointment = useCallback((name, contact, date, time) => {
    setAppointments(prevAppointments => [...prevAppointments, { name, contact, date, time }]);
  }, []);

  // Create routes for the application using the createRoutesFromElements function and the Route component from react-router-dom
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
      <Route path={ROUTES.CONTACTS} element={<ContactsPage contacts={contacts} addContact={addContact} /> /* Add props to ContactsPage */} />
      <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage contacts={contacts} appointments={appointments} addAppointment={addAppointment} /> /* Add props to AppointmentsPage */} />
    </Route>
  ));

  // Render the RouterProvider component with the router object as a prop
  return (
    <RouterProvider router={router} />
  );
}

export default App;