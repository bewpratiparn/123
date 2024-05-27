import React, { useState, useEffect } from 'react';
import './Showuser.css'; // Import CSS file

function Showuser() {
  const [user, setUser] = useState(null);
  const [isVisible, setIsVisible] = useState(true); // State เพื่อตรวจสอบว่า component ควรแสดงผลหรือไม่
  const [startScrollPos, setStartScrollPos] = useState(0); // State เพื่อเก็บค่าตำแหน่งเริ่มต้นของหน้าจอ

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > startScrollPos) {
        setIsVisible(false); // ซ่อน component เมื่อเลื่อนลง
      } else {
        setIsVisible(true); // แสดง component เมื่อเลื่อนกลับไปที่จุดเริ่มต้น
      }
    };

    window.addEventListener('scroll', handleScroll);

    // เซ็ตตำแหน่งเริ่มต้นเมื่อ component ถูกโหลด
    setStartScrollPos(window.pageYOffset);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [startScrollPos]);

  // ถ้า user ยังไม่ได้โหลดหรือ user ไม่มีค่า หรือ isVisible เป็น false ให้คืนค่า null เพื่อซ่อน component
  if (!user || !isVisible) {
    return null;
  }

  return (
    <div className="show-user-container">
      <div className="user-info">
        <p className="welcome-text">{user.username}</p>
        <img
          src={user.picture}
          alt="Profile"
          className="profile-picture"
        />
      </div>
    </div>
  );
}

export default Showuser;
