import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://127.0.0.1:8000/authorize/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      username: inputs.username,
      password: inputs.password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/login/", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to login");
        }
        return response.json();
      })
      .then((result) => {
        localStorage.setItem("token", result.token);
        navigate("/Home");
        // แสดงข้อความแจ้งเตือนเมื่อเข้าสู่ระบบสำเร็จ
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
        // แสดงข้อความแจ้งเตือนเมื่อเข้าสู่ระบบไม่สำเร็จ
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Please check your username and password",
        });
      });
  };

  const handleLogout = () => {
    // ลบ token ที่เก็บใน localStorage
    localStorage.removeItem("token");
    // แสดงข้อความแจ้งเตือนเมื่อออกจากระบบ
    Swal.fire({
      icon: "success",
      title: "Logged out successfully",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      // เมื่อผู้ใช้กดปุ่มตกลงใน SweetAlert ให้นำไปยังหน้า Logout
      navigate("/Home");
    });
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
              type="text"
              name="username"
              value={inputs.username || ""}
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
              type="password"
              name="password"
              placeholder="**"
              value={inputs.password || ""}
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
        <a href="/register">Register</a>
        {user && (
          <div>
            <p>Welcome, {user.username}</p>
            <img
              src={user.picture}
              alt="Profile"
              style={{ width: '100px', height: '100px' }} // กำหนดขนาดเล็กลงเป็น 100px x 100px
            />
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
