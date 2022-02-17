import React from "react";
import { Route, Routes } from "react-router-dom";
import Dummy from "./routes/Dummy";
import Home from "./routes/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dummy" element={<Dummy />} />
      </Routes>
    </>
  );
}

export default App;
