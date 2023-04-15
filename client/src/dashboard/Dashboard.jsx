import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Dashboard.css";
import Quickaction from "./Quickaction";
import Notifications from "../notifications/Notifications";
import Analytics from "../analytics/Analytics";
import Sidebar from "../sidebar/Sidebar";

const Dashboard = () => {
  const [date, setDate] = React.useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    //put className='back' to make the background white
    <div>
      <h1 className="dashboard">
        The Jefferson | 123 Internet St. Los Angeles, CA
      </h1>
      <Calendar onChange={onChange} value={date} />
      <Notifications />
      <Sidebar />
      <Quickaction />
      <Analytics />
    </div>
  );
};

export default Dashboard;
