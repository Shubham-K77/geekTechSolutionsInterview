import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemData";
import cartSlice from "./cartData";
const store = configureStore({
  reducer: {
    items: itemSlice,
    cart: cartSlice,
  },
});
export default store;
