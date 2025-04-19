import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  itemInfo: [
    {
      id: 1,
      name: "Handwoven Wool Shawl",
      price: 2500,
      quantity: 15,
      category: "Clothing",
      imageUrl:
        "https://images.unsplash.com/photo-1702628907361-818e77fc05c4?q=80&w=2133&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Thangka Painting - Buddha Mandala",
      price: 12000,
      quantity: 5,
      category: "Art",
      imageUrl:
        "https://images.unsplash.com/photo-1717935500659-23c2a9529763?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Himalayan Salt Lamp",
      price: 1800,
      quantity: 20,
      category: "Home Decor",
      imageUrl:
        "https://images.unsplash.com/photo-1672935171134-9b6fd69c4996?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Lokta Paper Notebook",
      price: 450,
      quantity: 50,
      category: "Stationery",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1711051505860-346a8b58d882?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Wooden Carved Elephant Statue",
      price: 3200,
      quantity: 10,
      category: "Handicraft",
      imageUrl:
        "https://images.unsplash.com/photo-1690667939358-50ff2a4f5a50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fFdvb2RlbiUyMENhcnZlZCUyMEVsZXBoYW50JTIwU3RhdHVlfGVufDB8fDB8fHww",
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
