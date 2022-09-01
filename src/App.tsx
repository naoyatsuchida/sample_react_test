import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import './App.css';
import Tabs from './pages/Tabs';
import ApiTest from './pages/ApiTest';

function App() {

  return (
    <div className="App">

          <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/tab" element={<Tabs />} />
             <Route path="/api" element={<ApiTest />} />
          </Routes>


    </div>
  );
}

export default App;
