import './QuickActions.css';
import emailIcon from "../assets/add-message.png";
import alertIcon from "../assets/warning.png";
import clientIcon from "../assets/add-user.png"
import reportIcon from "../assets/report.png"

function QuickActions() {

  return (
    <div className='availableScreen'>
      <div className="border">
        <label className='Quick'>Quick Actions</label>
        <div className='buttons'>
          <button className="quick-action-button">
            <a href="/threshold"><img src={alertIcon} className="quickActionIcon" alt="Threshold Warning Button"></img></a>
            <p>Set Threshold</p>
          </button>
          <button className="quick-action-button">
            <a href="/emailNotification"><img src={emailIcon} className="quickActionIcon" alt="Email Button"></img></a>
            <p>Send Email</p>
          </button>
          <button className="quick-action-button">
            <a href="/addTenant"><img src={clientIcon} className="quickActionIcon" alt="Add Client Button"></img></a>
            <p>Add New Tenant</p>
          </button>
          <button className="quick-action-button">
            <a href="/exportReport"><img src={reportIcon} className="quickActionIcon" alt="Export Report Button"></img></a>
            <p>Export Report</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuickActions;











