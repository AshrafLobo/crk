import React from "react";
import { Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import "./App.scss";

import { Footer, Navbar } from "./components";
import {
  Home,
  About,
  ContactUs,
  News,
  Payroll,
  ShareRegistration,
  Issuer,
} from "./pages";

const theme = createTheme({
  typography: {
    fontFamily: "'Roboto', 'Tahoma', 'Arial', sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/news" element={<News />} />
        <Route path="/share_registration" element={<ShareRegistration />} />
        <Route path="/issuer/:id" element={<Issuer />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
