import React, { useState } from "react";
import "flowbite";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import "./Sidebar.css";
function Sidebar({ username }) {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [showEditDropdown, setEditdropdown] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setShowProfileDropdown((prevState) => !prevState);
  };

  const toggleLoginDropdown = () => {
    setShowLoginDropdown((prevState) => !prevState);
  };

  const toggleEdiproFile = () => {
    setEditdropdown((prevState) => !prevState);
  };

  const openNav = () => {
    setIsSidebarOpen(true);
  };

  const closeNav = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <div className="text">
        <div
          id="mySidebar"
          className={`sidebar ${isSidebarOpen ? "open" : ""}`}
        >
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
            &times;
          </a>
          <a className="textinsidebar" href="/Home">หน้าร้านค้า</a>
          <a className="textinsidebar" href="/Translate">แปลภาษา</a>

          <a href="#" onClick={toggleProfileDropdown}>
            <AddBusinessIcon /> เพิ่มข้อมูลสำหรับร้าน
          </a>
          {showProfileDropdown && (
            <div className="dropdown-content">
              <a className="textinsidebar" href="/AddDataShop">เพิ่มข้อมูลร้านค้า</a>
              <a className="textinsidebar" href="/AddFood">เพิ่มข้อมูลอาหาร</a>
              <a className="textinsidebar" href="/Detailfood">แสดงรายละเอียดข้อมูลร้านค้า</a>
            </div>
          )}

          <a href="#" onClick={toggleEdiproFile}>
            แก้ไข้โปรไฟล์
          </a>
          {showEditDropdown && (
            <div className="dropdown-content">
              <a className="textinsidebar" href="#">เเก้ไขข้อมูลผู้ใช้</a>
              <a className="textinsidebar" href="#">ลบบัญชี</a>
            </div>
          )}
          <a href="#" onClick={toggleLoginDropdown}>
            ลงชื่อเข้าใช้
          </a>
          {showLoginDropdown && (
            <div className="dropdown-content">
              <a className="textinsidebar" href="/Register">
                สมัครสมาชิก
              </a>
              <a className="textinsidebar" href="/Login">
                เข้าสู่ระบบ
              </a>
              <a className="textinsidebar" href="/">
                ลบบัญชี
              </a>
              <a className="textinsidebar" href="/Logout">
                ออกจาระบบ
              </a>
            </div>
          )}
        </div>

        <div className="hi"></div>
        <div id="main">
          <button
            className="openbtn"
            onClick={isSidebarOpen ? closeNav : openNav}
          >
            &#9776;{" "}
          </button>
        </div>
      </div>

      <div className="header"></div>
    </>
  );
}

export default Sidebar;
