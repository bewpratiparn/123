import React, { useState } from 'react';
import "flowbite";

function Login() {

  const [id, setId] = useState();
  const [password, setPassword] = useState();


  const loginSucces = () =>{

  [] };


  return (
    <div className="flex justify-center  items-center-top h-screen  bg-gray-100 ">
      <div className="bg-white-screen p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form>
          <div className="mb-4">
            <label className="block  text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              ID
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="email"
              id="email"
              placeholder="ID"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="password"
              id="password"
              placeholder="********"
            />
          </div>
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;