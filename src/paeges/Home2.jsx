import React from "react";
import Login from "./Login";
import { Link } from "react-router-dom";

function Home2({ isLoggedIn, username, picture, handleLogout }) {
  return (
    <div className="flex justify-end" style={{ backgroundColor: "#FFBB5C" }}>
      {isLoggedIn ? (
        <div className="flex items-center">
          <img src={picture} alt="User profile" className="rounded-full w-8 h-8 mr-2" />
          <div>
            <span className="block text-xl font-bold ">ยินดีต้อนรับ</span>
            <span className="block truncate text-sm font-medium">{username}</span>
          </div>
          <button
            className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div></div> // Placeholder for when user is not logged in
      )}
    </div>
  );
}


export default Home2;
