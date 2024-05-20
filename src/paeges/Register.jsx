import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

function Register() {
  const Navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [inputs, setInputs] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = async (event) => {
    const name = event.target.name;
    if (event.target.name === "picture") {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = async () => {
        setSelectedFile(file);
        const compressedImage = await compressImage(reader.result);
        setImagePreview(compressedImage);
        setInputs((values) => ({ ...values, picture: compressedImage }));
      };
      reader.readAsDataURL(file);
    } else {
      const value = event.target.value;
      setInputs((values) => ({ ...values, [name]: value }));
    }
  };

  const compressImage = (imageDataUrl) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        const maxWidth = 800;
        const maxHeight = 600;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            const reader = new FileReader();
            reader.onloadend = () => {
              resolve(reader.result);
            };
            reader.readAsDataURL(blob);
          },
          "image/jpeg",
          0.7
        ); // Adjust image quality if necessary
      };
      img.src = imageDataUrl;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      // If no file is selected
      return;
    }

    // Compress the image before sending
    const compressedImage = await compressImage(selectedFile);
    const formData = new FormData();
    formData.append("firstname", inputs.firstname);
    formData.append("lastname", inputs.lastname);
    formData.append("username", inputs.username);
    formData.append("password", inputs.password);
    formData.append("phone", inputs.phone);
    formData.append("picture", compressedImage);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/register/",
        {
          method: "POST",
          body: formData,
        }
      );
      const result = await response.json();

      // Handle response accordingly
      if (result) {
        MySwal.fire({
          html: <i></i>,
          icon: "error",
        }).then(() => {
          Navigate("/Login");
        });
      } else {
        MySwal.fire({
          html: <i>{result.message}</i>,
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error accordingly
      MySwal.fire({
        html: <i>เกิดข้อผิดพลาด</i>,
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
              placeholder="***"
              value={inputs.password || ""}
              onChange={handleChange}
            />
          </div>
          <input type="file" name="picture" onChange={handleChange} />

          {imagePreview && (
            <div>
              <img src={imagePreview} alt="Selected Image" />
            </div>
          )}

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
