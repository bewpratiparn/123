import { useState } from "react";
import "flowbite";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

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
      const value = event.target.value;
      setInputs((values) => ({ ...values, [name]: value }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);

    const formData = new FormData();
    formData.append("firstname", inputs.firstname);
    formData.append("lastname", inputs.lastname);
    formData.append("username", inputs.username);
    formData.append("password", inputs.password);
    formData.append("phone", inputs.phone);
    formData.append("picture", inputs.picture);

    fetch("http://127.0.0.1:8000/register/", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "OK") {
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
          <div>
            <input
              type="file"
              name="picture"
              accept=".png,.jpeg"
              value={inputs.picture}
              onChange={handleChange}
            />
            {selectedFile && (
              <div>
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Selected Image"
                />
                <p>Selected file: {selectedFile.name}</p>
              </div>
            )}

<button disabled={!selectedFile} onClick={handleSubmit}>
  Upload Image
</button>
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
