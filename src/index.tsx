import React from "react";
import ReactDOM from "react-dom";
import "./styles/reset.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import Dummy from "./routes/dummy";

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="dummy" element={<Dummy />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
