import React, { useEffect, useState } from 'react';
import './App.css'; // Import the CSS file

function App() {
  const [backendData, setBackendData] = useState({ userlist: [] });

  useEffect(() => {
    fetch("/api/users/list")
      .then(response => response.json())
      .then(data => {
        setBackendData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="app-container">
      {backendData.userlist && backendData.userlist.length > 0 ? (
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th> {/* Adjust based on available properties */}
            </tr>
          </thead>
          <tbody>
            {backendData.userlist.map((user, i) => (
              <tr key={i}>
                <td>{user.name}</td> {/* Adjust based on available properties */}
                <td>{user.email}</td> {/* Adjust based on available properties */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
}

export default App;
