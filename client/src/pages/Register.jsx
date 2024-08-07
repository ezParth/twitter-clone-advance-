import React, { useEffect, useState } from 'react'

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState('');

    async function register (e) {
        const response = await fetch('http://localhost:3000/register',{
            method: "POST",
            body: JSON.stringify({username, password}),
            headers: {"content-type": "application/json"}
        })
        if(response.ok){
            setRedirect(true)
        }else{
            alert("Registration falied :(")
        }
        if(redirect){
            return <Navigate to={"/"} />
        }
    }

  return (
    <div className='register-page'>
        <form className='register-form' onSubmit={register}>
        <div className='register-name'>Register</div>
        <div>
            <input type="text" placeholder='Enter your name...' value={username} onChange={e => setUsername(e.target.value)} />
        </div>
        <div>
            <input type="password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button className='submit-user'>Register</button>
        </form>
    </div>
  )
}

export default Register