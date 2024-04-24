import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      localStorage.removeItem("token"); // ลบ Token ออกจาก Local Storage
      await navigate("/login"); // เปลี่ยนเส้นทางไปยังหน้า login
    };

    handleLogout();
  }, [navigate]);

  return (
    <div>
      <h1>Logging out...</h1>
      <p>You have been logged out successfully.</p>
    </div>
  );
}

export default Logout;
