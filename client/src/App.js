import "./App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './Login'
import ForgotPassword from './forgotPassword'
import Register from "./Register";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ForgotPassword" element={<ForgotPassword/>} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App











