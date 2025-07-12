import React from 'react';

const Dashboard = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Welcome to the IT Company Dashboard</h2>

      <div className="row mb-4">
        <div className="col-sm-6 col-lg-4">
          <div className="card text-bg-primary mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Projects</h5>
              <p className="card-text fs-4">42 Active</p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-lg-4">
          <div className="card text-bg-success mb-3">
            <div className="card-body">
              <h5 className="card-title">Employees</h5>
              <p className="card-text fs-4">128 Team Members</p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-lg-4">
          <div className="card text-bg-warning mb-3">
            <div className="card-body">
              <h5 className="card-title">New Clients</h5>
              <p className="card-text fs-4">15 This Month</p>
            </div>
          </div>
        </div>
      </div>

      <h4>Recent Activities</h4>
      <ul className="list-group">
        <li className="list-group-item">✅ Deployment completed for Project Alpha</li>
        <li className="list-group-item">🧑‍💻 John added to Project Beta team</li>
        <li className="list-group-item">📁 New project proposal received from XYZ Ltd.</li>
        <li className="list-group-item">💬 Feedback received on client dashboard design</li>
      </ul>
    </div>
  );
};

export default Dashboard;
