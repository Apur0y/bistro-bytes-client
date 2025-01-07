import React, { useEffect, useRef, useState } from "react";
import "./Login.css"; // Import the CSS for animation and styling
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';


const Login = () => {

  const captchaRef = useRef()
  const [disable, setDisable] = useState(null)

  useEffect(()=>{
    loadCaptchaEnginge(6); 

  },[])

  const handleLogin =(e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value
    console.log(email,password);

  }

  const handleCheck=()=>{
    const user_captch_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)){
setDisable(false)
    }
    else{

    }
  }

  return (
    <div className="hero bg-gradient min-h-screen flex items-center justify-center">
      <div className="glass-card shadow-xl rounded-lg w-11/12 max-w-lg p-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Login to access your account and explore our services.
        </p>
        <form onSubmit={handleLogin}>
          <div className="form-control mb-4">
            <label className="label mb-2">
              <span className="label-text font-medium text-gray-700">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full rounded-md"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label mb-2">
              <span className="label-text font-medium text-gray-700">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full rounded-md"
              required
            />
            <div className="mt-2 text-right">
              <a href="#" className="text-sm text-primary hover:underline">
                Forgot password?
              </a>
            </div>
          </div>
          <div className="form-control mb-4">
            <label className="label mb-2">
            <LoadCanvasTemplate />
            </label>
            <input
              type="password"
              name="password"
              placeholder="Type the captcha"
              ref={captchaRef}
              className="input input-bordered w-full rounded-md"
              required
            />
       
          </div>
          <button onClick={handleCheck} className="btn">Check</button>
          <div className="form-control mt-6">
            <button disabled={disable} className="btn btn-primary w-full py-3 text-white font-bold rounded-md hover:bg-blue-700">
              Login
            </button>
          </div>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{" "}
          <a href="#" className="text-primary font-medium hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
