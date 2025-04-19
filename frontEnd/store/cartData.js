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
      const item = state.cartInfo.find((i) => i.id === itemData.id);
      if (item) {
        item.purchasedQuantity += 1;
        item.totalPrice = item.purchasedQuantity * item.price;
      } else {
        const newItem = {
          ...itemData,
          purchasedQuantity: 1,
          totalPrice: itemData.price,
        };
        state.cartInfo.push(newItem);
      }
    },
    deleteItem: (state, action) => {
      const { itemId } = action.payload;
      state.cartInfo = state.cartInfo.filter((item) => item.id !== itemId);
    },
    clearCart: (state) => {
      state.cartInfo = [];
    },
  },
});
export default cartSlice.reducer;
export const { getCartData, updateCartData, addToCart, deleteItem, clearCart } =
  cartSlice.actions;
