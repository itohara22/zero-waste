import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (user) => {
    console.log(user);
    setIsLoggedIn(user);
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} loginHandler={loginHandler} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login loginHandler={loginHandler} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
