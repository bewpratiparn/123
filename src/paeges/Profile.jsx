import React from "react";

function Profile({ username }) {
  return (
    <div className="">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <p>Welcome, {username}!</p>
        {/* ส่วนอื่นๆ ของโปรไฟล์อื่นๆ ที่คุณต้องการเพิ่ม */}
        
      </div>
    </div>
  );
}

export default Profile;
