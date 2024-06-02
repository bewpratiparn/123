import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import Showuser from "../paeges/Showuser";

const NavbarSidebar = () => {
  return (
    <>
      <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        {/* Sidebar component */}
        <Sidebar />
      </nav>
    </>
  );
};

const Sidebar = () => {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showEditDropdown, settoggleEditDropdown] = useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [shopId, setShopId] = useState(null);
  const [isThai, setIsThai] = useState(true); // state to track the current language

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const toggleEditDropdown = () => {
    settoggleEditDropdown(!showEditDropdown);
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

  // Fetch shop ID from the API
  useEffect(() => {
    fetch("http://127.0.0.1:8000/shops/")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.shopId) {
          setShopId(data.shopId);
        }
      })
      .catch((error) => {
        console.error("Error fetching shop ID:", error);
      });
  }, []);

  const handleToggleLanguage = () => {
    setIsThai(!isThai);
  };

  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div>
      <div id="mySidebar" className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <select
          className="ml-9 rounded-lg"
          native
          value={isThai ? "th" : "en"}
          onChange={handleToggleLanguage}
          label="Select Language"
          inputProps={{
            name: "language",
            id: "language-select",
          }}
        >
          <option value="th">ไทย</option>
          <option value="en">English</option>
        </select>
        <a href="/Home">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAARZJREFUSEvVldsNwjAMRd1NYBOYBJgEMQlsApvAJsCRcpEbOY1bqR/4B+Qk91z5AYOtHMPK+jYHsDGzazF0MrNXxlwWIPFdEUV8n4FkAF5crsmlID1ALb41M3L38tmFTAEicZU9DWkBpsRnQSJARjwNqQEtcfLnb2OPpbkPM7uU75Pl8oB6FHVG/hnMvG+wvzNqvAewRDhU6Ex5XLNgBDl2ghz7QLzd218+A8A9DhHiISHHuGV0UwAZkBPBIwDu2QVC9+p3o0Nf4voiQiqHGqsS3VzZFgMyTfYlGk1mtAeREyAHNwS+4a3SpksUTGiYWlyi/wNoLLPO/T2/F80eMJKMIY2dE/p90jI2AXNEu3d7/2hdgd6FD/I5Wxnr0cXbAAAAAElFTkSuQmCC"
            alt="หน้าหลัก"
          />
          {isThai ? "หน้าหลัก" : "Home"}
        </a>

        <a href="/Translate">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMhJREFUSEvtldENgzAMRI9N2k3YpGWStpPAJnQT2IT2ohisEqLIivtF/pDwvdzZcho4n8ZZHxpwB9AbgDOAAcArVasBi0FcSgi5egKonYy7loMTUNR+iXvSU+XRA07jOlVegLXpJ4BRMG+uCa4LHtkIIZ1cRCzoiuZn+6kFMMbPLIDCcqNSxiUuS0IOm0y7FH8rVesS3Dngqk5F8vjCnqU21H87gEEjlDCaW+IS1QBysV+n1QHihlNEVy4AHVl4Qv/66FubnK37AGDPKRn4mzOpAAAAAElFTkSuQmCC"
            alt="แปลภาษา"
          />
          {isThai ? "แปลภาษา" : "Translate"}
        </a>

        <a href="#" onClick={toggleProfileDropdown}>
          {isThai ? "เพิ่มข้อมูลสำหรับร้าน" : "Add Data for Shop"}
          <img
            src="https://cdn.icon-icons.com/icons2/1659/PNG/512/3844438-hamburger-menu-more-navigation_110319.png"
            alt="คำอธิบายรูปภาพ"
            className="h-8 w-8"
          />
        </a>
        {showProfileDropdown && (
          <div className="dropdown-content">
            <a className="font1" href="/AddDataShop">
              {isThai ? "-เพิ่มข้อมูลร้านค้า" : "-Add Data Shop"}
            </a>
            <a className="font1" href="/AddFood">
              {isThai ? "-เพิ่มข้อมูลอาหาร" : "-Add Food"}
            </a>
          </div>
        )}
        <a href="#" onClick={toggleEditDropdown}>
          {isThai ? "แก้ไข้โปรไฟล์" : "Edit Profile"}
          <img
            src="https://cdn.icon-icons.com/icons2/1659/PNG/512/3844438-hamburger-menu-more-navigation_110319.png"
            alt="คำอธิบายรูปภาพ"
            className="h-8 w-8"
          />
        </a>
        {showEditDropdown && (
          <div className="dropdown-content">
            <a href={`/Editstore?shop_id=${shopId}`}>
              {isThai ? "-แก้ไข้ข้อมูลร้านค้า" : "-Edit Store Information"}
            </a>
            {/* <a href="/Notshowfood">{isThai ? "-ไม่แสดงรายการอาหาร" : "-Do Not Show Food List"}</a> */}
          </div>
        )}
        <a href="#" onClick={toggleLoginDropdown}>
          {isThai ? "ลงชื่อเข้าใช้" : "Log In"}
          <img
            src="https://cdn.icon-icons.com/icons2/1659/PNG/512/3844438-hamburger-menu-more-navigation_110319.png"
            alt="คำอธิบายรูปภาพ"
            className="h-8 w-8"
          />
        </a>
        {showLoginDropdown && (
          <div className="dropdown-content">
            <a href="/Login">{isThai ? "-เข้าสู่ระบบ" : "-Sign In"}</a>
            <a href="/Register">{isThai ? "-สมัครสมาชิก" : "-Register"}</a>
            <a href="/Logout">{isThai ? "-ออกจาระบบ" : "-Log Out"}</a>
            {/* <a href="/">{isThai ? "-ลบบัญชี" : "-Delete Account"}</a> */}
          </div>
        )}
      </div>
      <div className="custom-color-navbarsidebar" >
        <div id="main">
          <a href="/Home" className="flex items-center justify-center">
            <span className="self-center font-semibold text-white backdrop-blur-sm  ">
              {isThai ? "หน้าหลัก" : "Home"}
            </span>
          </a>
          <button
            className="openbtn"
            onClick={isSidebarOpen ? closeNav : openNav}
          >
            &#9776;{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarSidebar;
