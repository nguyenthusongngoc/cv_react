import { createSlice } from "@reduxjs/toolkit";

const user = localStorage.getItem('TOKEN') ? localStorage.getItem('TOKEN') : null

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: 1,
    name: 'ngoc',
    email: 'nguyenthusongngoc@gmail.com',
    favorite: [
      {
        id: 1,
        title: 'product 1'
      }
    ]
  },
  reducers: {

    addFavorite(state, action) {
      const index = state.findIndex((item) => {
        return item.id === action.payload.id;
      });

    },
  },
});

export const {

  addFavorite,
} = userSlice.actions;
export default userSlice.reducer;
