import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      firstname: inputs.firstname,
      lastname: inputs.lastname,
      phone: inputs.phone,
      username: inputs.username,
      password: inputs.password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/register/", requestOptions);
      const result = await response.json();

      if (response.ok) {
        MySwal.fire({
          html: <i>{result.message}</i>,
          icon: "success",
        }).then((value) => {
          navigate("/Login");
        });
      } else {
        MySwal.fire({
          html: <i>{result.message}</i>,
          icon: "error",
        });
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
      <div className="bg-white-screen p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Firstname</label>
            <input
              className="w-full p-2 border rounded-md"
              type="text"
              name="firstname"
              placeholder="Firstname"
              value={inputs.firstname || ""}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Lastname</label>
            <input
              className="w-full p-2 border rounded-md"
              type="text"
              name="lastname"
              placeholder="Lastname"
              value={inputs.lastname || ""}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
            <input
              className="w-full p-2 border rounded-md"
              type="text"
              name="phone"
              placeholder="Phone number"
              value={inputs.phone || ""}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <input
              className="w-full p-2 border rounded-md"
              type="text"
              name="username"
              placeholder="Username"
              value={inputs.username || ""}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              className="w-full p-2 border rounded-md"
              type="password"
              name="password"
              placeholder="Password"
              value={inputs.password || ""}
              onChange={handleChange}
            />
          </div>

          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md" type="submit">
            Register
          </button>

          <div className="mt-4">
            <p>
              Already have an account? <Link to="/login" className="text-blue-500 font-semibold">Login here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
