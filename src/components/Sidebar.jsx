import React from 'react';
import './Sidebar.css';
import { Link } from "react-router-dom";
import axios from 'axios'; // Assuming you use axios for API calls

class Sidebar extends React.Component {
  state = {
    showProfileDropdown: false,
    showLoginDropdown: false,
    isSidebarOpen: false,
    isAuthenticated: false, // State to store authentication status

  };

  componentDidMount() {
    // Check if the user is authenticated when the component mounts
    this.checkAuthentication();
  }
// http://127.0.0.1:8000/show_all_food/

//  const handleClick = () => {
//   if (shopId) {
//     window.location.href = `/Editstore?shop_id=${shopId}`;
//   } else {
//     console.error("shop_id is not available");
//   }
// };
  checkAuthentication = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/authorize/');
      if (response.status === 200) {
        this.setState({ isAuthenticated: true });
      } else {
        this.setState({ isAuthenticated: false });
      }
    } catch (error) {
      this.setState({ isAuthenticated: false });
    }
  };

  toggleProfileDropdown = () => {
    this.setState(prevState => ({
      showProfileDropdown: !prevState.showProfileDropdown
    }));
  };

  toggleLoginDropdown = () => {
    this.setState(prevState => ({
      showLoginDropdown: !prevState.showLoginDropdown
    }));
  };

  openNav = () => {
    this.setState({ isSidebarOpen: true });
  }

  closeNav = () => {
    this.setState({ isSidebarOpen: false });
  }

  handleEditStoreClick = () => {
    if (!this.state.isAuthenticated) {
      alert('กรุณาล็อคอิน');
    }
  }

  render() {
    const { showProfileDropdown, showLoginDropdown, isSidebarOpen, shopId } = this.state;

    return (
      <div>
        <div id="mySidebar" className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
          <a href="/Home">หน้าร้านค้า</a>
          <a href="/Translate">แปลภาษา</a>
          <a href="#" onClick={this.toggleProfileDropdown}>เพิ่มข้อมูลสำหรับร้าน
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
          <a href="#" onClick={this.toggleLoginDropdown}>แก้ไข้โปรไฟล์
            <img
              src="https://cdn.icon-icons.com/icons2/1659/PNG/512/3844438-hamburger-menu-more-navigation_110319.png"
              alt="คำอธิบายรูปภาพ"
              className="h-8 w-8"
            />
          </a>
          {showLoginDropdown && (
            <div className="dropdown-content">
              <Link to={`/Editstore?shop_id=${shopId}`} onClick={this.handleEditStoreClick}>-แก้ไข้ข้อมูลร้านค้า</Link>
              <a href="/Notshowfood">-ไม่แสดงรายการอาหาร</a>
            </div>
          )}
          <a href="#" onClick={this.toggleLoginDropdown}>ลงชื่อเข้าใช้
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
          <button className="openbtn" onClick={isSidebarOpen ? this.closeNav : this.openNav}>&#9776; </button>
        </div>
      </div>
    );
  }
}

export default Sidebar;
