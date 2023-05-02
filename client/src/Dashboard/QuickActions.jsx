import './QuickActions.css';

function QuickActions() {
  
  return (
    <div className="border">
        <label className='Quick'>Quick Actions</label>
        <div className='buttons'>
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
    </div>
  );
}

export default QuickActions;











