import { useState } from 'react';
import "flowbite";
import ReactDOM from 'react-dom/client';



function Register() {
 const [inputs, setInputs] = useState({});


 const handleChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  setInputs(values => ({...values, [name]: value}))
}

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(inputs);
}

  return (
    <div className="flex justify-center items-center-top h-screen bg-gray-100">
      <div className="bg-white-screen p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <form onSubmit={handleSubmit}>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" >
              id
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="text"
              name="id"
              placeholder="id"
              value={inputs.id || ""}
              onChange={handleChange}
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" >
              Enter Password
            </label>
            <input
              className="w-full p-2 border rounded-md"
              name="password"
              type="password"
              placeholder="********"
              value={inputs.password || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Phone
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="number"
              name="phone"
              placeholder="Phone"
              value={inputs.phone || ""}
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