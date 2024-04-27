import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import Home3 from "./Home3";


function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [input, setInputs] = useState({});
  const [username, setUsername] = useState(""); // เพิ่ม state เก็บชื่อผู้ใช้
  const handleLogin = () => {
    // อัปเดตสถานะการล็อคอินเป็น true
    setIsLoggedIn(true);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
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
        setUsername(input.username); // เซ็ตชื่อผู้ใช้เมื่อล็อกอินสำเร็จ
        MySwal.fire({
          html: <i>{result.message}</i>,
          icon: "success",
        }).then(() => {
          navigate("/Home");
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

  return (
    <div className="flex justify-center items-center-top h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
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
          <button onClick={handleLogin}>Login</button>
        </form>
        <a href="/register">Register</a>
      </div>
      {username && <Home3 username={username} />} {/* เรียก Home3 component และส่งชื่อผู้ใช้เข้าไป */}
    </div>
  );
}

export default Login;
