import Sidebar from './Sidebar';
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Styles/Dashboard.css';
import QuickActions from './QuickActions';
import Notifications from './Notifications';
import Analytics from './Analytics';

const Dashboard = () => {
    const [date, setDate] = React.useState(new Date());

    const onChange = (newDate) => {
      setDate(newDate);
    };

    return (
    //put className='back' to make the background white
    <div>
      <h1 className='dashboard'>The Jefferson | 123 Internet St. Los Angeles, CA</h1>
      <Calendar onChange={onChange} value={date} />
      <Notifications/>
      <Sidebar/>
      <QuickActions/>
      <Analytics/>
    </div>
    
  );
};

export default Dashboard;
