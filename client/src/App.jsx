import React from "react";
import Header from "./pages/Header";
import Posts from "./pages/Posts";
import Tweets from "./pages/Tweets";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home"
import UserInfo from "./UserInfo/UserInfo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
        <Route path="/userInfo" element={<UserInfo />} />
    </Routes>
  );
}

export default App;
