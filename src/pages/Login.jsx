import React, { useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./../firebase.config";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleLoginGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        setUser(loginUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLoginGithub = ()=>{
    signInWithPopup(auth, githubProvider)
    .then((result)=>{
      const loggedUser = result.user;
      setUser(loggedUser)
      console.log(loggedUser)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  const handleLogout = () => {
    signOut(auth)
      .then((result) => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-center mt-20 gap-20">
      {user ? (
        <button
          className="bg-blue-500 text-white text-2xl font-bold py-1 px-4 rounded-lg shadow-md transition ease-in-out duration-300 hover:scale-105"
          onClick={handleLogout}
        >
          LogOut
        </button>
      ) : (
        <div>
          <button
          className="bg-green-500 mr-10 text-white text-2xl font-bold py-1 px-4 rounded-lg shadow-md transition ease-in-out duration-300 hover:scale-105"
          onClick={handleLoginGoogle}
        >
          Google Login
        </button>
        <button
          className="bg-green-500 text-white text-2xl font-bold py-1 px-4 rounded-lg shadow-md transition ease-in-out duration-300 hover:scale-105"
          onClick={handleLoginGithub}
        >
          Github Login
        </button>
        </div>
      )}

      {user && (
        <div>
          <h1>User : {user?.displayName}</h1>
          <p>Email : {user?.email}</p>
          <img src={user.photoURL} alt="photo" />
        </div>
      )}
    </div>
  );
};

export default Login;
