import React from "react";

function Home2({ username, picture }) {
  return (
    <>
      <div className="flex md:order-2 justify-end" style={{ backgroundColor: "#FFBB5C" }}>
        <div className="flex items-center">
          <img 
            src={picture} 
            alt="User profile" 
            className="rounded-full w-6 h-6 md:w-8 md:h-8 mr-2" // เปลี่ยนขนาดรูปภาพตามความต้องการ
          />
          <div>
            <span className="block text-xl font-bold">ยินดีต้อนรับ</span>
            <span className="block truncate text-sm font-medium">{username}</span>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Home2;