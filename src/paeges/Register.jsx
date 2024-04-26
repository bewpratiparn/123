import { useState } from "react";
import "flowbite";
import ReactDOM from "react-dom/client";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import { withEmotionCache } from "@emotion/react";

function Register() {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      firstname: inputs.firstname,
      lastname: inputs.lastname,
      username: inputs.username,
      password: inputs.password,
      phone: inputs.phone,
      picture: inputs.picture,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/register/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result && result.status === 'ok') {
          MySwal.fire({
            html: <i>{result.message}</i>,
            icon: "success",
          }).then((value) => {
            navigate("/");
          });
        } else {
          MySwal.fire({
            html: <i>{result.message}</i>,
            icon: "error",
          });
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="flex justify-center items-center-top h-screen bg-gray-100">
      <div className="bg-white-screen p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Firstname
            </label>
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
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Lastname
            </label>
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
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone
            </label>
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
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="text"
              name="username"
              placeholder="username"
              value={inputs.username || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Password
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="password"
              name="password"
              placeholder="*******"
              value={inputs.password || ""}
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="file"
              id="files"
              name="picture"
              value={inputs.picture || ""}
              onChange={handleChange}
            />
          </div>
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
