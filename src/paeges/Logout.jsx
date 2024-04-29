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
        // ส่งคำร้องขอเพื่อออกจากระบบ
        const response = await fetch("http://127.0.0.1:8000/logout/", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (response.ok) {
          // ลบ Token ออกจาก Local Storage เมื่อออกจากระบบสำเร็จ
          localStorage.removeItem("token");
          // แสดงข้อความด้วย SweetAlert เมื่อออกจากระบบสำเร็จ
          await MySwal.fire({
            title: "Logging out...",
            text: "You have been logged out successfully.",
            icon: "success",
          });
          // เปลี่ยนเส้นทางไปยังหน้า Login
          navigate("/login");
        } else {
          throw new Error("Failed to logout");
        }
      } catch (error) {
        console.error("Error logging out:", error);
        // แสดงข้อความข้อผิดพลาด
        await MySwal.fire({
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
