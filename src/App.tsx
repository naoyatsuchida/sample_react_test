import React from 'react';
import { Route, Routes ,useNavigate} from 'react-router-dom';
import Home from "./pages/Home";
import './App.css';
import Tabs from './pages/Tabs';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <button onClick={() => { navigate('/') }} >home</button>
      <button onClick={()=>{navigate('/tab')}} >tab</button>
          <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/tab" element={<Tabs />} />
          </Routes>


    </div>
  );
}

export default App;
