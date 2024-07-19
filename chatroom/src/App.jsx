import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chatroom from './Chatroom';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Make a request to the backend API
    axios.get('http://localhost:5173/api/data')  // Assuming localhost for development
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div>
      <Chatroom />
    </div>
  );
}

export default App;