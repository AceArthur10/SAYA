import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Notifications() {
  const data = JSON.parse(Axios.get("http://localhost:3001/notifications"));
  console.log(data);
  const displayData = data.map((info) => {
    return (
      <tr>
        <td>{info.id}</td>
        <td>{info.meter_number}</td>
        <td>{info.message}</td>
        <td>{info.unit_number}</td>
        <td>{info.notification_type}</td>
        <td>{info.notification_local_time}</td>
      </tr>
    );
  });
  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Meter Num</th>
            <th>Mensaje</th>
            <th>Unit Num</th>
            <th>Notification Type</th>
            <th>Noti Local Time</th>
          </tr>
        </thead>
        <tbody>{displayData}</tbody>
      </table>
    </div>
  );
}

export default Notifications;
