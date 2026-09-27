import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
    const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white p-8 rounded-lg shadow-md w-96">

        <h1 className="text-2xl font-bold text-center mb-6"> Login</h1>

        <form onSubmit={handleSubmit}>

          
          <div className="mb-4">
            <label className="block mb-2"> Email
            </label>

            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border p-2 rounded" />


          </div>

      
          <div className="mb-4">
            <label className="block mb-2"> Password </label>

            <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}className="w-full border p-2 rounded" />


          </div>

         
          <button  type="submit"  className="w-full bg-blue-500 text-white p-2 rounded"> Login</button>

        </form>

        <p className="text-center mt-4"> Don't have an account?{" "}
          <span className="text-blue-500 cursor-pointer"  onClick={() => navigate("/Signup")}>
            Sign Up</span>
        </p>

      </div>

    </div>
  );
};

export default Login;