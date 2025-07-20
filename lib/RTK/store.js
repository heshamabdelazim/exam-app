import { configureStore } from "@reduxjs/toolkit";
// const studentSlice = require("./slices/studentSlice"); //it doesn't work
import studentSlice from "./slices/studentSlice"; //it works
import myError from "./slices/error";

export const myStore = configureStore({
  reducer: {
    student: studentSlice,
    errorTxt: myError,
  },
});
