import React from 'react';
import './Sidebar.css';

class Sidebar extends React.Component {
  state = {
    showProfileDropdown: false,
    showLoginDropdown: false
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
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  closeNav = () => {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  render() {
    return (
      <div>
        <div id="mySidebar" className="sidebar">
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
          {this.state.showProfileDropdown && (
            <div className="dropdown-content">
              <a href="/AddDataShop">เพิ่มข้อมูลร้านค้า</a>
              <a href="/AddFood">เพิ่มข้อมูลอาหาร</a>
              <a href="/Fooddetails">แสดงรายละเอียดข้อมูลร้านค้า</a>
            </div>
          )}
          <a href="#" onClick={this.toggleLoginDropdown}>แก้ไข้โปรไฟล์
            <img
              src="https://cdn.icon-icons.com/icons2/1659/PNG/512/3844438-hamburger-menu-more-navigation_110319.png"
              alt="คำอธิบายรูปภาพ"
              className="h-8 w-8"
            />
          </a>
          {this.state.showLoginDropdown && (
            <div className="dropdown-content">
              <a href="/Editstore">แก้ไข้ข้อมูลร้านค้า</a>
              <a href="/Notshowfood">ไม่แสดงรายการอาหาร</a>
            </div>
          )}
          
          <a href="#" onClick={this.toggleLoginDropdown}>ลงชื่อเข้าใช้
            <img
              src="https://cdn.icon-icons.com/icons2/1659/PNG/512/3844438-hamburger-menu-more-navigation_110319.png"
              alt="คำอธิบายรูปภาพ"
              className="h-8 w-8"
            />
          </a>
          {this.state.showLoginDropdown && (
            <div className="dropdown-content">
              <a href="/Login">เข้าสู่ระบบ</a>
              <a href="/Register">สมัครสมาชิก</a>
              <a href="/Logout">ลงชื่อเข้าใช้</a>
              <a href="/">ลบบัญชี</a>
            </div>
          )}
        </div>


        <div className="hi">
              
            </div>
        <div id="main">
          <button className="openbtn" onClick={this.openNav}>&#9776; </button>
        </div>
        
      </div>
    );
  }
}

export default Sidebar;