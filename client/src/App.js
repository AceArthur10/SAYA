import "./Styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider, AuthContext } from "./AuthContext";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Analytics from "./Analytics";
import Notifications from "./Notifications";
import QuickActions from "./QuickActions";

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
    <Routes>
      <Route path="/" element={<Login />} />
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
  );
};


export default App;
