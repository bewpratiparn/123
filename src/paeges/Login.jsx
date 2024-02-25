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
      const response = await fetch("http://127.0.0.1:8000/docs#/default/login_Login__post", requestOptions);
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
/*
import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {setToken, fetchToken} from './Auth.jsx';
 
export default function Login(){
    const navigate = useNavigate();
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
  
    const handleSubmit = () => {
        if(username.length === 0){
          alert("Username has left Blank!");
        }
        else if(password.length === 0){
          alert("password has left Blank!");
        }
        else{
            console.log('axios')
            axios.post('', {
                username: username,
                password: password
            })
            .then(function (response) {
                console.log(response);
                //console.log(response.data);
                alert(response.data["message"])
                if (response.data["message"]=="Login failed") {
                    alert("Login failed");
                }else { 
                    if(response.data.token){
                        setToken(response.data.token)
                        navigate("/Home");
                    }
                }
            })
            .catch(function (error) {
                console.log(error, 'error');
            });
        }
    }
  return (
    <div>
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card">
              <div className="card-body p-5">
              {
                fetchToken() 
                ? (
                    <p>You are logged in!</p>
                )
                : (
                    <p>Login Account!</p>
                )
              } 
                <form>
                   
                  <div className="form-outline mb-4">
                    <label className="form-label">Your User Name</label>
                    <input type="text" className="form-control form-control-lg" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                  </div>
                   
                  <div className="form-outline mb-4">
                    <label className="form-label">Your Password</label>
                    <input type="text" className="form-control form-control-lg" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                   
 
                  <div className="d-flex justify-content-center">
                  <input type="button" className="btn btn-success btn-lg" name="submit" id="submit" value="Login" onClick={handleSubmit} />
                  </div>
  
                </form>
            </div>
            </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}
*/