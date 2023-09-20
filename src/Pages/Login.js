import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { validation } from "../Utils/validation";

const Login = () => {
  const Useremail = useRef();
  const Userpassword = useRef();
  const Username = useRef();

  const [signUp, setSignUp] = useState(false);
  const [authMessage , setAuthMessage] = useState('')

  const handleToggle = () => {
    if (signUp === true) {
      setSignUp(false);
    } else {
      setSignUp(true);
    }
  };

  const handleSignUP = (e) => {
    e.preventDefault();

    const message = validation(
      Username.current.value,
      Useremail.current.value,
      Userpassword.current.value
    );

    setAuthMessage(message);
    
  };
  return (
    <>
      <div>
        <h1 className="text-center m-4 p-4 text-4xl font-semibold border-b-2">
          Login
        </h1>

        <div>
          <div className="w-1/2 m-auto">
            <form className="m-auto">
              {signUp && (
                <input
                  ref={Username}
                  type="text"
                  placeholder="Full Name"
                  className="w-full mb-4 p-3 rounded bg-gray-600 text-white"
                />
              )}

              <input
                ref={Useremail}
                type="email"
                placeholder="Email"
                className="w-full mb-4 p-3 rounded bg-gray-600 text-white"
              />

              <input
                ref={Userpassword}
                type="password"
                placeholder="Password"
                className="w-full mb-4 p-3 rounded  bg-gray-600 text-white"
              />

              {signUp ? (
                <>
                <button
                  onClick={handleSignUP}
                  className="bg-red-700 w-full h-10 hover:bg-red-600 text-white font-bold rounded"
                >
                  Sign-Up
                </button>
                <p className="text-2xl font-normal m-2 text-red-600">{authMessage}</p>
                </>
              ) : (
                <>
                <button
                  
                  className="bg-red-700 w-full h-10 hover:bg-red-600 text-white font-bold rounded"
                >
                  Log in
                </button>
                <p>{authMessage}</p>
                </>
              )}
              {signUp ? (
                <p
                  className="text-red-700 font-bold text-2xl mb-4 cursor-pointer mt-5"
                  onClick={handleToggle}
                >
                  Existing User ? Login Now
                </p>
              ) : (
                <p
                  className="text-red-700 font-bold text-2xl mb-4 cursor-pointer mt-5"
                  onClick={handleToggle}
                >
                  New user ? Sign up now.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
