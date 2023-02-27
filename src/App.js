import React from "react";
import "./App.css";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

import { getAnalytics } from "firebase/analytics";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatRoom from "./components/shared/ChatRoom";
import { firebaseAuth } from "./config/firebase";
import  Logout  from "./components/shared/Logout";
import  Login  from "./components/shared/Login/";

getAnalytics();

function App() {
  const [user] = useAuthState(firebaseAuth);
  console.log(user)
  return (
     <div className="App">
      <header>
        <img
          className="logo"
          src={
          "https://www.bookmarks.design/media/image/hatchful.jpg"}
          alt=" 👀🚀"
        />
        
        {user ? <h2>{`Welcome ${user.displayName}`}</h2> : <></>}
        <Logout />
      </header>

      <section>{user ? <ChatRoom /> : <Login />}</section>
    </div>
  );
}

export default App;
