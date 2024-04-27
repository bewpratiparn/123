import React, { useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    const handleLogout = async () => {
      try {
        // เรียกใช้ API สำหรับออกจากระบบ
        const response = await fetch("http://127.0.0.1:8000/logout/", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (response.ok) {
          // ลบ Token ออกจาก Local Storage เมื่อออกจากระบบสำเร็จ
          localStorage.removeItem("token");
          MySwal.fire({
            title: "Logging out...",
            text: "You have been logged out successfully.",
            icon: "success",
          }).then(() => {
            navigate("/Login"); // เปลี่ยนเส้นทางไปยังหน้า login
          });
        } else {
          throw new Error("Failed to logout");
        }
      } catch (error) {
        console.error("Error logging out:", error);
        MySwal.fire({
          title: "Error",
          text: "Failed to logout. Please try again later.",
          icon: "error",
        });
      }
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
