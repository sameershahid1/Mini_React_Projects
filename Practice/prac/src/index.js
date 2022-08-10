import React from 'react';
import ReactDOM from 'react-dom/client';


function Greeting(){
  return <h4>Hello, you Fucker HHE</h4>;
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Greeting/>
  </React.StrictMode>
);
