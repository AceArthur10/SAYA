import "./App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './login/Login'
import ForgotPassword from './login/forgotPassword'
import Register from "./login/Register";
import Billing from "./billing/Billing-page";
import Notifications from "./notifications/Notifications";
import Tenants from "./tenants/Tenants"


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ForgotPassword" element={<ForgotPassword/>} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Billing" element={<Billing />} />
        <Route path="/Notifications" element={<Notifications />} />
        <Route path="/Tenants" element={<Tenants />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App











