import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./HomeScreen.css";

export default function HomeScreen() {
  return (
    <div className="home-container">
      <img src={logo} alt="LangPal Logo" className="home-logo" />

      <h1 className="home-title">Welcome to LangPal!</h1>
      <p className="home-subtitle">
        Connect with people worldwide and practice languages together.
      </p>

      <div className="home-button-container">
        <Link to="/partners" className="home-link">
          <button className="home-button partner-btn">Find a Partner</button>
        </Link>

        <Link to="/profile" className="home-link">
          <button className="home-button profile-btn">Go to Profile</button>
        </Link>
      </div>
    </div>
  );
}
