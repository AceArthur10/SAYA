import Sidebar from './Sidebar';
import { useState } from 'react';
import { useEffect } from 'react';

const Dashboard = () => {
  // const [authenticated, setauthenticated] = useState(null);
  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("authenticated");
  //   if (loggedInUser) {
  //   setauthenticated(loggedInUser);
  //   }
  // }, []);
    
  // if (!authenticated) {
  // // Redirect
  // } else {
    return (
    <div>
      <h1 className='dashboard'>This is the dashboard</h1>
      <Sidebar/>
    </div>
  );
};

export default Dashboard;
