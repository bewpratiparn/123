import React from "react";
import "flowbite";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { Routes, Route, useNavigate, Link } from "react-router-dom";

function Home2() {
  
    return (
      <Navbar fluid rounded>
        
        <div className="flex md:order-2 ml-auto">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img="https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/312868771_1592586417824731_4531003693233489735_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG-SYvdhi-KJz5rXTf7bggT2L_2n1NKS2TYv_afU0pLZM8qGjFpGk6K4NZhEZjunaK9rPwKr4GdW1cU9ea1q73z&_nc_ohc=WicL3q_NYMQAX9fyxUr&_nc_ht=scontent.fbkk5-4.fna&oh=00_AfAk8LwDOIv8nCvoYaxj31L2K33HkWkAqP0-cJfMiBludg&oe=6600880A" rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-xl font-bold ">ยินดีต้อนรับ</span>
              <span className="block truncate text-sm font-medium">ปฏิภาณ วงษ์แพทย์</span>
            </Dropdown.Header>
            <Dropdown.Item>หน้าหลัก</Dropdown.Item>
            <Dropdown.Item>ตั้งค่าบัญชี</Dropdown.Item>
            <Dropdown.Item>เเปลภาษา</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>ออกจากระบบ</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        {/*
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
          */}
      </Navbar>
    );
  }



export default Home2;
