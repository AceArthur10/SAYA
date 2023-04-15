import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/saya-logo.png";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import "./Sidebar.css";

const Sidebar = () => {
  const { setIsAuthenticated, setUserId } = useContext(AuthContext);

  // Import useHistory
  const navigate = useNavigate();

  // Create the logout function
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserId(null);
    navigate.push("/");
  };

  return (
    <div className="sidebar">
      <img src={logo} alt="saya" className="saya" />
      <ul className="nav">
        <li className="Overview">
          <Link to="/Dashboard">Overview</Link>
        </li>
        <li className="Tenants">
          <Link to="/Tenants">Tenants</Link>
        </li>
        <li className="Billing">
          <Link to="/Billing">Billing</Link>
        </li>
        <li className="Analytics">
          <Link to="/Analytics">Analytics</Link>
        </li>
        <li className="Hardware">
          <Link to="/Hardware">Hardware</Link>
        </li>
        <li className="Notifications">
          <Link to="/Notifications">Notifications</Link>
        </li>
        <hr className="solid"></hr>
        <li className="Settings">
          <Link to="/Settings">Settings</Link>
        </li>
        <li className="Logout">
          <Link to="/" onClick={handleLogout}>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
