import React, { useState, useEffect } from 'react';
import './Showuser.css'; // นำเข้าไฟล์ CSS

function Showuser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch('http://127.0.0.1:8000/authorize/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    }
  }, []);

  return (
    <div className="show-user-container">
      {user && (
        <div className="user-info">
          <p className="welcome-text">Welcome, {user.username}</p>
          <img
            src={user.picture}
            alt="Profile"
            className="profile-picture"
          />
        </div>
      )}
    </div>
  );
}

export default Showuser;
