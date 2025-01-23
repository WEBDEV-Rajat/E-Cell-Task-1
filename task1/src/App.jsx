import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Grid from "./pages/Grid";
import SquidFail from "./pages/SquidFail";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Grid/>}/>
        <Route path="/squid-fail" element={<SquidFail/>}/>
      </Routes>    
    </div>
  )
}

export default App
