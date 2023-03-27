import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="nav">
        <li>
          <Link to="/Dashboard">Overview</Link>
        </li>
        <li>
          <Link to="/Tenants">Tenants</Link>
        </li>
        <li>
          <Link to="/Billing">Billing</Link>
        </li>
        <li>
          <Link to="/Analytics">Analytics</Link>
        </li>
        <li>
          <Link to="/Hardware">Hardware</Link>
        </li>
        <li>
          <Link to="/Notifications">Notifications</Link>
        </li>
        <li>
          <Link to="/Settings">Settings</Link>
        </li>
        <li>
          <Link to="/">Logout</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
