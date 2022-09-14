import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  state: "idle" // "loading" , failed
};

export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return 1;
  }
);

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      console.log("increment", state, action);
      state.value += action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(incrementAsync.pending, (state) => {
      state.state = "loading"
    }),
    builder.addCase(incrementAsync.fulfilled, (state, action) => {
      state.value += action.payload;
      state.state = "idle"

    }),
    builder.addCase(incrementAsync.rejected, (state) => {
      state.state = "failed"
    })
    
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
