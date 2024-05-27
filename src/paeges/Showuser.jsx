import React, { useState, useEffect } from 'react';
import './Showuser.css'; // Import CSS file

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

  // If user is not logged in, return null to hide the component
  if (!user) {
    return null;
  }

  return (
    <div className="show-user-container">
      <div className="user-info">
        <p className="welcome-text">{user.username}</p>
        <img
          src={user.picture}
       
          className="profile-picture"
        />
      </div>
    </div>
  );
}

export default Showuser;
