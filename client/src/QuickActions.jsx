import './Styles/QuickActions.css';
import { Link } from 'react-router-dom';

function QuickActions() {
  
  return (
    <div className="border">
        <label className='Quick'>Quick Actions</label>
        <Link to="/Customize" className='customize'>Customize</Link>
    </div>
  );
}

export default QuickActions;











