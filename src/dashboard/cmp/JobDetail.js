import React from 'react';


const JobDetail = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-3">Job Detail: Frontend Developer</h2>

      <div className="mb-3">
        <strong>Department:</strong> Engineering
      </div>

      <div className="mb-3">
        <strong>Location:</strong> Jaipur, Rajasthan (Hybrid)
      </div>

      <div className="mb-3">
        <strong>Experience:</strong> 1.5 – 3 Years
      </div>


      <div className="mb-4">
        <h5>How to Apply:</h5>
        <p>
          Send your updated resume and portfolio link to <strong>careersayx@gmail.com</strong>.
        </p>
        <p>
          Shortlisted candidates will be contacted for an interview.
        </p>
      </div>
    </div>
  );
};

export default JobDetail;
