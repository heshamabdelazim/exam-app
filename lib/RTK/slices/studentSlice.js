import { createSlice } from "@reduxjs/toolkit";
import { allStudents } from "../../data";

const userSlice = createSlice({
  name: "userSlice",
  //   initialState: { userName: "test" },
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
