import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: null,
  reducers: {
    userValidation: (state, action) => {
      return action.payload;
    },

    logOut: () => {
      return null;
    },
  },
});

export default userSlice.reducer;
export const { userValidation, logOut } = userSlice.actions;
