import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import React from "react";

import AccessForm from "./AccessForm";
import Home from "./Home";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  let Users = [
    {
      email: "user@test.com",
      password: "pass",
      level: 1,
    },
    {
      email: "admin@test.com",
      password: "pass",
      level: 2,
    },
  ];

  useEffect(() => {
    let authed = sessionStorage.getItem("auth-details");
    authed ? setIsAuth(true) : setIsAuth(false);
    console.log("useEffect", authed);
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const results = Users.filter(
      (user) => user.email === email && user.password === password
    );
    if (results.length > 0) {
      sessionStorage.setItem("auth-details", JSON.stringify(results[0]));
      setIsAuth(true);
      return;
    }
    alert("login failed");
    sessionStorage.removeItem("auth-details");
    setIsAuth(false);
  };

  return (
    <>
      {isAuth === false ? (
        <AccessForm
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          handleLoginSubmit={handleLoginSubmit}
        />
      ) : (
        <Home isAuth={isAuth} />
      )}
    </>
  );
}
