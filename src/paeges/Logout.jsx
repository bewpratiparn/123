import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // ลบ token ที่เก็บใน localStorage
    localStorage.removeItem("token");
    // นำผู้ใช้กลับไปยังหน้าล็อกอิน
    navigate("/Home");
    // แสดงกล่องข้อความแจ้งเตือน
    Swal.fire({
      icon: "success",
      title: "ออกจากระบบสำเร็จ",
      showConfirmButton: true, // เพิ่มค่าเป็น true เพื่อให้ปุ่ม "ตกลง" ปรากฏ
      confirmButtonText: "ตกลง",
    });
  };
  
  return (
    <div className="flex justify-center items-center h-screen">
      คุณต้องการออกจากระบบใช่หรือไม่
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
