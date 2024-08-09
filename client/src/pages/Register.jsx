import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function register(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-type": "application/json" },
    });
    if (response.ok) {
      setRedirect(true);
      console.log("redirecting");
    } else {
      alert("Registration falied :(");
    }
  }
  if (redirect) {
    return <Navigate to={"/userInfo"} />;
  }

  return (
    <div className="register-page">
      <form className="register-form" onSubmit={register}>
        <h2>Register</h2>

        <input
          type="text"
          placeholder="Enter your name..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="submit-user">Register</button>
      </form>
    </div>
  );
}

export default Register;