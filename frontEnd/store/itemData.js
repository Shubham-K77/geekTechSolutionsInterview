import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  itemInfo: [
    {
      id: 1,
      name: "Handwoven Wool Shawl",
      price: 2500,
      quantity: 15,
      category: "Clothing",
    },
    {
      id: 2,
      name: "Thangka Painting - Buddha Mandala",
      price: 12000,
      quantity: 5,
      category: "Art",
    },
    {
      id: 3,
      name: "Himalayan Salt Lamp",
      price: 1800,
      quantity: 20,
      category: "Home Decor",
    },
    {
      id: 4,
      name: "Lokta Paper Notebook",
      price: 450,
      quantity: 50,
      category: "Stationery",
    },
    {
      id: 5,
      name: "Wooden Carved Elephant Statue",
      price: 3200,
      quantity: 10,
      category: "Handicrafts",
    },
  ],
};
const itemSlice = createSlice({
  name: "ItemSlice",
  initialState,
  reducers: {
    getInfo: (state) => {
      return state.itemInfo;
    },
    createNewItem: (state, action) => {
      state.itemInfo.push(action.payload);
    },
  },
});
export default itemSlice.reducer;
export const { getInfo, createNewItem } = itemSlice.actions;
