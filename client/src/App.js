import "./App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { AuthProvider, AuthContext } from "./AuthContext.jsx";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Login from './login/Login.jsx'
import ForgotPassword from './login/forgotPassword.jsx'
import Register from "./login/Register.jsx";
import Billing from "./billing/Billing.jsx";
import Notifications from "./notifications/Notifications.jsx";
import Tenants from "./tenants/Tenants.jsx"
import Dashboard from "./dashboard/Dashboard.jsx";
import Settings from "./settings/Settings.jsx";
import QuickActions from "./dashboard/Quickaction.jsx";
import Analytics from "./analytics/Analytics";



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <RoutesComponent />
        </Router>
      </AuthProvider>
    </div>
  );
  }

const RoutesComponent = () => {
  const { isAuthenticated, userId } = useContext(AuthContext);

  return (
    <div className="App">
    
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      {/* <Route path="*" element={<Navigate to="/" />}/> */}

      <Route
        path="/Dashboard"
        element={
          isAuthenticated ? (
            <Dashboard />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route
        path="/Settings"
        element={
          isAuthenticated ? (
            <Settings userId={userId} />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route
        path="/Analytics"
        element={
          isAuthenticated ? (
            <Analytics />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route
        path="/Notifications"
        element={
          isAuthenticated ? (
            <Notifications />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route
        path="/Billing"
        element={
          isAuthenticated ? (
            <Billing userId={userId} />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route
        path="/Tenants"
        element={
          isAuthenticated ? (
            <Tenants userId={userId} />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route
        path="/Customize"
        element={
          isAuthenticated ? (
            <QuickActions />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      
    </Routes>
      
    
    </div>
  );
}

export default App











