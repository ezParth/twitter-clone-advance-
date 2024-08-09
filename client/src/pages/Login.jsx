import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  function login() {
    e.preventDefault()
    fetch("http://localhost:3000/login", {
      credentials: "include",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if(response.ok){
      setRedirect(true);
    }
  }
  if(redirect){
    return <Navigate to={"/"} />
  }
  return (
    <div>
      <div>Login</div>
      <form onSubmit={login}>
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input type="password" placeholder="Enter your password" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
