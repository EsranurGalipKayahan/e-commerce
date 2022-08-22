import React, { useState } from "react";
import "../styles/login.css";
import { Error } from "./common/Error";
import { List } from "./common/List";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  const [privateContent, setPrivateContent] = useState([]);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    const response = await fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: email,
        password,
      }),
    });
    setEmail("");
    setPassword("");
    const result = await response.json();
    setToken(response.ok ? result.token : null);
    setError(!response.ok ? result.message : null);
  };
  const handlePrivate = async () => {
    const response = await fetch("http://127.0.0.1:5000/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      headers: {
        authorization: `BAREAR ${token}`,
      },
    });

    const result = await response.json();

    setPrivateContent(response.ok ? result : null);
    setError(!response.ok ? result.message : null);
  };

  return (
    <div className="wrapper">
      <div className="form-login">
        <div className="row1">
          <label htmlFor="email">Email</label>
          <input
            required
            value={email}
            type={"text"}
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
              setError(null);
            }}
          />
        </div>
        <div className="row2">
          <label htmlFor="password">Password</label>
          <input
            required
            value={password}
            type={"password"}
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
              setError(null);
            }}
          />
        </div>
        <div className="login-btn">
          <input type={"button"} value={"Submit"} onClick={handleClick} />
        </div>
      </div>
      {token && <button onClick={handlePrivate}>Private Content</button>}
      {privateContent.length > 0 && <List list={privateContent} />}
      {error && <Error message={error} />}
    </div>
  );
};
