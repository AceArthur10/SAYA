import "./Styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider, AuthContext } from "./AuthContext";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

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
      <Route path="/Register" element={<Register />} />
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
    </Routes>
  );
};

export default App;
