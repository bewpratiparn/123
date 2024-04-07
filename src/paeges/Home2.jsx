import React from "react";
import "flowbite";
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

function Home2() {
  
    return (
      
      <Navbar fluid rounded >
        
        <div className="flex md:order-2 ml-auto">
          
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img="https://scontent-xsp1-1.xx.fbcdn.net/v/t39.30808-1/312868771_1592586417824731_4531003693233489735_n.jpg?stp=dst-jpg_p240x240&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG-SYvdhi-KJz5rXTf7bggT2L_2n1NKS2TYv_afU0pLZM8qGjFpGk6K4NZhEZjunaK9rPwKr4GdW1cU9ea1q73z&_nc_ohc=eL91o42LBEUAX_UQZlw&_nc_ht=scontent-xsp1-1.xx&oh=00_AfDG-JCOveEXitxdU_Xx2eQC0Z4a0DfOL-YWWa-aGmsS9g&oe=6611960C" rounded />
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
            <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-language"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/Home"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                หน้าเมนูอาหาร
              </Link>
            </li>
            <li>
              <Link
                to="/Translate"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                แปลภาษา
              </Link>
            </li>

            


           
<li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                img="https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/312868771_1592586417824731_4531003693233489735_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG-SYvdhi-KJz5rXTf7bggT2L_2n1NKS2TYv_afU0pLZM8qGjFpGk6K4NZhEZjunaK9rPwKr4GdW1cU9ea1q73z&_nc_ohc=C-xMF-nLZQkAX9n-vxG&_nc_ht=scontent.fbkk5-4.fna&oh=00_AfAF8JLlFF1RQ_x5tPl0f4S9hrCDib0U-v8TWNw_Gd0OKA&oe=65F4AA8A"
                className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                ตั้งค่าบัญชี <img src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" alt="คำอธิบายรูปภาพ" className="h-5 w-5" />{" "}
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                  stroke-width="2"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                id="dropdownNavbar"
                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
              
                  
                  
                  <div>
                    <li aria-labelledby="dropdownNavbarLink">
                      <button
                        id="doubleDropdownButton"
                        data-dropdown-toggle="doubleDropdown"
                        data-dropdown-placement="right-start"
                        type="button"
                        className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        เพิ่มข้อมูลสำหรับร้าน
                        <svg
                          className="w-2.5 h-2.5 ml-2.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                          
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>

                      <div
                        id="doubleDropdown"
                        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                      >
                        <ul
                          className="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="doubleDropdownButton"
                        >
                          <li>
                            <Link
                              to="/AddDataShop"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                            >
                              เพิ่มข้อมูลร้านค้า
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/AddFood"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                            >
                              เพิ่มข้อมูลอาหาร
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </div>

                  <div>
                    <li aria-labelledby="dropdownNavbarLink">
                      <button
                        id="doubleDropdownButton"
                        data-dropdown-toggle="doubleDropdown2"
                        data-dropdown-placement="right-start"
                        type="button"
                        className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        แก้ไข้โปรไฟล์
                        <svg
                          className="w-2.5 h-2.5 ml-2.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>

                      <div
                        id="doubleDropdown2"
                        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                      >
                        <ul
                          className="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="doubleDropdownButton"
                        >
                          <li>
                            <Link
                              to="/Editstore"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                            >
                              เเก้ไขข้อมูลร้านค้า
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Notshowfood"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                            >
                              ไม่แสดงรายการอาหาร
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Fooddetails"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                            >
                              แสดงรายละเอียดข้อมูลร้านค้า
                            </Link>
                          </li>

                          

                        </ul>
                      </div>
                    </li>
                  </div>

                  <div>
                    <li aria-labelledby="dropdownNavbarLink">
                      <button
                        id="doubleDropdownButton"
                        data-dropdown-toggle="doubleDropdown3"
                        data-dropdown-placement="right-start"
                        type="button"
                        className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        ลงชื่อเข้าใช้
                        <svg
                          className="w-2.5 h-2.5 ml-2.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>

                      <div
                        id="doubleDropdown3"
                        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                      >
                        <ul
                          className="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="doubleDropdownButton"
                        >
                          <li>
                            <Link
                              to="/Login"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                            >
                              เข้าสู่ระบบ
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Register"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                            >
                              สมัครสมาชิก
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Home"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                            >
                              ออกจากระบบ
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                            >
                              ลบบัญชี
                            </Link>
                          </li>

                          

                         


                        </ul>
                      </div>
                    </li>
                  </div>

                  
                  


                </ul>
               {/* 
                <div className="py-1">
                  {" "}
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    {" "}
                    ออกจากระบบ{" "}
                  </a>{" "}
                </div>
                */}
              </div>
            </li>
   
          




          </ul>





         
        </div>
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
