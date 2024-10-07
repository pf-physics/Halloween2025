import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const miscSlice = createSlice({
  name: "misc",
  initialState: {
    bossTime: false as boolean,
  },
  reducers: {
    // for onLoad
    setBossTime: (state, action: PayloadAction<boolean>) => {
      state.bossTime = action.payload;
    },
  },
});

export const { setBossTime } = miscSlice.actions;

export default miscSlice.reducer;
