import React, { useState, useEffect } from 'react';
import { fetchData } from './api';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then(response => setData(response.message));
  }, []);

  return (
    <div className="App">
      <h1>Frontend-Backend Example</h1>
      <p>{data ? data : "Loading..."}</p>
    </div>
  );
}

export default App;
