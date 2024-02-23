import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Navigate, useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [input, setInputs] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...input, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: input.username,
        password: input.password
      })
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/Login/", requestOptions);
      const result = await response.json();

      if (result.access_token) {
        localStorage.setItem('token', result.access_token);
        MySwal.fire({
          html: <i>{result.message}</i>,
          icon: 'success'
        }).then(() => {
          navigate('/home');
        });
      } else {
        MySwal.fire({
          html: <i>{result.message}</i>,
          icon: 'error'
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

     /* async function fetchlogin(){
        const response = await fetch('');
        const jsondata = await response.json();
      }*/

  return (
    <div className="flex justify-center  items-center-top h-screen  bg-gray-100 ">
      <div className="bg-white-screen p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          {}
          <div className="mb-4">
            <label className="block  text-gray-700 text-sm font-bold mb-2">
              Enter ID
            </label>
            <input
              className="w-full p-2 border rounded-md"
              name="username"
              type="text"
              value={input.username || ""}
              onChange={handleChange}
              placeholder="ID"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Enter Password
            </label>
            <input
              className="w-full p-2 border rounded-md"
              name="password"
              type="password"
              placeholder="********"
              value={input.password || ""}
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
      </div>
    </div>
  );
}

export default Login;
