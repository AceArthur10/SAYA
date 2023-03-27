import "./App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './Login'
import ForgotPassword from './ForgotPassword';
import Register from "./Register";
import Dashboard from "./Dashboard";
import Settings from "./Settings"

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ForgotPassword" element={<ForgotPassword/>} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </Router>

    </div>

  );
}

export default App



