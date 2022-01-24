import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import React from "react";

import NavBar from "./components/NavBar";
import AccessForm from "./components/AccessForm";
import Home from "./Home";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [location, setLocation] = useState() // 1 is show search, 2 is people search
  let Users = [
    {
      email: "user@test.com",
      password: "pass",
      location: 1,
      level: 1,
    },
    {
      email: "admin@test.com",
      password: "pass",
      location: 1,
      level: 2,
    },
  ];

  useEffect(() => {
    let authed = sessionStorage.getItem("auth-details");
    authed ? setIsAuth(true) : setIsAuth(false);
    console.log("useEffect", authed);
  }, []);

  useEffect(() => {
    setLocation(JSON.parse(sessionStorage.getItem("auth-details")).location)
  }, [location]);
  

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
  const handleLogoutSubmit = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("auth-details");
    setIsAuth(false);
  };
  const handleLocationChange = (locationId) => {
    setLocation(locationId)
    let storage = JSON.parse(sessionStorage.getItem('auth-details'))
    storage.location = locationId
    sessionStorage.setItem('auth-details', JSON.stringify(storage))
  };

  return (
    <>
      <NavBar location={location} handleLocationChange={handleLocationChange} />
      {isAuth === false ? (
        <AccessForm
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          handleLoginSubmit={handleLoginSubmit}
        />
      ) : (
        <Home isAuth={isAuth} handleLogoutSubmit={handleLogoutSubmit}/>
      )}
    </>
  );
}
