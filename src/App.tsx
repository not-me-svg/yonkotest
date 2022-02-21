import React from "react";
import { Route, Routes } from "react-router-dom";
import Dummy from "./routes/Dummy";
import Home from "./routes/Home";
import ScrollToTop from "./helpers/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="dummy" element={<Dummy />} />
        </Routes>
      </ScrollToTop>
    </>
  );
}

export default App;
