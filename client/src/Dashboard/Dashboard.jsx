import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Dashboard.css';
import QuickActions from './QuickActions';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ChartComponent from '../Analytics/ChartComponent';

const Dashboard = ({ userId }) => {
    const [date, setDate] = React.useState(new Date());
    const [userData, setUserData] = useState({});

    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/user/${userId}`);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [userId]);

    const onChange = (newDate) => {
      setDate(newDate);
    };

    return (
    //put className='back' to make the background white
    <div>
      <h1 className='dashboard'>{`Welcome ${userData.account_name}`}</h1>
      <Calendar onChange={onChange} value={date} />
      <div className='bord'>
      <label className='Noti'>Notifications</label>
      <Link to="/Notifications" className='See'>See All</Link>
      </div>
      <Sidebar/>
      <QuickActions/>
      <div className='analyticsBord'>
        <ChartComponent/>
      </div>
    </div>
    
  );
};

export default Dashboard;