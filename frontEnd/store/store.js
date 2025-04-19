import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemData";
import cartSlice from "./cartData";
const store = configureStore({
  reducer: {
    items: itemSlice,
    cartInfo: cartSlice,
  },
});
export default store;
