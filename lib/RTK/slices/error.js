import { createSlice } from "@reduxjs/toolkit";

const myError = createSlice({
  name: "myError",
  initialState: "",
  reducers: {
    setError: (state, actions) => {
      return actions.payload; //return "Sorry, something went wrong"
    },
  },
});

export default myError.reducer;
export const { setError, deleteError } = myError.actions;
