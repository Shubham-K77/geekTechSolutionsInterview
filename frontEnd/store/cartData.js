import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartInfo: [],
};
const cartSlice = createSlice({
  name: "productCart",
  initialState,
  reducers: {
    getCartData: (state) => {
      return state.cartInfo;
    },
    updateCartData: (state, action) => {
      const { id, quantity } = action.payload;
      const itemIndex = state.cartInfo.findIndex((item) => item.id == id);
      if (itemIndex !== -1) {
        state.cartInfo[itemIndex].totalPrice =
          quantity * state.cartInfo[itemIndex].price;
        state.cartInfo[itemIndex].purchasedQuantity = quantity;
      }
    },
    addToCart: (state, action) => {
      const { itemData } = action.payload;
      itemData.purchasedQuantity = 1;
      itemData.totalPrice = itemData.price;
      state.cartInfo.push(itemData);
    },
  },
});
export default cartSlice.reducer;
export const { getCartData, updateCartData, addToCart } = cartSlice.actions;
