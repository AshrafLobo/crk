import { Route, Routes } from "react-router-dom";
import "./App.scss";

import { Footer, Navbar } from "./components";
import { Home, About, Payroll } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/payroll" element={<Payroll />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
