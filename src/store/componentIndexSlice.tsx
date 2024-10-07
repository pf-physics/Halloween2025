import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "index",
  initialState: {
    value: 0,
  },
  reducers: {
    incComponentIndex: (state) => {
      if (state.value) state.value += 1;
    },
    setComponentIndex: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { incComponentIndex, setComponentIndex } = counterSlice.actions;

export default counterSlice.reducer;
