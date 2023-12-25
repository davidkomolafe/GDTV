import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Screens/SignUp/SignUp";
import Login from "./Screens/Login/Login";
import Layout from "./Layout/Layout";
import Catalog from "./Screens/Catalog/Catalog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Layout />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </Router>
  );
}

export default App;
