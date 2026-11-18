import React from 'react';
import './Professor.css';

function Professor() {
  const professors = [
    {
      name: 'Dr. Alan Turing',
      subject: 'Artificial Intelligence',
      department: 'Information Technology',
      email: 'alan@example.com',
    },
    {
      name: 'Prof. Grace Hopper',
      subject: 'Web Development',
      department: 'Information Technology',
      email: 'grace@example.com',
    },
    {
      name: 'Dr. Edgar Codd',
      subject: 'Database Management',
      department: 'Information Technology',
      email: 'edgar@example.com',
    },
  ];

  return (
    <div className="professor-section">
      <h2>Department Professors</h2>
      <div className="professor-cards">
        {professors.map((prof, index) => (
          <div className="professor-card" key={index}>
            <h3>{prof.name}</h3>
            <p className="subject">{prof.subject}</p>
            <p>{prof.department}</p>
            <p className="email">{prof.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Professor