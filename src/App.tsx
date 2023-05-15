import React from "react";
import "./App.css";
import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./Layout";
import { Convo } from "./pages/Convo";
import { Privacy } from "./pages/Privacy";
function App() {
  return (

      <Routes>
        <Route path="convo" element={<Convo />} />
        <Route path="convo/privacy" element={<Privacy />} />
        <Route path="/" element={<Home />} />
      </Routes>
  );
}

export default App;
