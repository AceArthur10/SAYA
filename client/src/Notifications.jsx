import Sidebar from './Sidebar';
import './Styles/Notifications.css';
import { Link } from 'react-router-dom';

function Notifications() {
  
  return (
    //put className='back' to make the background white
    <div >
    <div className="bord">
        <label className='Noti'>Notifications</label>
        <Link to="/Notifications" className='See'>See All</Link>
    </div>
    <Sidebar/>
    </div>
  );
}

export default Notifications;











