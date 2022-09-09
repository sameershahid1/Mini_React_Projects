import { configureStore} from "@reduxjs/toolkit";
import authSlice from '../Slice/auth-slice';
import cartSlice from '../Slice/cart-slice';
import uiSlice from "../Slice/Ui-Slice";

const store=configureStore({
    reducer:{
        auth: authSlice.reducer,
        cart:cartSlice.reducer,
        ui:uiSlice.reducer
    }
});

export default store;