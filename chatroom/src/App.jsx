import React from 'react'
import { Fragment } from 'react'
import Chatroom from './Chatroom.jsx'
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Make a request to the backend API
    axios.get('/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <Fragment>
      <Chatroom></Chatroom>
    </Fragment>
  )
}

export default App
