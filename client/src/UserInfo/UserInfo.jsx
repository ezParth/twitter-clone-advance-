import React, { useState } from "react";

function userInfo() {
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [location, setLocation] = useState("");
    const [website, setWebsite] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
  async function userInfo() {
    const response = await fetch("http://localhost:3000/userInfo", {
        method:"POST",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify({name, bio, location, website, dateOfBirth})
    })
  }
  return (
    <div>
      <form onSubmit={userInfo}>
        <label htmlFor="name">Name </label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <label htmlFor="bio">bio</label>
        <input type="text" value={bio} onChange={e => setBio(e.target.value)} />
        <label htmlFor="location">location</label>
        <input type="text" value={location} onChange={e => setLocation(e.target.value)} />
        <label htmlFor="website">Website</label>
        <input type="url" value={website} onChange={e => setWebsite(e.target.value)} />
        <label htmlFor="date of birth">Date of Birth</label>
        <input type="date" placeholder="dd-mm-yyyy" value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)} />
      </form>
    </div>
  );
}

export default userInfo;