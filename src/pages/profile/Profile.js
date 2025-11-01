import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

export default function Profile() {
  const user = {
    name: "John Doe",
    nativeLanguage: "English",
    learningLanguage: "Spanish",
    streak: 15,
    level: 3,
  };

  return (
    <div className="profile-container">
      <h1 className="profile-title">Your Profile</h1>

      <div className="profile-card">
        <div className="avatar">
          <span role="img" aria-label="user">
            🦉
          </span>
        </div>

        <h2 className="profile-name">{user.name}</h2>

        <div className="profile-info">
          <p>
            <strong>Native Language:</strong> {user.nativeLanguage}
          </p>
          <p>
            <strong>Learning Language:</strong> {user.learningLanguage}
          </p>
          <p>
            <strong>Streak:</strong> 🔥 {user.streak} days
          </p>
          <p>
            <strong>Level:</strong> ⭐ {user.level}
          </p>
        </div>

        <button className="edit-btn">Edit Profile</button>
      </div>

      <Link to="/" className="back-home">
        ⬅ Back to Home
      </Link>
    </div>
  );
}
