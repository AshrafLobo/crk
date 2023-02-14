import { Route, Routes } from "react-router-dom";
import "./App.scss";

import { Footer, Navbar } from "./components";
import { Home, About, ContactUs, Payroll, ShareRegistration } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/share_registration" element={<ShareRegistration />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
