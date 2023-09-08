import React from "react";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <>
     
      <div >
        <h1 className="text-center m-4 p-4 text-4xl font-semibold border-b-2">Login</h1>
        
        <div >
          <div className="w-full m-auto" >
            <form className="m-auto">
              <div   className="w-full m-auto">
                <label for="display-4">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
              </div>
              <div>
                <label for="floatingPassword display-4">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
              </div>
              <div>
                <p>New Here?Register</p>
              </div>
              <div >
                <button type="submit" disabled>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
   
    </>
  );
};

export default Login;