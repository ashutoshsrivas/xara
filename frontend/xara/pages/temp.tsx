import React, { useEffect } from "react";
import { useAuthContext } from "../lib/context/AuthContext";
import { User } from "firebase/auth";
import { useRouter } from "next/router";
import GoogleIcon from "@mui/icons-material/Google";

const index = () => {
  const {
    user,
    googleSignIn,
    logOut,
    createuser,
  }: {
    user?: object | any;
    googleSignIn?: () => void;
    logOut?: () => void;
    createuser?: (id: string, pass: string) => void;
  } = useAuthContext();
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      await googleSignIn?.();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut?.();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) router.push("/profile");
  }, [user]);

  return (
    <div className="sign-bg container-fluid row">
      <video muted loop autoPlay className="video">
        <source src="bg.mp4" type="video/mp4" />
      </video>
      <div className="p-5 col-sm-6 text-center">
        <div className="loginbox">
          <h2 className="text-white">Welcome! Lets Get Started</h2>
          <br></br>
          <br></br>
          <br></br>
          <button className="btn btn-primary" onClick={handleSignIn}>
            {" "}
            <GoogleIcon></GoogleIcon> Login With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
