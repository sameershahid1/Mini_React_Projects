import React from 'react'
import {Alert} from '@mui/material'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { uiActions } from '../../Redux/Slice/Ui-Slice'

const Notification = ({type,message}) => {
const NotificationIsOpen=useSelector((state)=>state.ui.notification);
const uiDispatch=useDispatch();
const handleClose=()=>{
uiDispatch(uiActions.showNotification({
  open:false
}))
}

return (
    <div>
    {NotificationIsOpen.open&&<Alert onClose={handleClose} severity={type}>{message}</Alert>}
    </div>
  )
}

export default Notification