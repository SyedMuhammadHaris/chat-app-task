import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />
     <div className="pages">
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<Register />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
      </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
