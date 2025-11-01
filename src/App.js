import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navBar/Navbar";
import Home from "./pages/homeScreen/HomeScreen";
import Partners from "./pages/partners/Partners";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
