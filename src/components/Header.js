import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store =>store.user);
 console.log(user)

  const signOutLogic = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <div className=" z-20 absolute  w-full flex justify-between ">
        <img
          alt="logo"
          className="h-20 "
          src={"https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"}
        ></img>

        {user && <div className="flex">
          <img  className="h-10 w-10 rounded-md m-3" alt="Profile Img" src={user?.photoURL}></img>
          <button onClick={signOutLogic} className="text-white  bg-[#FF010B] p-2 h-10 rounded-md m-3">
            Sign Out
          </button>
        </div>}
      </div>
    </>
  );
};

export default Header;
