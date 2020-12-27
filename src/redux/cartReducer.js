import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCart(state, action) {
      const index = state.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (index === -1) {
        state.push(action.payload);
      } else {
        state[index].quantity++;
      }
    },
    delCart(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
    clearCart(state) {
      state.length = 0;
    },
    plusQty(state, action) {
      const index = state.findIndex((item) => {
        return item.id === action.payload.id;
      });
      state[index].quantity++;
    },
    minusQty(state, action) {
      const index = state.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (state[index].quantity >= 1) {
        state[index].quantity--;
      }
    },
    payCart(state,action) {
      
    }
  },
});

export const {
  addCart,
  delCart,
  clearCart,
  plusQty,
  minusQty,
  payCart
} = cartSlice.actions;
export default cartSlice.reducer;
