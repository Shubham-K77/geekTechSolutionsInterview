import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartInfo: [],
  grandTotal: 0,
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
        const item = state.cartInfo[itemIndex];
        const diff = quantity - item.purchasedQuantity;
        const newQuantityLeft = item.quantity - diff;
        const updatedItem = {
          ...item,
          totalPrice: quantity * item.price,
          purchasedQuantity: quantity,
          quantity: newQuantityLeft,
        };
        state.cartInfo[itemIndex] = updatedItem;
      }
    },
    addToCart: (state, action) => {
      const { itemData } = action.payload;
      const itemIndex = state.cartInfo.findIndex((i) => i.id === itemData.id);
      if (itemIndex !== -1) {
        const existingItem = state.cartInfo[itemIndex];
        if (existingItem.quantity <= 0) return;
        const updatedItem = {
          ...existingItem,
          purchasedQuantity: existingItem.purchasedQuantity + 1,
          totalPrice: (existingItem.purchasedQuantity + 1) * existingItem.price,
          quantity: existingItem.quantity - 1,
        };
        state.cartInfo[itemIndex] = updatedItem;
      } else {
        const newItem = {
          ...itemData,
          purchasedQuantity: 1,
          totalPrice: itemData.price,
          quantity: itemData.quantity - 1,
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
    sumCart: (state) => {
      state.grandTotal = state.cartInfo.reduce(
        (acc, item) => acc + item.totalPrice,
        0
      );
    },
  },
});
export default cartSlice.reducer;
export const {
  getCartData,
  updateCartData,
  addToCart,
  deleteItem,
  clearCart,
  sumCart,
} = cartSlice.actions;
