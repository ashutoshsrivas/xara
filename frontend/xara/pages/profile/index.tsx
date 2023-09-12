"use client";
import { Router, useRouter } from "next/router";
import { useAuthContext } from "../../lib/context/AuthContext";
import { useEffect, useState } from "react";
import Mydrawer from "../components/Mydrawer";
const index = () => {
  const {
    user,
  }: {
    user?: object | any;
  } = useAuthContext();

  const [email, setEmail] = user != null ? useState(user.email) : useState("");
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("../signin?callback=profile");
  }, [user]);

  return (
    <div>
      <Mydrawer activetab="profile"></Mydrawer>
      <div className="container m-0-auto">
        <div className="px-5">
          <h1>My Profile</h1>
          <p>
            Your current Primary email address is{" "}
            <span className="color-red">{email}</span>
          </p>
        </div>

        <div className="px-5">
          <p className="profile-subheading">Basic information</p>
          <p>
            Update some personal information. Your address will never be
            publicly available.
          </p>
        </div>
        <div className="px-5 py-2">
          <div className="container row">
            <div className="col-sm-4">
              <label className="profile-label ">First Name</label>
            </div>
            <div className="col-sm-4">
              <input
                className="profile-input form-control my-2"
                type="text"
                placeholder="First Name"
              ></input>
            </div>
            <div className="col-sm-4">
              <input
                className="profile-input form-control my-2"
                type="text"
                placeholder="Last Name"
              ></input>
            </div>
          </div>
        </div>
        <div className="px-5 py-2">
          <div className="container row">
            <div className="col-sm-4 my-2">
              <label>Email</label>
            </div>
            <div className="col-sm-8">
              <input
                className="profile-input form-control "
                type="email"
                placeholder="Email"
              ></input>
            </div>
          </div>
        </div>
        
        <div className="px-5 py-2">
          <div className="container row">
            <div className="col-sm-4 my-2">
              <label>Phone</label>
            </div>
            <div className="col-sm-8">
              <input
                className="profile-input form-control "
                type="text"
                placeholder="Phone"
              ></input>
            </div>
          </div>
        </div>
        
        <div className="px-5 py-2">
          <div className="container row">
            <div className="col-sm-4">
              <label>Address</label>
            </div>
            <div className="col-sm-8">
              <textarea className="form-control my-2">
              </textarea>
            </div>
          </div>
        </div>
        
        <div className="px-5 py-2">
          <div className="container row">
            <div className="col-sm-4">
              
            </div>
            <div className="col-sm-8">
            <button className="btn-save p-2"> Save Changes </button>
            </div>
          </div>
        </div>
        
        

      </div>
    </div>
  );
};

export default index;
