import React from "react";
import { Link } from "react-router-dom";
import "./Partners.css";

export default function Partners() {
  const partners = [
    { name: "Alice", from: "English", to: "Spanish", color: "#6FCF97" },
    { name: "Bob", from: "Spanish", to: "French", color: "#F2C94C" },
    { name: "Charlie", from: "French", to: "Japanese", color: "#56CCF2" },
  ];

  return (
    <div className="partners-container">
      <h1 className="partners-title">Find a Partner</h1>
      <p className="partners-subtitle">Connect and start practicing together!</p>

      <div className="partners-list">
        {partners.map((p, index) => (
          <div
            key={index}
            className="partner-card"
            style={{ backgroundColor: p.color }}
          >
            <h2>{p.name}</h2>
            <p>
              {p.from} → {p.to}
            </p>
            <button className="chat-btn">Chat</button>
          </div>
        ))}
      </div>

      <Link to="/" className="back-home">
        ⬅ Back to Home
      </Link>
    </div>
  );
}
