import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], quantity: 0, totalAmount: 0 },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (cartItem) => cartItem.id === newItem.id
      );
      if (!existingItem) {
        state.items.push(newItem);
      } else {
        existingItem.quantity++;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((cartItem) => cartItem.id === id);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
    },
    onOrder(state) {
      state.items = [];
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
