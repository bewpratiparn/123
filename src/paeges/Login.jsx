import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import Home2 from "./Home2"; 

function Login() {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [input, setInputs] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [picture, setPicture] = useState(""); // เปลี่ยนชื่อ prop เป็น picture

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      const user = localStorage.getItem("username");
      setUsername(user);

      fetchUserProfile(user)
        .then((profileData) => {
          setPicture(profileData.picture); // กำหนดค่า prop picture จากข้อมูลโปรไฟล์
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });

      navigate("/Login");
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...input, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!input.username || !input.password) {
      MySwal.fire({
        html: <i>Please enter username and password</i>,
        icon: "error",
      });
      return;
    }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: input.username,
        password: input.password,
      }),
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/login/", requestOptions);
      const result = await response.json();

      if (response.ok) {
        localStorage.setItem("token", result.access_token);
        localStorage.setItem("username", input.username);
        setIsLoggedIn(true);
        setUsername(input.username);
        MySwal.fire({
          html: <i>{result.message}</i>,
          icon: "success",
        }).then(() => {
          navigate("/Login");
        });
      } else {
        throw new Error(result.message || "Failed to login");
      }
    } catch (error) {
      console.error("Error:", error);
      MySwal.fire({
        html: <i>Something went wrong. Please try again later.</i>,
        icon: "error",
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    setUsername("");
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center-top w-screen h-screen bg-gray-100">
      <div className="bg-white p-8 w-screen h-screen  rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        {!isLoggedIn && (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                className="w-full p-2 border rounded-md"
                name="username"
                type="text"
                value={input.username || ""}
                onChange={handleChange}
                placeholder="Username"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Enter Password
              </label>
              <input
                className="w-full p-2 border rounded-md"
                name="password"
                type="password"
                placeholder="********"
                value={input.password || ""}
                onChange={handleChange}
              />
            </div>
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
              type="submit"
            >
              Login
            </button>
          </form>
        )}
        {isLoggedIn && (
          <Home2 isLoggedIn={isLoggedIn} username={username} picture={picture} handleLogout={handleLogout} /> // ส่ง prop picture ไปยัง Home2 component
        )}
        {!isLoggedIn && <Link to="/register">Register</Link>}
      </div>
    </div>
  );
}

export default Login;
