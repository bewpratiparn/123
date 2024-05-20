import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    phone: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    if (name === "picture") {
      setSelectedFile(files[0]);
    } else {
      setInputs((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    if (
      !inputs.firstname ||
      !inputs.lastname ||
      !inputs.username ||
      !inputs.password ||
      !inputs.phone ||
      !selectedFile
    ) {
      MySwal.fire({
        html: <i>กรุณากรอกข้อมูลให้ครบถ้วน</i>,
        icon: "error",
      });
      return;
    }

    Object.keys(inputs).forEach((key) => {
      formData.append(key, inputs[key]);
    });
    formData.append("picture", selectedFile);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/register/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
            
          },
        }
      );
      if (response.data) {
        MySwal.fire({
          html: <i>{response.data}</i>,
          icon: "success",
        }).then(() => {
          navigate("/Login");
        });
      } else {
        MySwal.fire({
          html: <i>เกิดข้อผิดพลาด</i>,
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      MySwal.fire({
        html: <i>เกิดข้อผิดพลาด</i>,
        icon: "error",
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">ลงทะเบียน</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {["firstname", "lastname", "phone", "username"].map((field) => (
            <div className="mb-4" key={field}>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                {field === "firstname"
                  ? "ชื่อ"
                  : field === "lastname"
                  ? "นามสกุล"
                  : field === "phone"
                  ? "เบอร์โทรศัพท์"
                  : "ชื่อผู้ใช้"}
              </label>
              <input
                className="w-full p-2 border rounded-md"
                type="text"
                name={field}
                placeholder={
                  field === "firstname"
                    ? "ชื่อ"
                    : field === "lastname"
                    ? "นามสกุล"
                    : field === "phone"
                    ? "เบอร์โทรศัพท์"
                    : "ชื่อผู้ใช้"
                }
                value={inputs[field] || ""}
                onChange={handleChange}
              />
            </div>
          ))}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              รหัสผ่าน
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
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              อัปโหลดรูปภาพ
            </label>
            <input type="file" name="picture" onChange={handleChange} />
            {selectedFile && (
              <div>
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Selected"
                  className="my-4"
                />
                <p>ไฟล์ที่เลือก: {selectedFile.name}</p>
              </div>
            )}
          </div>
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
            type="submit"
            disabled={!selectedFile}
          >
            ลงทะเบียน
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
