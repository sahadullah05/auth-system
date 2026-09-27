import {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Dashboard/Home";
import UserDetailPage from "./pages/UserDetailPage";

const App = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/home" element={<Home />} />
          <Route path="/user/:id" element={<UserDetailPage />} />

      </Routes>

    </BrowserRouter>
  );
};

export default App;
