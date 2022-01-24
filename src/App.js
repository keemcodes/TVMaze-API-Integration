import "./App.css";
import { useState, useEffect } from "react";
import React from "react";

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

	]

  useEffect(() => {
    let authed = sessionStorage.getItem('auth-details')
    authed ? setIsAuth(true) : setIsAuth(false)
    console.log('useEffect', authed)
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
		const results = Users.filter(user => user.email === email && user.password === password);
		if (results.length > 0) {
      sessionStorage.setItem('auth-details', JSON.stringify(results[0]));
      setIsAuth(true)
      return
    }
    alert('login failed')
    sessionStorage.removeItem('auth-details')
    setIsAuth(false)
  };

  return (
    <div className="login-page">
      <h2>Login In</h2>
      <form autoComplete="off" onSubmit={handleLoginSubmit}>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            autoComplete="new-password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        <p>{`${isAuth}`}</p>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
