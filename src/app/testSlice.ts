import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tmp: { value: "" },
};

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    setTmp: (state, action) => {
      state.tmp.value = action.payload;
    },
  },
});

export const { setTmp } = todoSlice.actions;

export default todoSlice.reducer;
