import React from "react";
import Header from "./pages/Header";
import Posts from "./pages/Posts";
import Tweets from "./pages/Tweets";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
