import { useState } from "react";
import "flowbite";
import ReactDOM from "react-dom/client";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import { withEmotionCache } from "@emotion/react";
import "./Register.css";

function Register() {
  const Navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [inputs, setInputs] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (event) => {
    const name = event.target.name;
    if (event.target.name === "picture") {
      setSelectedFile(event.target.files[0]);
    } else {
      const name = event.target.name;
      const value = event.target.value;
      setInputs((values) => ({ ...values, [name]: value }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      const base64String = reader.result;

      const data = {
        firstname: inputs.firstname,
        lastname: inputs.lastname,
        username: inputs.username,
        password: inputs.password,
        phone: inputs.phone,
        picture: base64String,
      };

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        redirect: "follow",
      };

      fetch("http://127.0.0.1:8000/register/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result) {
            MySwal.fire({
              html: <i>{result.message}</i>,
              icon: "success",
            }).then((value) => {
              Navigate("/Login");
            });
          } else {
            MySwal.fire({
              html: <i>{result.message}</i>,
              icon: "error",
            });
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          MySwal.fire({
            html: <i>เกิดข้อผิดพลาด</i>,
            icon: "error",
          });
        });
    };
  };

  return (
    <>
    <div className="flex justify-center items-center bg-white">
    <div className="flex flex-row justify-center items-center-top  bg-white mb-6">
      <div
        className="custom-box bg-white-screen  rounded-lg shadow-lg "
        // style={{
        //   width: selectedFile ? "60em" : "60rem", // หรือค่าความกว้างที่ต้องการเมื่อไม่มีไฟล์ที่เลือก
        //   height: selectedFile ? "50rem" : "20rem", // หรือค่าความสูงที่ต้องการเมื่อไม่มีไฟล์ที่เลือก
        // }}
      >
        <form className="position" onSubmit={handleSubmit}>
          <h1 className="h1 ">Register</h1>

          <div className="mb-4 ">
            <label className=" block text-gray-700 text-sm font-bold mb-2">
              Firstname
            </label>
            <input
              className="w-full p-2 border rounded-md "
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
              placeholder="*****"
              value={inputs.password || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              className="mt-1"
              type="file"
              name="picture"
              value={inputs.picture || ""}
              onChange={handleChange}
            />
          </div>
          {selectedFile && (
            <div className="showpicture">
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Selected Image"
                style={{ maxWidth: "100px", maxHeight: "100px" }}
              />
              <span className="namepicture">{selectedFile.name}</span>
            </div>
          )}
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md mt-5"
            type="submit"
          >
            Register
          </button>
          <a href="/Login" className="block text-center mt-5 underline underline-offset-2 ">
            Login
          </a>
        </form>
      </div>
    </div>
    </div>
    </>
  );
}

export default Register;
