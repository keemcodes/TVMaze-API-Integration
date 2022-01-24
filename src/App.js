import "./App.css";
import { useState } from "react";
import React from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let Users = [
		{
			email: "user@email.com",
			password: "pass",
			level: 1,
		},
		{
			email: "admin@email.com",
			password: "pass",
			level: 2,
		},

	]

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
			alert('hi')
			console.log(results)
		}
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
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
