import './App.css';
import React, { useState } from 'react';

function App() {
  const [idData, setIdData] = useState(null); 


  const fetchUniqueId = async () => {
    try {
      const response = await fetch('http://localhost:3000/generate-uniqe-id'); 
      const data = await response.json(); 
      setIdData(data);
    } catch (error) {
      console.error('Error fetching ID:', error);
    }
  };

  return (
    <div className='BODY'>
      <h1>Generate Unique ID</h1>

      <button onClick={fetchUniqueId}> Generate ID </button>

      {idData && (
        <div>
          <p>
            <strong>Your Id is:</strong> {idData.modifiedID}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;