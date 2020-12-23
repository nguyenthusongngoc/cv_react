import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: [],
  reducers: {
    addCart(state, action) {
      // if(state.findIndex(action.payload))
      console.log(state);
      state.push(action.payload);
      findIndex(state,action.payload);
    },
    delCart(state, action) {
      state.value--;
    },
    removeCart(state, action) {
      state.value += action.payload;
    },
  },
});

const findIndex = (arr, obj) => {
  console.log(arr);
  console.log(obj);
  let index = -1;
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      // if (arr[i].product.id === obj.id) {
      //   index = i;
      //   break;
      // }
    }
  }
  // return index;
};

export const { addCart, delCart, removeCart } = counterSlice.actions;
export default counterSlice.reducer;
