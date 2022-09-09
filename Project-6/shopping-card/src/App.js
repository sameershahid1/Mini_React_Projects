import React,{useEffect} from 'react';
import Auth from './Component/Auth/Auth';
import Layout from './Component/Layout/Layout';
import { useSelector,useDispatch } from 'react-redux';
import Notification from './Component/Notification/Notification';
import {uiActions} from './Redux/Slice/Ui-Slice';
import {cartActions} from './Redux/Slice/cart-slice';

let IsFistRender=true;

const App = () => {
//Login
const isLogedIn=useSelector(state=>state.auth.isLogedIn)

//Cart
const cart=useSelector((state)=>state.cart);
const cartDispatch=useDispatch();


//UI-Notisfication
const uiNotification=useSelector((state)=>state.ui.notification);
const uiDispatch=useDispatch();

//Getting the data from the Server
useEffect(()=>{
  const FetchingTheData=async()=>
  {
    try
    {
      fetch('https://shopping-card-ee1f6-default-rtdb.firebaseio.com/cartItems.json').
      then((RAW)=>RAW.json()).
      then((Data)=>{
        if(Data.itemList==undefined)
        {
          Data.itemList=[];
        }
        cartDispatch(cartActions.ReplacingData({
        itemList:Data.itemList,
        showCart:Data.showCart,
        totalQuantity:Data.totalQuantity
      }))        
      });
    }
    catch(error)
    {
      console.log(error);
    }
  }


  FetchingTheData();

},[]);

//Sending the data to the server
useEffect(()=>{
if(IsFistRender==true)
{
  IsFistRender=false;
  return;
}

const SendRequest=async()=>{

//Seeding Request State
uiDispatch(uiActions.showNotification({
  message:"Sending Request",
  type:"warning",
  open:true
}));

//Sending the data to the sever side
const res=await fetch('https://shopping-card-ee1f6-default-rtdb.firebaseio.com/cartItems.json',{method:"PUT",body:JSON.stringify(cart)});
const Data=await res.json();

//Successfully sended the Request State
uiDispatch(uiActions.showNotification({
  message:"Sent Request to database successflly",
  type:"success",
  open:true
}));
}

//Getted Error While Seending Request State
SendRequest().catch(error=>{
uiDispatch(uiActions.showNotification({
  message:"Sending Request Failed",
  type:"error",
  open:true
}));
}
);


},[cart]);


return (
    <div className="App">
      {(isLogedIn&&uiNotification)&&<Notification type={uiNotification.type}  message={uiNotification.message}/>}
       {!(isLogedIn)&&<Auth/>}
       {isLogedIn&&<Layout/>}
    </div>
  )
}

export default App