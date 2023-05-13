import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from './pages/Home'
import { Layout } from './Layout';
import { Convo } from './pages/Convo';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="tryconvo" element={<Convo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
