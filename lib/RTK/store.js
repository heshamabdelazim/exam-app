const { configureStore } = require("@reduxjs/toolkit");
// const studentSlice = require("./slices/studentSlice"); //it doesn't work
import studentSlice from "./slices/studentSlice"; //it works

export const myStore = configureStore({
  reducer: {
    student: studentSlice,
  },
});
