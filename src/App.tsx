import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import Dummy from "./routes/Dummy";
import Home from "./routes/Home";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dummy" element={<Dummy />} />
      </Routes>
    </>
  );
}

export default App;
