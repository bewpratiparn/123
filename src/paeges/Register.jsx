import { useState } from "react";
import "flowbite";
import ReactDOM from "react-dom/client";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import { withEmotionCache } from "@emotion/react";

function Register() {
  const Navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [inputs, setInputs] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (event) => {
    const name = event.target.name;
    if (name === "picture") {
      setSelectedFile(event.target.files[0]);
    } else {
      const value = event.target.value;
      setInputs((values) => ({ ...values, [name]: value }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("firstname", inputs.firstname);
    formData.append("lastname", inputs.lastname);
    formData.append("username", inputs.username);
    formData.append("password", inputs.password);
    formData.append("phone", inputs.phone);
    if (selectedFile) {
      formData.append("picture", selectedFile);
    }

    const requestOptions = {
      method: "POST",
      body: formData,
    };

    fetch("http://127.0.0.1:8000/register/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          MySwal.fire({
            html: <i>{result}</i>,
            icon: "success",
          }).then(() => {
            Navigate("/Login");
          });
        } else {
          MySwal.fire({
            html: <i>เกิดข้อผิดพลาด</i>,
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
  return (
    <div className="flex justify-center items-center-top h-screen bg-gray-100">
      <div className="bg-white-screen p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">ลงทะเบียน</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              ชื่อ
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="text"
              name="firstname"
              placeholder="ชื่อ"
              value={inputs.firstname || ""}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              นามสกุล
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="text"
              name="lastname"
              placeholder="นามสกุล"
              value={inputs.lastname || ""}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              เบอร์โทรศัพท์
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="text"
              name="phone"
              placeholder="เบอร์โทรศัพท์"
              value={inputs.phone || ""}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              ชื่อผู้ใช้
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="text"
              name="username"
              placeholder="ชื่อผู้ใช้"
              value={inputs.username || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
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
          <div>
            <input type="file" name="picture" onChange={handleChange} />
            {selectedFile && (
              <div>
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Selected Image"
                />
                <p>ไฟล์ที่เลือก: {selectedFile.name}</p>
              </div>
            )}
            <button disabled={!selectedFile}>อัปโหลดรูปภาพ</button>
          </div>
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
            type="submit"
          >
            ลงทะเบียน
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
