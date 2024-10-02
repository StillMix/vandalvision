import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Loading from "./Loading/Loading";
import Main from "./Main/Main";
import SignIn from "./SignIn/SignIn";
import Admin from "./Admin/Admin";


function App() {
  const [loading, setLoading] = useState(true)
   setTimeout(() => {
      setLoading(false)
      localStorage.setItem("arc", "Lilo2")
   }, 3000)

  return (
    <div className="App">
      {loading ? <Loading /> : null}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
