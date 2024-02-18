import React, { useState } from "react";
import Header from "./Header";

const Login_Signup = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const ToggleIsLoggedIn = () => {
    setIsLoggedIn(!isLoggedIn);
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
        <div class="absolute inset-0 bg-black opacity-50"></div>
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
              className="p-3 rounded-lg bg-[#333333] w-full my-3 "
              placeholder="Full Name"
            ></input>
          )}
          <input
            className="p-3 rounded-lg bg-[#333333] w-full my-3 "
            placeholder=" Email or phone number"
          ></input>
          <input
            className="p-3   rounded-lg bg-[#333333] w-full my-3"
            placeholder="Password"
          ></input>

          <button
            type="submit"
            className="bg-[#E50914] rounded-md px-3 py-2 my-7  "
          >
            {" "}
            Sign In
          </button>

          <h3 className="mt-16 text-[#737373]">
            {isLoggedIn ? "New to Netflix?" : "Already has an Account?"}{" "}
            <span className="text-white">
              {" "}
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
