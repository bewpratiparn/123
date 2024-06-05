import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { Icon } from "@iconify/react";

const NavbarSidebar = () => {

  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar-sidebar");
      navbar.style.top = `${window.scrollY}px`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 navbar-sidebar">
      <Sidebar />
    </nav>
  );
};

const Sidebar = () => {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showEditDropdown, setToggleEditDropdown] = useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [shopId, setShopId] = useState(null);
  const [isThai, setIsThai] = useState(true);

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const toggleEditDropdown = () => {
    setToggleEditDropdown(!showEditDropdown);
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

  return (
    <div>
      <div id="mySidebar" className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <div className="custom-select777">
          <select value={isThai ? "th" : "en"} onChange={handleToggleLanguage}>
            <option value="th" className="thai777">ไทย</option>
            <option value="en" className="eng777">English</option>
          </select>
          {isThai ? (
            <img src="https://cdn.pixabay.com/photo/2013/07/12/17/58/thailand-152711_1280.png" alt="Thailand" />
          ) : (
            <img src="https://www.tornok.com/wp-content/uploads/2015/03/uk-flag.png" alt="UK" />
          )}
        </div>
        <a href="/Home">
          <div className="outterlineHome">
            <div className="iconHeaderbeforetoggle">
              <Icon icon="tabler:home" className="mr-5" />
              {isThai ? "หน้าหลัก" : "Home"}
            </div>
          </div>
        </a>
        <a href="/Translate">
          <div className="outterlineHome">
            <div className="iconHeaderbeforetoggle">
              <Icon icon="mdi:translate" className="mr-5" />
              {isThai ? "แปลภาษา" : "Translate"}
            </div>
          </div>
        </a>
        <a href="#" onClick={toggleProfileDropdown}>
          <div className="outlineaddshop">
            <div className="iconHeaderbeforetoggle">
              <Icon icon="mdi:shop" className="mr-5 text-5xl " />
              {isThai ? "เพิ่มข้อมูลสำหรับร้าน" : "Add Data for Shop"}
            </div>
          </div>
        </a>
        {showProfileDropdown && (
          <div className="dropdown-content">
            <a className="font1" href="/AddDataShop">
              <div className="icon-wrapperaddshop">
                <Icon icon="mdi:shop-plus-outline" className="mr-4" />
                {isThai ? "เพิ่มร้านค้า" : "Add Data Shop"}
              </div>
            </a>
            <a className="font1" href="/AddFood">
              <div className="icon-wrapperaddshop">
                <Icon icon="mdi:food" className="mr-4" />
                {isThai ? "เพิ่มอาหาร" : "Add Food"}
              </div>
            </a>
          </div>
        )}
        <a href="#" onClick={toggleEditDropdown}>
          <div className="outlineaddAndEdit">
            <div className="iconHeaderbeforetoggle">
              <Icon icon="mdi:food" className="mr-3 text-2xl" />
              {isThai ? "แก้ไข้ข้อมูล" : "Edit"}
            </div>
          </div>
        </a>
        {showEditDropdown && (
          <div className="dropdown-content">
            <a href={`/Editstore?shop_id=${shopId}`}>
              <div className="icon-wrapperaddshop">
                <Icon icon="mdi:food" className="mr-5" />
                {isThai ? "แก้ไข้ข้อมูลร้านค้า" : "Edit Store Information"}
              </div>
            </a>
          </div>
        )}
        <a href="#" onClick={toggleLoginDropdown}>
          <div className="outlineaddAndEdit">
            <div className="iconHeaderbeforetoggle">
              <Icon icon="material-symbols:tv-signin-outline" className="mr-2" />
              {isThai ? "ลงชื่อเข้าใช้" : "Sign In"}
            </div>
          </div>
        </a>
        {showLoginDropdown && (
          <div className="dropdown-content">
            <a href="/Login">
              <div className="icon-wrapperaddshop">
                <Icon icon="material-symbols:login" />
                {isThai ? "เข้าสู่ระบบ" : "Login"}
              </div>
            </a>
            <a href="/Register">
              <div className="icon-wrapperaddshop">
                <Icon icon="mdi:register-outline" />
                {isThai ? "สมัครสมาชิก" : "Register"}
              </div>
            </a>
            <a href="/Logout">
              <div className="icon-wrapperaddshop">
                <Icon icon="ri:logout-box-line" />
                {isThai ? "ออกจากระบบ" : "Log Out"}
              </div>
            </a>
          </div>
        )}
      </div>
      <div className="custom-color-navbarsidebar">
        <div id="main">
          <a href="/Home" className="flex items-center justify-center">
            <span className="self-center font-semibold text-white backdrop-blur-sm">
              {isThai ? "หน้าหลัก" : "Home"}
            </span>
          </a>
          <button className="openbtn" onClick={isSidebarOpen ? closeNav : openNav}>
            &#9776;
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarSidebar;
