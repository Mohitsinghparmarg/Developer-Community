import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

const Login = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginForm, setLoginForm] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(BASE_URL + "/login", { emailId, password }, { withCredentials: true });
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
      console.log(err?.response?.data || "Something went wrong");
    }
  };

  const handleSignup = async () => {
    try {
      const res = await axios.post(BASE_URL + "/signup", { firstName, lastName, emailId, password }, { withCredentials: true });
      dispatch(addUser(res.data.data));
      return navigate("/profile");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
      console.log(err?.response?.data || "Something went wrong");
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-r from-gray-800 to-gray-900'>
      <div className="card bg-gray-700 text-primary-content w-full max-w-md p-6 rounded-2xl shadow-2xl">
        <div className="card-body">
          <h2 className="card-title justify-center text-3xl font-bold mb-6 text-blue-400">{isLoginForm ? "Login" : "Sign Up"}</h2>
          {!isLoginForm && (
            <>
              <input type="text" className="input input-bordered mb-4 p-3" value={firstName} placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
              <input type="text" className="input input-bordered mb-4 p-3" value={lastName} placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
            </>
          )}
          <input type="email" className="input input-bordered mb-4 p-3" value={emailId} placeholder="Email" onChange={(e) => setEmailId(e.target.value)} />
          <input type="password" className="input input-bordered mb-4 p-3" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <p className='text-red-500 mb-4'>{error}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary w-full py-3 text-lg font-semibold" onClick={isLoginForm ? handleLogin : handleSignup}>
              {isLoginForm ? "Login" : "Sign Up"}
            </button>
            <p className='cursor-pointer text-blue-400 mt-4 mx-12' onClick={() => setLoginForm((value) => !value)}>
              {isLoginForm ? "New User? Sign Up Here" : "Existing User? Login Here"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;