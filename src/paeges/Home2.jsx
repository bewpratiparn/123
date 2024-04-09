import React from "react";
import "flowbite";
import { Avatar, Dropdown, Navbar } from 'flowbite-react';


function Home2() {
  
    return (
      
     
        
      <div className="flex md:order-2 justify-end" style={{ backgroundColor: "#FFBB5C" }}>

          
          <Avatar 
            label={
              <Avatar alt="User settings" img="https://scontent-xsp1-1.xx.fbcdn.net/v/t39.30808-1/312868771_1592586417824731_4531003693233489735_n.jpg?stp=dst-jpg_p240x240&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG-SYvdhi-KJz5rXTf7bggT2L_2n1NKS2TYv_afU0pLZM8qGjFpGk6K4NZhEZjunaK9rPwKr4GdW1cU9ea1q73z&_nc_ohc=eL91o42LBEUAX_UQZlw&_nc_ht=scontent-xsp1-1.xx&oh=00_AfDG-JCOveEXitxdU_Xx2eQC0Z4a0DfOL-YWWa-aGmsS9g&oe=6611960C" rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-xl font-bold ">ยินดีต้อนรับ</span>
              <span className="block truncate text-sm font-medium">ปฏิภาณ วงษ์แพทย์</span>
            </Dropdown.Header>
            </Avatar>
            
          
          
        </div>
        
     
    );
  }



export default Home2;
