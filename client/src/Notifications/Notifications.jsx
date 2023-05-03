import Axios from "axios";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Notifications.css";
import { useEffect } from "react";
import searchIcon from "../assets/Search-Icon.png"

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
    <div className="availableScreen">
      <Sidebar />
      <label className="overview">Notification Mangager |</label>
      <label className="notificationButtonStatus">Status: On</label>
      <button className="CreateNew">Create New Notification</button>
      <div className="switchButton">
        <p>Notifications Enabled?</p>
        <label class="switch">
          <input type="checkbox"></input>
          <span class="slider round"></span>
        </label>
      </div>
      <label className="NotiHistory">Notification History</label>
      <label className="Search">Search (Enter minimum 3 letters)</label>
      <label className="ToDate">To Date</label>

      <input type="text" className="SearchBy" placeholder="Search by Gateway or Meter"></input>
      <input type="text" className="FromDate" placeholder="From Date"></input>
      <input type="text" className="DateTo" placeholder="End Date"></input>
      <a href="/" target="_blank" rel="noreferrer">
        <img src={searchIcon} alt="Search Icon" className="searchNotificationIcon"></img>
      </a>

      <div>
        <table className="notiTable">
          <thead>
            <tr>
              <th>Meter Number</th>
              <th>Message</th>
              <th>Unit #</th>
              <th>Notification</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {notificationList.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.meter_number}</td>
                  <td>{val.message}</td>
                  <td>{val.unit_number}</td>
                  <td>{val.notification_type}</td>
                  <td>{val.notification_local_time}</td>
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