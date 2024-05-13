import React, { useState } from 'react';
import './Sidebar.css';

const NavbarSidebar = () => {
  return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <Sidebar />
    </nav>
  );
};

const Sidebar = () => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDropdown = (dropdownType) => {
    if (dropdownType === 'profile') {
      setShowProfileDropdown(!showProfileDropdown);
    } else if (dropdownType === 'login') {
      setShowLoginDropdown(!showLoginDropdown);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div id="mySidebar" className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <a href="javascript:void(0)" className="closebtn" onClick={toggleSidebar}>&times;</a>
        <a href="/Home">
          <img src="..." alt="Home" />
          หน้าหลัก
        </a>
        <a href="/Translate">
          <img src="..." alt="แปลภาษา" />
          แปลภาษา
        </a>
        <Dropdown
          title="เพิ่มข้อมูลสำหรับร้าน"
          toggleDropdown={() => toggleDropdown('profile')}
          showDropdown={showProfileDropdown}
          items={[
            { text: 'เพิ่มข้อมูลร้านค้า', link: '/AddDataShop' },
            { text: 'เพิ่มข้อมูลอาหาร', link: '/AddFood' },
            { text: 'แสดงรายละเอียดข้อมูลร้านค้า', link: '/Fooddetails' }
          ]}
        />
        <Dropdown
          title="แก้ไข้โปรไฟล์"
          toggleDropdown={() => toggleDropdown('login')}
          showDropdown={showLoginDropdown}
          items={[
            { text: 'แก้ไข้ข้อมูลร้านค้า', link: '/Editstore' },
            { text: 'ไม่แสดงรายการอาหาร', link: '/Notshowfood' }
          ]}
        />
        <a href="/Login">ลงชื่อเข้าใช้</a>
        <a href="/Register">สมัครสมาชิก</a>
        <a href="/Logout">ออกจาระบบ</a>
        <a href="/">ลบบัญชี</a>
      </div>

      <div className="hi"></div>
      <div className="max-w-h-screen-xl p-1" style={{ backgroundColor: "#FFBB5C" }}>
        <div id="main">
          <a href="/Home" className="flex items-center justify-center w-full">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">หน้าหลัก</span>
          </a>
          <button className="openbtn" onClick={toggleSidebar}>&#9776; </button>
        </div>
      </div>
    </div>
  );
};

const Dropdown = ({ title, toggleDropdown, showDropdown, items }) => {
  return (
    <div>
      <a href="#" onClick={toggleDropdown}>
        {title}
        <img src="..." alt="คำอธิบายรูปภาพ" className="h-8 w-8" />
      </a>
      {showDropdown && (
        <div className="dropdown-content">
          {items.map((item, index) => (
            <a key={index} href={item.link}>{item.text}</a>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavbarSidebar;
