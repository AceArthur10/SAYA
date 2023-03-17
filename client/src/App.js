import "./App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './login/Login'
import ForgotPassword from './login/forgotPassword'
import Register from "./login/Register";

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











