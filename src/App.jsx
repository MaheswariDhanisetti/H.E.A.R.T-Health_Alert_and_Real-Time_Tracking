import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar_landing_page";
import HomeSection from "./components/Home_landing_page";
import AboutUsSection from "./components/About_us";
import ContactUsSection from "./components/Contact_us";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/about" element={<AboutUsSection />} />
        <Route path="/contact" element={<ContactUsSection />} />
      </Routes>
    </Router>
  );
};

export default App;