import { Routes, Route } from "react-router-dom"

import './App.css';
import { Home } from "./Pages/Home"

function App() {
  return (
    <div className="bg-[#041F31] h-full">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
