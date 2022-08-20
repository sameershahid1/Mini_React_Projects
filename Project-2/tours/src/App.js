import React, { useState, useEffect } from 'react'
import Load from './Component/Loading';
import Tour from './Component/Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [Loading, setLoading] = useState(true);
  const [Tours, setTours] = useState([]);

  const removeTour=(id)=>{
    const NewTour=Tours.filter(d=>(id!==d.id));
    setTours(NewTour);
  }

  const fetchTours= async ()=>{
    setLoading(true);
    try
    {
        const response=await fetch(url);
        const tours=await response.json();
        setLoading(false);
        setTours(tours);
      }catch(error){
        console.log(error);
      }
  };

useEffect(()=>{fetchTours()},[])

  return (
    <main>
      {Loading&&<Load />}
      {!Loading&&<Tour tour={Tours} removeTour={removeTour}/>}
      {Tours.length==0&&<div className='title'>
         <h2>no tours left</h2>
         <button className='btn'  onClick={fetchTours}>Refresh</button>
      </div>}
    </main>
  );
}

export default App