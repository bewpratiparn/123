import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // แสดงกล่องข้อความยืนยัน
    Swal.fire({
      backdrop: `
    rgba(0,0,123,0.4)
    url("https://media.tenor.com/A9FWShnz51oAAAAi/bow.gif")
    20px 300px
    no-repeat
  `,

      icon: "warning",
      title: "คุณต้องการออกจากระบบหรือไม่?",
      text: "ถ้าออกจากระบบเเล้วต้องเข้าใหม่น้าา",

      showCancelButton: true, // แสดงปุ่มยกเลิก
      confirmButtonText: "ตกลง",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
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
      }
    });
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-white">
        <div>
          <div className="flex justify-center items-center mt-25">
            คุณต้องการออกจากระบบใช่หรือไม่
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md ml-5"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Logout;
