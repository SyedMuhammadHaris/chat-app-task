import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";



function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />
     <div className="pages">
      <Routes>

        <Route  path="/" element={<SignIn />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
      </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
