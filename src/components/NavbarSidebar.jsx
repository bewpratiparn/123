import React, { useState } from 'react';
import './Sidebar.css';

const NavbarSidebar = ({ username, picture }) => {
  return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-h-screen-xl flex flex-wrap items-center justify-between mx-auto p-1" style={{ backgroundColor: "#FFBB5C" }}>

        <a href="/Home" className="flex items-center justify-center w-full">
          <img src="https://i.ibb.co/8NCWKFN/420970713-1319255045405174-2605956450177240696-n.png" className="h-20  mr-10" alt="" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">หน้าหลัก</span>
        </a>
        
        {/* Sidebar component */}
        <Sidebar username={username} picture={picture} />
        <div class="flex items-center space-x-6 rtl:space-x-reverse"> <p class="text-sm text-gray-500 dark:text-white ">ยินดีต้อนรับ</p> <span className="text-sm text-gray-500 dark:text-white">{username} {picture}</span> {/* Display username */} <a href="/Login" class="text-sm text-blue-600 dark:text-blue-500 hover:underline">Login</a> </div>
      </div>
    </nav>
  );
};

const Sidebar = ({ username, picture }) => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const toggleLoginDropdown = () => {
    setShowLoginDropdown(!showLoginDropdown);
  };

  const openNav = () => {
    setIsSidebarOpen(true);
  };

  const closeNav = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>
      <div id="mySidebar" className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
        
        
        <a href="/Home">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAARZJREFUSEvVldsNwjAMRd1NYBOYBJgEMQlsApvAJsCRcpEbOY1bqR/4B+Qk91z5AYOtHMPK+jYHsDGzazF0MrNXxlwWIPFdEUV8n4FkAF5crsmlID1ALb41M3L38tmFTAEicZU9DWkBpsRnQSJARjwNqQEtcfLnb2OPpbkPM7uU75Pl8oB6FHVG/hnMvG+wvzNqvAewRDhU6Ex5XLNgBDl2ghz7QLzd218+A8A9DhHiISHHuGV0UwAZkBPBIwDu2QVC9+p3o0Nf4voiQiqHGqsS3VzZFgMyTfYlGk1mtAeREyAHNwS+4a3SpksUTGiYWlyi/wNoLLPO/T2/F80eMJKMIY2dE/p90jI2AXNEu3d7/2hdgd6FD/I5Wxnr0cXbAAAAAElFTkSuQmCC" alt="Home" />
    หน้าหลัก
</a>


<a href="/Translate">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMhJREFUSEvtldENgzAMRI9N2k3YpGWStpPAJnQT2IT2ohisEqLIivtF/pDwvdzZcho4n8ZZHxpwB9AbgDOAAcArVasBi0FcSgi5egKonYy7loMTUNR+iXvSU+XRA07jOlVegLXpJ4BRMG+uCa4LHtkIIZ1cRCzoiuZn+6kFMMbPLIDCcqNSxiUuS0IOm0y7FH8rVesS3Dngqk5F8vjCnqU21H87gEEjlDCaW+IS1QBysV+n1QHihlNEVy4AHVl4Qv/66FubnK37AGDPKRn4mzOpAAAAAElFTkSuQmCC" alt="แปลภาษา" />
    แปลภาษา
</a>
        <a href="#" onClick={toggleProfileDropdown}>เพิ่มข้อมูลสำหรับร้าน
          <img
            src="https://cdn.icon-icons.com/icons2/1659/PNG/512/3844438-hamburger-menu-more-navigation_110319.png"
            alt="คำอธิบายรูปภาพ"
            className="h-8 w-8"
          />
        </a>
        {showProfileDropdown && (
          <div className="dropdown-content">
            <a href="/AddDataShop">-เพิ่มข้อมูลร้านค้า</a>
            <a href="/AddFood">-เพิ่มข้อมูลอาหาร</a>
            <a href="/Fooddetails">-แสดงรายละเอียดข้อมูลร้านค้า</a>
          </div>
        )}
        <a href="#" onClick={toggleLoginDropdown}>แก้ไข้โปรไฟล์
          <img
            src="https://cdn.icon-icons.com/icons2/1659/PNG/512/3844438-hamburger-menu-more-navigation_110319.png"
            alt="คำอธิบายรูปภาพ"
            className="h-8 w-8"
          />
        </a>
        {showLoginDropdown && (
          <div className="dropdown-content">
            <a href="/Editstore">-แก้ไข้ข้อมูลร้านค้า</a>
            <a href="/Notshowfood">-ไม่แสดงรายการอาหาร</a>
          </div>
        )}
        <a href="#" onClick={toggleLoginDropdown}>ลงชื่อเข้าใช้
          <img
            src="https://cdn.icon-icons.com/icons2/1659/PNG/512/3844438-hamburger-menu-more-navigation_110319.png"
            alt="คำอธิบายรูปภาพ"
            className="h-8 w-8"
          />
        </a>
        {showLoginDropdown && (
          <div className="dropdown-content">
            <a href="/Login">-เข้าสู่ระบบ</a>
            <a href="/Register">-สมัครสมาชิก</a>
            <a href="/Logout">-ออกจาระบบ</a>
            <a href="/">-ลบบัญชี</a>
          </div>
        )}
      </div>

      <div className="hi"></div>
      <div id="main">
        <button className="openbtn" onClick={isSidebarOpen ? closeNav : openNav}>&#9776; </button>
      </div>
    </div>
  );
};

export default NavbarSidebar;
