import React, { useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    const handleLogout = async () => {
      localStorage.removeItem("token"); // ลบ Token ออกจาก Local Storage

      // แสดงการแจ้งเตือนเมื่อออกจากระบบเสร็จสมบูรณ์
      MySwal.fire({
        title: "Logging out...",
        text: "You have been logged out successfully.",
        icon: "success",
      }).then(() => {
        navigate("/Login"); // เปลี่ยนเส้นทางไปยังหน้า login
      });
    };

    handleLogout();
  }, [navigate, MySwal]);

  return (
    <div>
      <h1>Logging out...</h1>
      <p>You have been logged out successfully.</p>
    </div>
  );
}

export default Logout;
