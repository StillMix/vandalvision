import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Loading from "./Loading/Loading";
import Main from "./Main/Main";

function App() {
  const [loading, setLoading] = useState(true)
   setTimeout(() => {
      setLoading(false)
   }, 3000)

  return (
    <div className="App">
      {loading ? <Loading /> : null}
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
