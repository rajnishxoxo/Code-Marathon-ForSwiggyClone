import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { emailPasswordValidation, validation } from "../Utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import{addUser} from '../Utils/userSlice';



const Login = () => {
  const Useremail = useRef();
  const Userpassword = useRef();
  const Username = useRef();

  const [signUp, setSignUp] = useState(false);
  const [authMessage, setAuthMessage] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();


  const handleLogin = (e) => {
    e.preventDefault();

    const message = emailPasswordValidation(
      Useremail.current.value,
      Userpassword.current.value
    );

    setAuthMessage(message);

    if (message) return;

    signInWithEmailAndPassword(
      auth,
      Useremail.current.value,
      Userpassword.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setAuthMessage(errorCode + errorMessage);
      });
  };

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

    if (message) return;

    createUserWithEmailAndPassword(
      auth,
      Useremail.current.value,
      Userpassword.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        const{uid,email} = user;
        console.log(email);
        dispatch(addUser({ uid: uid, email: email}))
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setAuthMessage(errorCode + errorMessage);
      });

      
      
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
                  <p className="text-2xl font-normal m-2 text-red-600">
                    {authMessage}
                  </p>
                </>
              ) : (
                <>
                  <button
                    className="bg-red-700 w-full h-10 hover:bg-red-600 text-white font-bold rounded"
                    onClick={handleLogin}
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
