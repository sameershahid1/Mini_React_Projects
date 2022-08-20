import React, { useState, useEffect } from 'react'
import Load from './Component/Loading';
import Tour from './Component/Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [Loading, setLoading] = useState(false);
  const [Tours, setTours] = useState([]);

  const fetchTours=async()=>{
    setLoading(true);
    const response=await fetch(url);
    const tours=await response.json();
    setTours(tours);
  }
  useEffect(()=>fetchTours(),[])

  return (
    <main>
      {Loading&&<Load />}
      {!Loading&&<Tour tour={Tours}/>}
    </main>
  );
}

export default App