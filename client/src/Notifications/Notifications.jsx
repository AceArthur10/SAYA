import Axios from "axios";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Notifications.css";
import { useEffect } from "react";

function Notifications() {
  const [notificationList, setNotificationList] = useState([]);
  // const [id, setID] = useState("");
  // const [meter_number, setMeterNumber] = useState("");
  // const [message, setMessage] = useState("");
  // const [unit_number, setUnitNumber] = useState("");
  // const [notification_type, setNotificationType] = useState("");
  // const [notification_local_time, setTime] = useState("");

  // const addNotification = () => {
  //   Axios.post("http://localhost:3001/create", {
  //     meter_number: meter_number,
  //     message: message,
  //     unit_number: unit_number,
  //     notification_type: notification_type,
  //     notification_local_time: notification_local_time,
  //   }).then(() => {
  //     setNotificationList([
  //       ...notificationList,
  //       {
  //         meter_number: meter_number,
  //         message: message,
  //         unit_number: unit_number,
  //         notification_type: notification_type,
  //         notification_local_time: notification_local_time,
  //       },
  //     ]);
  //   });
  // };

  useEffect(() => {
    Axios.get("http://localhost:3001/notifications").then((response) => {
      setNotificationList(response.data);
    });
  }, []);

  return (
    <div>
    <Sidebar/>
    <label className="NotiManager">Notification Mangager</label> 
    <button className="CreateNew">Create new Notification</button>
    <button className="Enabled">Notifications Enabled?</button>
    <label className="NotiHistory">Notification History</label>
    <label className="Search">Search (Enter minimum 3 letters)</label>
    <label className="ToDate">To Date</label>

    <input type="text" className="SearchBy" placeholder="Search by Gateway or Meter"></input>
    <input type="text" className="FromDate" placeholder="From Date"></input>
    <input type="text" className="DateTo"></input>

    <div >
      <table style={{ borderCollapse: "collapse", border: "1px solid black" }}className="notiTable">
        <thead>
          <tr>
            <th style={{ border: "1px solid black" }}>Meter Num</th>
            <th style={{ border: "1px solid black" }}>Message</th>
            <th style={{ border: "1px solid black" }}>unit num</th>
            <th style={{ border: "1px solid black" }}>noti type</th>
            <th style={{ border: "1px solid black" }}>time</th>
          </tr>
        </thead>
        <tbody>
          {notificationList.map((val, key) => {
            return (
              <tr key={key}>
                <td style={{ border: "1px solid black" }}>
                  {val.meter_number}
                </td>
                <td style={{ border: "1px solid black" }}>{val.message}</td>
                <td style={{ border: "1px solid black" }}>{val.unit_number}</td>
                <td style={{ border: "1px solid black" }}>
                  {val.notification_type}
                </td>
                <td style={{ border: "1px solid black" }}>
                  {val.notification_local_time}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Notifications;