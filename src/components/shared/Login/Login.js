import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "../../../config/firebase";

function Login() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(firebaseAuth, provider);
  };

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>
      <span role="img" aria-label="login" >Login with Google 👀🚀 </span> 
      </button>
    </>
  );
}

export default Login;