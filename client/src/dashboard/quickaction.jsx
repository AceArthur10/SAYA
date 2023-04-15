import React from "react";
import "./Quickaction.css";

function Quickaction() {
  return (
    <div className="quickaction">
      <button className="quick-action-button">
        <a href="/threshold">Set Threshold</a>
      </button>
      <button className="quick-action-button">
        <a href="/emailNotification">Send Email Notification</a>
      </button>
      <button className="quick-action-button">
        <a href="/addTenant">Add New Tenant</a>
      </button>
      <button className="quick-action-button">
        <a href="/exportReport">Export Report</a>
      </button>
    </div>
  );
}

export default Quickaction;
