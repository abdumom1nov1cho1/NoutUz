import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "./Pages/Home";
import Lenovo from "../src/Pages/Lenovo";
import Asus from "./Pages/Asus";
import Hp from "./Pages/Hp";
import Msi from "./Pages/Msi";
import Del from "./Pages/Del";
import Razer from "./Pages/Razer";
import Samsung from "./Pages/Samsung";
import Microsoft from "./Pages/Microsoft";
import Apple from "./Pages/Apple";
import Acer from "./Pages/Acer";
import Korzinka from "./Pages/Korzinka";
import Lg from "./Pages/Lg";
import Hyper from "./Pages/Hyper";
import Pnf from "./Pages/Pnf";
import Footer from "../src/Components/Footer/Footer";
import Admin from "./Components/Admin_panel/Admin";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lenovo" element={<Lenovo />} />
        <Route path="/asus" element={<Asus />} />
        <Route path="/dell" element={<Del />} />
        <Route path="/razer" element={<Razer />} />
        <Route path="/hp" element={<Hp />} />
        <Route path="/msi" element={<Msi />} />
        <Route path="/samsung" element={<Samsung />} />
        <Route path="/microsoft" element={<Microsoft />} />
        <Route path="/apple" element={<Apple />} />
        <Route path="/acer" element={<Acer />} />
        <Route path="/korzinka" element={<Korzinka />} />
        <Route path="/lg" element={<Lg />} />
        <Route path="/hyper" element={<Hyper />} />
        <Route path="*" element={<Pnf />} />
        <Route path="/userAdmin" element={<Admin />} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}
// ggo
export default App;
