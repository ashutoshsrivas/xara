"use client";
import { Router, useRouter } from "next/router";
import { useAuthContext } from "../../lib/context/AuthContext";
import { useEffect, useState } from "react";
import  Mydrawer from "../components/Mydrawer";
const index = () => {
  const {
    user
  }: {
    user?: object | any;
  } = useAuthContext();

  const [email, setEmail] = user!=null?useState(user.email):useState("");
  const router = useRouter();
  
  useEffect(() => {
    if (!user) router.push("../");
  }, [user]);

  
  return (
    <div>
      <Mydrawer activetab="profile"></Mydrawer>
      <div className="container m-0-auto">
        <h1>My Profile</h1>  
        <p>Your current Primary email address is <span className="color-red">{email}</span></p>
      </div>
    </div>
  );
};

export default index;
