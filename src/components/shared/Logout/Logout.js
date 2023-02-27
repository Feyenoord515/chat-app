import React from "react";
import { firebaseAuth } from "../../../config/firebase";

function Logout() {
  return (
    firebaseAuth.currentUser && (
      <button className="sign-out" onClick={() => firebaseAuth.signOut()}>
       <span role="img" aria-label="hello" > 👋🏽 </span>
      </button>
    )
  );
}

export default Logout;