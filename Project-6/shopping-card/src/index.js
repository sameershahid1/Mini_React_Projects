import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/Store/Store';

store.subscribe(()=>{
  console.log("Store Changed!",store.getState());
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
   <Provider store={store}>
     <App />
   </Provider>
  </React.StrictMode>
);


