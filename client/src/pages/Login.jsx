import React, { useState } from 'react'

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState('');

    fetch('http://localhost:3000/login',{
        credentials: "include",
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username, password}),
    })

  return (
    <div>
      <div>Login</div>
      <form onSubmit={login}>
        <input type="text" placeholder='Enter your name'value={username} onChange={e => setUsername(e.target.value)}/>
        <input type='password' placeholder='Enter your password' />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login