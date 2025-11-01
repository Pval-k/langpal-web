import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [theme, setTheme] = useState("light");

  
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <nav className="navbar">
      <h2 className="navbar-logo">LangPal</h2>

      <div className="navbar-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/partners"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Find Partner
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Profile
        </NavLink>
      </div>

      
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </nav>
  );
}
