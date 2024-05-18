import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Frontend/Head/Header";
import Home from "./Frontend/Head/Home";
import Cardformat from "./Frontend/Head/Cardformat";
import SignUp from "./Frontend/Accountlogin/SignUp";
import Login from "./Frontend/Accountlogin/Login";

function CallingHeaderAndCardformat() {
  return (
    <>
      <Header />
      <Cardformat />
    </>
  );
}
function CallingLoginandSignup() {
  return (
    <>
      <Login />
      <SignUp />
    </>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<CallingLoginandSignup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/account" element={<CallingHeaderAndCardformat />} />
          <Route path="/logout" element={<CallingLoginandSignup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
