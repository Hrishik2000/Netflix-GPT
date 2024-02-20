import React, { useRef, useState } from "react";
import Header from "./Header";
import checkVaildData from "../utils/Validate";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addUser } from "../utils/UserSlice";
import { useDispatch } from "react-redux";

const Login_Signup = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const ToggleIsLoggedIn = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const HandelButtonClick = () => {
    //check validation of email & password
    const error = checkVaildData(
      email.current.value,
      password.current.value,
      name?.current?.value,
      isLoggedIn
    );
    //console.log(email);//can directly access as in same compoennet no need to get the mail & password into handelButtonClick function
    //console.log(password);
    setErrorMessage(error);

    //if error comes return from here & dont signup/signin
    if (error) return;

    if (!isLoggedIn) {
      //signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          //https://example.com/jane-q-user/profile.jpg
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/107874996?v=4",
          })
            .then(() => {
              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  displayName: displayName,
                  email: email,
                  photoURL: photoURL,
                })
              );
              navigate("/Browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          if (errorCode) {
            console.log(errorCode + " " + errorMessage);
            setErrorMessage("SignUp Failed" + errorMessage);
          }
        });
    } else {
      //signin logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/Browse");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          if (errorCode) {
            console.log(errorCode + " " + errorMessage);
            setErrorMessage("SignIn Failed-" + errorMessage);
          }
        });
    }
  };

  return (
    <div className="max-h-full max-w-full ">
      <Header />
      <div className="">
        <img
          alt="background img"
          className="absolute h-full w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className=" flex justify-center items-center h-screen">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className=" flex flex-col justify-center absolute  rounded-xl  bg-black bg-opacity-70 text-white  px-14 py-24  h-[35rem] w-[25rem]"
        >
          <h1 className=" font-semibold text-3xl mb-4">
            {isLoggedIn ? "Sign In" : "Sign Up"}
          </h1>

          {!isLoggedIn && (
            <input
              ref={name}
              className="p-3 rounded-lg bg-[#333333] w-full my-3 "
              placeholder="Full Name"
            ></input>
          )}
          <input
            ref={email}
            type="text"
            className="p-3 rounded-lg bg-[#333333] w-full my-3 "
            placeholder="Email"
          ></input>
          <input
            ref={password}
            type="password"
            className="p-3  rounded-lg bg-[#333333] w-full my-3"
            placeholder="Password"
          ></input>
          <p className="text-[#E50914] font-semibold  mt-2">{errorMessage}</p>
          <button
            onClick={HandelButtonClick}
            type="submit"
            className="bg-[#E50914] rounded-md px-3 py-2 my-7  "
          >
            {isLoggedIn ? "Sign In " : "Sign Up"}
          </button>

          <h3 className="mt-16 text-[#737373]">
            {isLoggedIn ? "New to Netflix?" : "Already has an Account?"}{" "}
            <span className="text-white">
              <button
                onClick={() => {
                  ToggleIsLoggedIn();
                }}
              >
                {isLoggedIn ? "Sign Up now" : "Sign In"}
              </button>
            </span>
          </h3>
          <h4 className=" my-6 text-[#737373] text-sm">
            {" "}
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </h4>
        </form>
      </div>
    </div>
  );
};

export default Login_Signup;
