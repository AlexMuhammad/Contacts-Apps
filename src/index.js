import React from "react";
import { createRoot } from "react-dom/client";
import ContactApp from "./components/ContactsApp";

//styling
import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(<ContactApp />);
