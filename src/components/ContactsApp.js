import React from "react";
// import ContactList from "./ContactList";
// import { getContacts } from "../utils/data";
// import ContactInput from "./ContactInput";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import Navigation from "./Navigation";
import { Route, Routes } from "react-router-dom";

function ContactApp() {
  return (
    <div className="contact-app">
      <header className="contact-app__header">
        <h1>Aplikasi Kontak</h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default ContactApp;
