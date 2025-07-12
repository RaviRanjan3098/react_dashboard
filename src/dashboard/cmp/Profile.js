import React from 'react';

const Portal = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-3">Developer Profile</h2>

      <div className="mb-4">
        <h5>👨‍💻 Experience</h5>
        <p>I have <strong>2 years</strong> of experience as a <strong> React/Next.js developer</strong>. I've worked on multiple real-world projects involving dashboard development, API integrations, dynamic routing, Redux-based state management, and responsive design.</p>
        <p>I have also contributed to the architecture and implementation of reusable component libraries and worked on performance optimization for enterprise-level apps.</p>
      </div>

      <div className="mb-4">
        <h5>Skills</h5>
        <ul className="list-group">
          <li className="list-group-item">✅ React.js, Next.js</li>
          <li className="list-group-item">✅ Redux, Redux-Saga, Context API</li>
          <li className="list-group-item">✅ HTML5, CSS3, JavaScript (ES6+)</li>
          <li className="list-group-item">✅ Tailwind CSS, Bootstrap</li>
          <li className="list-group-item">✅ RESTful APIs, Axios</li>
          <li className="list-group-item">✅ Git, GitHub, SVN</li>
        </ul>
      </div>

      <div className="mb-4">
        <h5>Projects I've Contributed To</h5>
        <ul>
          <li> Admin Dashboards with full CRUD functionality</li>
          <li> Real estate portal with listing filters and dynamic routes</li>
          <li> File explorer with drag-and-drop and folder structure</li>
        </ul>
      </div>

      <div>
        <h5> Contact</h5>
        <p>Email: <strong>rr8820776@gmail.com</strong></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/ravi-ranjan-91480b214" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/ravi-ranjan-91480b214</a></p>
      </div>
    </div>
  );
};

export default Portal;
